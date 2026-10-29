"use client";

import React, { useState } from "react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export default function AdminLoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: AdminLoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    // Accepted hardcoded credentials
    const validUsers = ["admin", "arvind", "aravind"];
    const validPass = ["storiesbyarvind2026", "admin123", "arvind2026"];

    if (validUsers.includes(cleanUser) && validPass.includes(cleanPass)) {
      setError(null);
      onLoginSuccess();
    } else {
      setError("Invalid username or password. Please verify your credentials.");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-espresso/15 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-espresso text-linen px-7 py-6 text-center relative border-b border-terracotta/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-linen/70 hover:text-white text-xl cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="w-12 h-12 bg-white/10 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-3 border border-white/10">
            🔒
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">Studio Admin Portal</h3>
          <p className="text-xs text-linen/75 mt-1 font-light">
            Enter studio manager credentials to customize images and content
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="p-7 space-y-4">
          <div>
            <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1.5">
              Admin Username
            </label>
            <input
              type="text"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. admin or arvind"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-espresso/20 bg-linen/50 focus:border-terracotta focus:bg-white outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1.5">
              Studio Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-espresso/20 bg-linen/50 focus:border-terracotta focus:bg-white outline-none transition"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
              ⚠️ {error}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-terracotta hover:bg-espresso text-white font-bold py-3.5 px-6 rounded-xl transition shadow-md cursor-pointer text-sm"
            >
              Sign In to Studio Settings →
            </button>
          </div>

          <p className="text-[11px] text-center text-charcoal/60 pt-2 font-light">
            Stories by Arvind • Private Studio CMS Access
          </p>
        </form>
      </div>
    </div>
  );
}
