# Christine’s Automotive — Next.js Site (A/B/C themes)

Modern, fast and secure website for Christine’s Automotive with **three homepage styles**:
- `/theme/a` — Lead‑First (Classic / Emerald)
- `/theme/b` — Modern Trust (Charcoal / Sky)
- `/theme/c` — Bold Contrast (Amber / Black)

Secondary pages: **/services** (+ dynamic service pages), **/about**, **/reviews**, **/contact**, **/privacy**.  
SEO: LocalBusiness schema, OG tags, robots, sitemap.  
Security: HSTS, CSP, Permissions‑Policy, Referrer‑Policy, X‑Content‑Type‑Options.

---

## Quick start

```bash
pnpm i   # or npm install / yarn
pnpm dev # http://localhost:3000
```

## Build & run
```bash
pnpm build
pnpm start
```

## Env (for email leads)
Create `.env.local` with your SMTP details (or use your provider):
```env
SMTP_HOST=smtp.yourhost.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=your-password
LEAD_FROM=web@christinesautomotive.ca
LEAD_TO=service@christinesautomotive.ca
```
If SMTP is not configured, leads are logged to the server console in development.

## Change default theme
Set your preferred homepage by changing links or redirecting `/` to one of `/theme/a|b|c`.

## Deployment
- Vercel: one‑click.  
- Netlify/Fly/Render: Node 18+, run `npm run build` then `npm start`.  
- Add your custom domain and enforce HTTPS (HSTS is sent by default).

## Notes
- The map is an iframe to keep CSP simple. Replace with Google Maps JS if needed.
- Forms have a honeypot anti‑spam. Add hCaptcha/Cloudflare Turnstile if bots appear.


---

## One‑click style deploys

### Vercel (recommended for Next.js)
1. Push this folder to **GitHub** (or GitLab/Bitbucket).
2. Go to **https://vercel.com/new** → Import your repo.
3. Vercel auto-detects Next.js. Keep defaults:
   - Build Command: `next build`
   - Output: `.next`
   - Node: 18+
4. Add **Environment Variables** (from `.env.example`):
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `LEAD_FROM`, `LEAD_TO`
5. Deploy. (HSTS, CSP, and all headers are already configured in `next.config.mjs`.)

### Netlify
1. Push to GitHub.
2. New Site → Import from Git → pick the repo.
3. Build command: `npm run build`  — Publish dir: `.next`
4. Add environment variables (same as above).
5. Netlify auto-applies the Next.js runtime via `@netlify/plugin-nextjs`.



**Note:** This repo is the JavaScript-only version (no TypeScript). All files are `.js`/`.jsx`.
