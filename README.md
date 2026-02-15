# Alpha Railings Website

Modern, SEO-optimized website for Alpha Railings - Florida's #1 Staircase & Railing Company.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages (recommended) or Vercel

## 📋 Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags and structured data
- ✅ Fast page loads and performance
- ✅ Accessible and WCAG compliant
- ✅ Modern architectural minimalism design
- ✅ Contact form
- ✅ Portfolio gallery
- ✅ Services showcase

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to view the site.

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Connect Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Workers & Pages → Create Application → Pages
   - Connect your GitHub account
   - Select the `danieldefmartins/alpha-railings` repository

2. **Configure Build Settings**
   ```
   Framework preset: Next.js
   Build command: pnpm build
   Build output directory: .next
   Node version: 22
   ```

3. **Environment Variables** (if needed)
   - None required for static site

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `https://alpha-railings.pages.dev`

5. **Custom Domain**
   - In Cloudflare Pages settings, go to "Custom domains"
   - Add `alpharailings.com` and `www.alpharailings.com`
   - Update your domain's DNS records as instructed

### Option 2: Vercel

1. **Import Project**
   - Go to [Vercel](https://vercel.com/new)
   - Import `danieldefmartins/alpha-railings` from GitHub

2. **Configure**
   ```
   Framework Preset: Next.js
   Build Command: pnpm build
   Output Directory: .next
   Install Command: pnpm install
   ```

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://alpha-railings.vercel.app`

4. **Custom Domain**
   - In project settings → Domains
   - Add `alpharailings.com`
   - Update DNS records as instructed

## 📧 Email Setup with Bluehost

Your domain can stay with Bluehost for email while the website is hosted elsewhere:

1. **Keep Domain in Bluehost**
   - Domain remains as addon domain in Bluehost cPanel
   - Continue creating/managing email accounts normally

2. **Update DNS Records**
   - In Bluehost cPanel → Zone Editor
   - Update A record to point to Cloudflare/Vercel IP
   - Keep MX records pointing to Bluehost for email

3. **DNS Configuration Example**
   ```
   A     @              → [Cloudflare/Vercel IP]
   CNAME www            → [Cloudflare/Vercel domain]
   MX    @              → mail.alpharailings.com (priority 0)
   ```

## 🔧 Cloudflare DNS Setup

If using Cloudflare for DNS management:

1. **Add Site to Cloudflare**
   - Add `alpharailings.com` to Cloudflare
   - Update nameservers at your registrar

2. **DNS Records**
   ```
   CNAME @ → alpha-railings.pages.dev (Proxied ☁️)
   CNAME www → alpha-railings.pages.dev (Proxied ☁️)
   MX @ → mail.yourmailserver.com (DNS only ☁️)
   ```

3. **Email Records** (keep from Bluehost)
   - Copy MX records from Bluehost
   - Add them to Cloudflare DNS
   - Set to "DNS only" (gray cloud)

## 📱 Contact Information

- **Phone**: (954) 953-0830
- **Service Area**: South Florida
- **Business Hours**: Mon-Fri 8AM-6PM, Sat 9AM-4PM

## 🎨 Design Philosophy

This website follows **Architectural Minimalism with Industrial Elegance**:

- Structural honesty - every element serves a purpose
- Spatial rhythm - asymmetric balance with strategic white space
- Material authenticity - glass transparency, metal textures
- Precision geometry - sharp angles, clean lines

## 📄 License

© 2026 Alpha Railings. All rights reserved.
