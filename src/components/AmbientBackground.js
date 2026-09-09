// src/components/AmbientBackground.js
import React from 'react';

// A fixed, full-page decorative layer: soft moving gradient blobs + faint grid.
// Pure CSS/Tailwind (no extra deps), sits behind all content via -z-10.
const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark-blue">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-orange/30 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-accent-pink/25 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:4s]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue/40 to-dark-blue" />
    </div>
  );
};

export default AmbientBackground;
