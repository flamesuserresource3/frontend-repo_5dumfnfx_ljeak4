import React from 'react';

export default function InstallCTA() {
  return (
    <section className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Invite and Launch</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Bring Emerald to your server in seconds, then control everything from a streamlined web dashboard.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=36767680&scope=bot%20applications.commands"
            className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-5 py-3 font-medium text-black shadow-lg shadow-teal-400/30 transition hover:bg-teal-300"
          >
            Invite Emerald
          </a>
          <a
            href="https://discord.gg/"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Join Support Server
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50">Replace YOUR_CLIENT_ID with your Discord application ID.</p>
      </div>
    </section>
  );
}
