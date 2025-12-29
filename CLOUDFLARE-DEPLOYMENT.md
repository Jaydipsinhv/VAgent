# Cloudflare Pages Deployment Guide for Loqua

## ✅ Pre-Deployment Checklist

Your site is **READY** for Cloudflare Pages deployment! All configurations are complete:

- ✅ Domain set to `https://loqua.ai`
- ✅ SEO metadata preserved with dynamic updates
- ✅ Images configured for Cloudflare
- ✅ Sitemap.xml configured
- ✅ Robots.txt configured
- ✅ Structured data (JSON-LD) included
- ✅ Open Graph tags for social sharing
- ✅ No build-breaking errors

---

## 🚀 Deployment Steps

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Ready for Cloudflare Pages deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Click **Connect to Git**
   - Select your repository

3. **Configure Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: /
   ```

4. **Environment Variables**
   ```
   NODE_VERSION = 18
   ```

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (2-5 minutes)

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   npm run build
   wrangler pages deploy .next
   ```

---

## 🌐 Custom Domain Setup

### Connect loqua.ai Domain

1. **In Cloudflare Pages Dashboard**
   - Go to your deployed site
   - Click **Custom domains** tab
   - Click **Set up a custom domain**

2. **Add Domain**
   - Enter: `loqua.ai`
   - Click **Continue**

3. **Add www Subdomain** (Optional)
   - Add: `www.loqua.ai`
   - Set up redirect from www to apex domain

4. **DNS Configuration** (If domain is in Cloudflare)
   - Cloudflare automatically creates CNAME records
   - If external DNS, add CNAME:
     ```
     loqua.ai CNAME your-site.pages.dev
     ```

5. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificate
   - Enable **Full (strict)** SSL mode
   - Force HTTPS redirects

---

## 🔍 Post-Deployment SEO Tasks

### 1. Verify Deployment
Visit these URLs to confirm everything works:
- https://loqua.ai
- https://loqua.ai/how-it-works
- https://loqua.ai/contact
- https://loqua.ai/sitemap.xml
- https://loqua.ai/robots.txt

### 2. Test SEO Elements

**Google Rich Results Test:**
```
https://search.google.com/test/rich-results?url=https://loqua.ai
```

**PageSpeed Insights:**
```
https://pagespeed.web.dev/?url=https://loqua.ai
```

**Mobile-Friendly Test:**
```
https://search.google.com/test/mobile-friendly?url=https://loqua.ai
```

### 3. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://loqua.ai`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://loqua.ai/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site: `https://loqua.ai`
3. Submit sitemap

### 4. Set Up Analytics

**Google Analytics:**
Add to `app/layout.tsx` (after deployment):
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🎯 Cloudflare-Specific Optimizations

### 1. Enable Cloudflare Features

**Speed Optimization:**
- Enable **Auto Minify** (HTML, CSS, JS)
- Enable **Brotli compression**
- Enable **HTTP/3 (with QUIC)**
- Enable **Early Hints**

**Caching:**
- Set up **Cache Rules** for static assets
- Configure **Browser Cache TTL**
- Enable **Tiered Cache**

**Performance:**
- Enable **Argo Smart Routing** (optional, paid)
- Use **Cloudflare CDN** (automatic)

### 2. Set Up Page Rules

Create page rules for better caching:
```
URL: *loqua.ai/*.png
Cache Level: Cache Everything
Edge Cache TTL: 1 month

URL: *loqua.ai/*.svg
Cache Level: Cache Everything
Edge Cache TTL: 1 month

URL: *loqua.ai/_next/static/*
Cache Level: Cache Everything
Edge Cache TTL: 1 year
```

### 3. Security Settings

**Enable:**
- SSL/TLS encryption mode: Full (strict)
- Always Use HTTPS: On
- Automatic HTTPS Rewrites: On
- Minimum TLS Version: 1.2
- TLS 1.3: On
- HTTP Strict Transport Security (HSTS): On

---

## 🔧 Build Configuration

Your current build settings are optimized for Cloudflare Pages:

**`next.config.ts`:**
```typescript
{
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Cloudflare handles optimization
  }
}
```

**`package.json`:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Can't export metadata from a client component"**
- ✅ Already fixed! We removed metadata exports from client components

**Error: "Module not found"**
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

**Error: "Image optimization failed"**
- ✅ Already configured with `unoptimized: true`

### Deployment Issues

**Site not updating:**
- Clear Cloudflare cache
- Re-deploy from dashboard
- Check build logs

**404 errors:**
- Verify build output directory is `.next`
- Check file paths are correct

**Slow loading:**
- Enable Cloudflare cache
- Optimize images further
- Use Cloudflare CDN features

---

## 📊 Expected Performance

With Cloudflare Pages, you should achieve:

**Lighthouse Scores:**
- Performance: 95-100
- SEO: 95-100
- Accessibility: 90-100
- Best Practices: 95-100

**Load Times:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Global CDN:**
- Served from 275+ cities worldwide
- Average response time: < 50ms

---

## 🎉 Launch Checklist

Before announcing your launch:

- [ ] Domain configured and SSL active
- [ ] All pages load correctly
- [ ] Forms work properly
- [ ] Mobile responsive on all devices
- [ ] SEO tags verified with Google test tools
- [ ] Sitemap submitted to search engines
- [ ] Analytics tracking installed
- [ ] Social media preview images working
- [ ] Contact form tested
- [ ] Performance scores above 90

---

## 📞 Support

If you encounter issues:

**Cloudflare Support:**
- Dashboard → Support
- Community Forums: https://community.cloudflare.com/

**Next.js Documentation:**
- https://nextjs.org/docs

**Loqua Team:**
- Email: hello@loqua.ai

---

## 🔄 Continuous Deployment

Every push to your main branch will automatically:
1. Trigger a new build on Cloudflare Pages
2. Run build checks
3. Deploy to production (if successful)
4. Update your live site at https://loqua.ai

**Build time:** 2-5 minutes per deployment

---

## 📝 Notes

- All SEO metadata is preserved with dynamic updates
- Page titles update correctly on navigation
- Structured data is included for search engines
- Social sharing tags work on all pages
- Sitemap updates automatically
- No SEO functionality was lost in the process

---

**Deployment Status:** ✅ READY
**Last Updated:** December 2025
**Version:** 1.0

---

## 🚀 Quick Deploy Command

```bash
# Ensure everything is committed
git add .
git commit -m "Deploy to Cloudflare Pages"
git push origin main

# Then connect your repo in Cloudflare Dashboard
```

**Your site is now ready for production deployment!** 🎉

