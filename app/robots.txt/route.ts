import { NextResponse } from 'next/server';
export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Sitemap: https://christinesautomotive.ca/sitemap.xml'
  ].join('\n');
  return new NextResponse(body, { headers: { 'Content-Type': 'text/plain' } });
}
