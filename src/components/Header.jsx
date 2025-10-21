import React from 'react';
import { Lock } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 bg-neutral-950/80 border-b border-neutral-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Lock size={18} />
          </div>
          <span className="font-semibold tracking-tight text-neutral-100">SecureShare</span>
        </div>
        <div className="text-xs text-neutral-400">Compact Folder Sharing UI</div>
      </div>
    </header>
  );
}
