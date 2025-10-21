import React, { useMemo, useState } from 'react';
import { X, Mail, Users } from 'lucide-react';

const emailRegex = /^(?:[a-zA-Z0-9_'^&\/+{}=!?$%#`~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export default function AudienceSelector({ emails, setEmails, disabled }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const addEmail = (raw) => {
    const candidate = raw.trim();
    if (!candidate) return;
    if (!emailRegex.test(candidate)) {
      setError('Invalid email');
      return;
    }
    if (emails.includes(candidate)) {
      setError('Already added');
      return;
    }
    setEmails([...emails, candidate]);
    setInput('');
    setError('');
  };

  const removeEmail = (e) => {
    setEmails(emails.filter((x) => x !== e));
  };

  const chips = useMemo(() => emails.map((e) => (
    <span key={e} className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-800/80 px-2 py-1 text-xs text-neutral-200">
      <Mail size={12} className="text-neutral-400" />
      {e}
      <button type="button" onClick={() => removeEmail(e)} disabled={disabled} className="text-neutral-400 hover:text-neutral-200">
        <X size={12} />
      </button>
    </span>
  )), [emails, disabled]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addEmail(input);
    } else if (e.key === 'Backspace' && !input && emails.length) {
      removeEmail(emails[emails.length - 1]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">Only invited people can open the link</div>
        <div className="text-[11px] text-neutral-400 flex items-center gap-1">
          <Users size={12} /> {emails.length}
        </div>
      </div>
      <div className={`flex flex-wrap gap-2 rounded-lg border bg-neutral-950/60 px-3 py-2 focus-within:border-emerald-700 ${error ? 'border-red-700' : 'border-neutral-800'}`}>
        {chips}
        <input
          type="email"
          disabled={disabled}
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(''); }}
          onKeyDown={onKeyDown}
          placeholder="Type email and press Enter"
          className="flex-1 min-w-[160px] bg-transparent outline-none text-sm placeholder:text-neutral-500 text-neutral-100"
        />
      </div>
      {error && <div className="text-[11px] text-red-400">{error}</div>}
    </div>
  );
}
