import React from 'react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative w-full bg-gradient-to-b from-black via-[#030712] to-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.25)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Celestial Dashboard</h2>
          <p className="mt-3 text-white/70">
            A dark constellation map anchors controls arranged in a zodiac-like ring.
          </p>
        </div>

        {/* Mock dashboard UI */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-medium text-white/90">Now Playing</h3>
            <div className="mt-3 rounded-lg bg-gradient-to-br from-teal-400/10 to-emerald-400/10 p-4">
              <div className="h-3 w-full rounded-full bg-white/10">
                <div className="h-3 w-1/3 rounded-full bg-teal-400" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <span>Constellation — Emerald Remix</span>
                <span>01:24 / 03:58</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-medium text-white/90">Queue</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {['Stellar Drift', 'Zodiac Dreams', 'Orbital Echoes', 'Nebula Lights'].map((t) => (
                <li key={t} className="flex items-center justify-between">
                  <span className="truncate">{t}</span>
                  <button className="rounded-md px-2 py-1 text-xs text-teal-300 hover:bg-teal-400/10">Play</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-medium text-white/90">Guild Settings</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <div className="text-white/60">Prefix</div>
                <div className="mt-1 font-mono text-teal-300">/</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <div className="text-white/60">Volume</div>
                <div className="mt-1">85%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <div className="text-white/60">DJ Only</div>
                <div className="mt-1">Enabled</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <div className="text-white/60">Autoplay</div>
                <div className="mt-1">On</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <h3 className="text-sm font-medium text-white/90">Zodiac Wheel</h3>
            <div className="mt-3 aspect-square rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.6)_70%)]">
              <div className="relative h-full w-full">
                {/* ring markers */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300"
                    style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(42%)` }}
                  />
                ))}
                {/* center */}
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-white/60">Months in Roman numerals encircle the constellation hub.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
