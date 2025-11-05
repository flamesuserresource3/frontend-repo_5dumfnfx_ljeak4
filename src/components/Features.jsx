import React from 'react';
import { Music, Shield, Settings, Rocket } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'High-Fidelity Music',
    desc: 'Crystal-clear playback with queue control, looping, and seamless crossfade.',
  },
  {
    icon: Settings,
    title: 'Elegant Dashboard',
    desc: 'Adjust volumes, prefixes, and permissions from a minimal, modern control center.',
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    desc: 'Stable performance and robust moderation-friendly defaults for peace of mind.',
  },
  {
    icon: Rocket,
    title: 'Fast Setup',
    desc: 'Invite, pick your channel, and go live in seconds—no clutter, no confusion.',
  },
];

export default function Features() {
  return (
    <section className="relative z-10 w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Designed for the Cosmos</h2>
          <p className="mt-3 text-white/70">
            Every control aligns like constellations—simple, beautiful, and powerful.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-400/10 text-teal-300 ring-1 ring-inset ring-teal-300/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
