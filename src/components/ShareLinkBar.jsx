import React, { useState } from 'react';
import { Link as LinkIcon, Copy, Check, Trash } from 'lucide-react';

export default function ShareLinkBar({ url, active, onStop }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="space-y-2">
      <div className="text-xs font-medium text-neutral-300">Share link</div>
      <div className={`flex items-center gap-2 rounded-xl border px-2 py-2 ${active ? 'border-neutral-800 bg-neutral-900' : 'border-red-900/60 bg-red-950/30'}`}>
        <div className={`p-2 rounded-md ${active ? 'bg-neutral-800 text-neutral-300' : 'bg-red-900/30 text-red-400'}`}>
          <LinkIcon size={16} />
        </div>
        <input
          readOnly
          value={url || 'Sharing disabled'}
          className={`flex-1 bg-transparent outline-none text-sm ${active ? 'text-neutral-200' : 'text-red-300/80'} placeholder:text-neutral-500`}
          placeholder="Link will appear here"
        />
        <button
          type="button"
          onClick={copy}
          disabled={!active}
          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm border transition-colors ${
            active
              ? 'border-emerald-700 bg-emerald-600/10 text-emerald-300 hover:bg-emerald-600/20'
              : 'border-neutral-800 bg-neutral-900 text-neutral-500'
          }`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied' : 'Copy link'}
        </button>
        <button
          type="button"
          onClick={onStop}
          disabled={!active}
          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm border transition-colors ${
            active
              ? 'border-red-800 bg-red-900/20 text-red-300 hover:bg-red-900/30'
              : 'border-neutral-800 bg-neutral-900 text-neutral-500'
          }`}
        >
          <Trash size={16} />
          Stop sharing
        </button>
      </div>
      {!active && (
        <div className="text-[11px] text-red-300/80">
          Sharing has been disabled. Enable access again by changing settings above.
        </div>
      )}
    </div>
  );
}
