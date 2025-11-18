READY TO DEPLOY — Dr. Nitin Wadhwa Clinic website
------------------------------------------------
This package contains a complete static website (HTML/CSS/JS) ready to be deployed to Netlify, Vercel, GitHub Pages, or any static host.

Files included:
- index.html, styles.css, app.js
- privacy.html, robots.txt, sitemap.xml, favicon.ico
- assets/ (placeholder images)
- netlify.toml (Netlify config)

QUICK OPTIONS TO MAKE THE SITE LIVE (choose one):
A) Netlify (easiest, recommended)
   1. Go to https://app.netlify.com/ and create a free account.
   2. On the Netlify dashboard click "Add new site" → "Deploy manually" → Drag & drop the ZIP file (clinic_site_live_ready.zip).
   3. Netlify will upload and publish the site at a random subdomain (example: calm-puffpuff-12345.netlify.app).
   4. To use your domain (drnitinwadhwa.com) go to "Domain settings" → "Add custom domain" and follow the instructions.
      - If you bought domain on Namecheap / GoDaddy: update the domain's DNS records to point to Netlify (Netlify provides the exact records).
   5. OPTIONAL: In Netlify site settings → "Build & deploy" → Environment variables, add:
      - TIDIO_KEY = your_tidio_key   (if using Tidio)
      - WEBHOOK_URL = your_webhook_url (Zapier/Make/GHL webhook)
   6. Test the booking form and WhatsApp button once live.

B) Vercel (also simple)
   1. Create account at https://vercel.com/
   2. Create a new project → "Import" → choose "Deploy from Git" (you can also drag & drop the folder if using Vercel's UI).
   3. Follow prompts. To use a custom domain, add it in Vercel's dashboard and follow DNS instructions.

C) GitHub Pages
   1. Create a GitHub repo and push the site files.
   2. In repo settings → Pages, set branch to main and folder to root.
   3. Your site will be available at username.github.io/repo-name or connect a custom domain.

IMPORTANT: SETTINGS YOU SHOULD CHANGE AFTER DEPLOY
- Replace the Tidio key in index.html script tag: //code.tidio.co/YOUR_TIDIO_KEY.js
- Replace the WEBHOOK_URL in app.js with your Zapier/Make/GoHighLevel webhook URL.
- Replace contact email/phone/address in index.html with your final details (or leave as defaults until you're ready).
- Replace assets/logo images in assets/ with your real photos and logo. Filenames to replace:
    assets/doctor-placeholder.jpg
    assets/staff-placeholder.jpg
    favicon.ico

DNS NOTES (if using custom domain)
- Netlify provides exact DNS records; typically you add Netlify's nameservers or create CNAME/A records per their instructions.
- If using an A record: point to Netlify's load balancer IPs (see Netlify docs).
- Allow up to 24-48 hours for DNS to fully propagate (usually much faster).

ADDITIONAL HELP (I can do for you)
- I cannot publish the site directly from this chat (I don't have access to your Netlify/Vercel account).
- If you want, upload your logo and any photos here and I will replace them and give you a new ZIP immediately.
- If you sign up for Netlify and share the site-deploy link they give (not credentials), I can walk you step-by-step while you click.
- If you'd like, I can prepare a short message/email you can send to a friend/assistant to ask them to deploy for you.

CONTACT/CHANGES
- If you want me to customize wording, add Hindi, or wire the webhook to a Zapier sample, tell me now — I will update files and give you a new ZIP.
