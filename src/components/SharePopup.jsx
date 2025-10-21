import React, { useMemo, useState } from 'react';
import { Folder, Users, Globe } from 'lucide-react';
import PermissionToggle from './PermissionToggle';
import AudienceSelector from './AudienceSelector';
import ShareLinkBar from './ShareLinkBar';

export default function SharePopup() {
  const [permission, setPermission] = useState('view'); // 'view' | 'edit'
  const [audience, setAudience] = useState('everyone'); // 'everyone' | 'specific'
  const [emails, setEmails] = useState([]);
  const [active, setActive] = useState(true);

  const shareUrl = useMemo(() => {
    const base = 'https://share.example.com/folder/3f7c9a';
    const params = new URLSearchParams();
    params.set('perm', permission);
    params.set('aud', audience);
    return active ? `${base}?${params.toString()}` : '';
  }, [permission, audience, active]);

  const stopSharing = () => {
    setActive(false);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md shadow-2xl shadow-black/40">
      <div className="p-4 border-b border-neutral-800 flex items-center gap-3">
        <div className="p-2 rounded-md bg-neutral-800 text-neutral-200 border border-neutral-700">
          <Folder size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-neutral-100 truncate">Marketing Assets</div>
          <div className="text-[11px] text-neutral-400">/Teams/Q1/Creative</div>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[11px] text-neutral-400">
          {audience === 'everyone' ? <Globe size={14} /> : <Users size={14} />}
          <span className="capitalize">{audience}</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <PermissionToggle value={permission} onChange={setPermission} disabled={!active} />

        <div className="space-y-2">
          <div className="text-xs font-medium text-neutral-300">Who can access</div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="flex">
              <button
                className={`flex-1 px-3 py-2 text-xs rounded-l-xl transition-colors ${
                  audience === 'everyone' ? 'bg-emerald-500/10 text-emerald-300 border-r border-neutral-800' : 'text-neutral-300/80 hover:text-neutral-100'
                }`}
                onClick={() => setAudience('everyone')}
                disabled={!active}
              >
                Everyone with the link
              </button>
              <button
                className={`flex-1 px-3 py-2 text-xs rounded-r-xl transition-colors ${
                  audience === 'specific' ? 'bg-emerald-500/10 text-emerald-300 border-l border-neutral-800' : 'text-neutral-300/80 hover:text-neutral-100'
                }`}
                onClick={() => setAudience('specific')}
                disabled={!active}
              >
                Specific emails
              </button>
            </div>
            {audience === 'specific' && (
              <div className="p-3 border-t border-neutral-800">
                <AudienceSelector emails={emails} setEmails={setEmails} disabled={!active} />
              </div>
            )}
          </div>
        </div>

        <ShareLinkBar url={shareUrl} active={active} onStop={stopSharing} />
      </div>
    </div>
  );
}
