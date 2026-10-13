"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl text-purple-600">Webloom</div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <button className="hidden md:block bg-purple-600 text-white px-5 py-2 rounded-full">Get Started</button>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full">Get Started</button>
        </div>
      )}
    </header>
  );
}