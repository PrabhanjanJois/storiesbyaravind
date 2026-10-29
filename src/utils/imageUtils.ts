/**
 * Utility functions for image URL parsing and local file upload compression.
 */

/**
 * Normalizes any image URL, converting Google Drive share links into direct viewable image URLs.
 */
export function normalizeImageUrl(input: string): string {
  if (!input) return "";
  const trimmed = input.trim();

  // If already a data URL or relative path
  if (trimmed.startsWith("data:") || trimmed.startsWith("/")) {
    return trimmed;
  }

  // Google Drive sharing patterns:
  // https://drive.google.com/file/d/1wXYZabc.../view?usp=sharing
  // https://drive.google.com/open?id=1wXYZabc...
  // https://drive.google.com/uc?id=1wXYZabc...
  const driveMatch =
    trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1];
    // Google's direct image CDN endpoint provides high-res images directly without redirection loops
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  return trimmed;
}

/**
 * Compresses an uploaded image file on an offscreen canvas and returns a Base64 data URL.
 * Keeps file size small (~100KB-250KB) so multiple custom uploads easily fit in localStorage.
 */
export function compressImageFile(
  file: File,
  maxWidth = 1600,
  quality = 0.82
): Promise<string> {
  return new Promise((resolve, reject) => {
    // If not an image, reject
    if (!file.type.startsWith("image/")) {
      reject(new Error("File is not an image"));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target?.result as string;
      const img = new Image();

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Scale down if larger than maxWidth
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(src);
          return;
        }

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedDataUrl);
      };

      img.onerror = () => {
        // Fallback to raw data url if canvas fails
        resolve(src);
      };

      img.src = src;
    };

    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
