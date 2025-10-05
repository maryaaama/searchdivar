"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#020617] to-[#0a1a2f] border-b border-cyan-700/40 shadow-[0_0_20px_rgba(0,200,255,0.15)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* لوگو Alipourweb (سمت چپ) */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-semibold text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">
            Alipourweb
          </span>
        </Link>

        {/* عنوان Search Divar (سمت راست) */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,200,255,0.7)]">
          Bazaryab
        </h1>
      </div>
    </header>
  );
};

export default Header;
