import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-950/10 via-neutral-950/40 to-neutral-950" />
      <div className="relative z-10 container mx-auto h-full px-4 flex items-end pb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Share folders securely
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-300/90 max-w-xl">
            Control access with view or edit permissions and decide who can open your link.
          </p>
        </div>
      </div>
    </section>
  );
}
