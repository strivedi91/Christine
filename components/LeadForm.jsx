'use client';
import { useState } from 'react';

export default function LeadForm({ accent='emerald' }) {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.currentTarget);
    // simple honeypot
    if ((form.get('company') as string)?.length) { setStatus('sent'); return; }
    const res = await fetch('/api/lead', { method: 'POST', body: form });
    setStatus(res.ok ? 'sent' : 'error');
  }
  const btn = accent === 'sky' ? 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500' :
             accent === 'amber' ? 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500' :
             'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500';
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-gray-50" id="leadform">
      <div className="grid grid-cols-1 gap-4">
        <input name="name" required className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Full name" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" required className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Phone" />
          <input name="email" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email (optional)" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="plate" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Plate" />
          <input name="makeModel" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Make & model" />
        </div>
        <textarea name="concern" required className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm h-28 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="What’s happening? (e.g., brake noise, A/C warm, check‑engine light)" />
        {/* Honeypot field */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <button type="submit" disabled={status!=='idle' && status!=='error'} className={"rounded-xl px-5 py-3 text-white font-semibold "+btn}>
          {status==='sending'?'Sending…':status==='sent'?'Thanks! We’ll be in touch':'Send'}
        </button>
        <p className="text-xs text-gray-500">By submitting, you agree to be contacted by SMS or phone for scheduling.</p>
        {status==='error' && <p className="text-xs text-red-600">Something went wrong. Please call (519) 772‑5044.</p>}
      </div>
    </form>
  )
}
