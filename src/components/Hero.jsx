import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ZbxuTuCsFbT2izmF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:pt-36">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Star className="h-4 w-4 text-teal-300" />
          <span className="text-xs uppercase tracking-widest text-teal-200/90">Emerald Bot</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Celestial-grade music for your Discord server
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
          A sleek dashboard and effortless setup. Inspired by an astronomical zodiac wheel—
          orbit your playlists around a brilliant, living star map.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=36767680&scope=bot%20applications.commands"
            className="group inline-flex items-center justify-center rounded-lg bg-teal-400 px-5 py-3 font-medium text-black shadow-lg shadow-teal-400/30 transition hover:bg-teal-300"
          >
            Invite Emerald
          </a>
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Open Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}
