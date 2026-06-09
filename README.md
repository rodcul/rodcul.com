# rodcul.com

Personal site + AI Growth Engineer landing page. Astro 5 + Tailwind v4, deployed on Vercel.

## Pages

- `/` — personal profile (Rodney Cullen)
- `/growth-engineer` — AI Growth Engineer services + portfolio

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build
pnpm preview
```

## Deploy (Vercel — project `optilo/rodcul`)

```bash
vercel build --prod
vercel deploy --prebuilt --prod
```

Production alias: https://rodcul.vercel.app
Custom domain `rodcul.com` to be linked later (`vercel domains add rodcul.com`).
Note: the optilo team has Deployment Protection on, so the unique deploy URL is
gated (401) but the production alias is public.

---

## Internal pricing notes

On `/growth-engineer` only the **T&M rate is public ($100/hr)**. The sprint and
fractional tiers say "Request a quote" (the sprint card notes it's "bundled
below the standard hourly rate"). Working numbers to quote in conversation:

- **One-off project (T&M):** **$100/hr** (shown on site). Could test **$120/hr**.
- **2-week sprint:** 40 hours, scoped up front. ~$4,000 at $100/hr — quote a
  **small discount** to reward the committed block (e.g. **$3,500–$3,800**).
- **Fractional Growth Engineer:** 10–20h/week, monthly retainer. Target
  **~$6,000/mo** (≈ $75–90/hr effective for the committed block).

Reference: off-platform value is ~$200–500/hr (per
`gigger/upwork-profile.md`); Upwork display rate is $75/hr as a cold-start
anchor. These site/quote numbers sit between those.
