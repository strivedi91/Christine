'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">CA</div>
          <div>
            <p className="text-lg font-semibold leading-tight">Christine’s Automotive</p>
            <p className="text-xs text-gray-500">38 Hanson Ave, Unit 2 · Kitchener, ON · (519) 772‑5044</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={clsx('hover:text-emerald-700',
              pathname === n.href && 'text-emerald-700 font-medium')}>
              {n.label}
            </Link>
          ))}
          <div className="ml-2 h-6 w-px bg-gray-200" />
          <Link href="/theme/a" className="text-xs hover:text-emerald-700">A</Link>
          <Link href="/theme/b" className="text-xs hover:text-sky-700">B</Link>
          <Link href="/theme/c" className="text-xs hover:text-amber-700">C</Link>
        </nav>
        <Link href="/contact#leadform" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
          Book Service
        </Link>
      </div>
    </header>
  );
}
