import React from 'react';
import { Eye, Pencil } from 'lucide-react';

export default function PermissionToggle({ value, onChange, disabled }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium text-neutral-300">Permission</div>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onChange('view')}
          disabled={disabled}
          className={`group flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors ${
            value === 'view'
              ? 'border-emerald-600/40 bg-emerald-500/10 text-emerald-300'
              : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100'
          }`}
        >
          <span className={`p-1.5 rounded-md ${value === 'view' ? 'bg-emerald-600/20 text-emerald-300' : 'bg-neutral-800 text-neutral-300'}`}>
            <Eye size={16} />
          </span>
          View only
        </button>
        <button
          type="button"
          onClick={() => onChange('edit')}
          disabled={disabled}
          className={`group flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors ${
            value === 'edit'
              ? 'border-emerald-600/40 bg-emerald-500/10 text-emerald-300'
              : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-neutral-100'
          }`}
        >
          <span className={`p-1.5 rounded-md ${value === 'edit' ? 'bg-emerald-600/20 text-emerald-300' : 'bg-neutral-800 text-neutral-300'}`}>
            <Pencil size={16} />
          </span>
          Can edit
        </button>
      </div>
    </div>
  );
}
