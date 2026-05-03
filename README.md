# Edge Fallback

A high-performance, ultra-minimalist fallback landing page utility designed for serverless or "sleeping" applications. 

When your primary applications are paused to save server resources, this utility provides a clear, professional, and interactive "Available on Request" message to visitors, preventing confusing browser or server errors.

![Preview Image](https://raw.githubusercontent.com/sundaresanv2004/edge-fallback/main/public/preview.png)

## ✨ Features

- **Premium UI/UX**: Minimalist design with a focus on typography and clear calls to action.
- **Interactive Background**: Beautiful Aceternity-inspired ripple effect that responds to clicks.
- **Performance Optimized**: Built with Next.js 15, Tailwind CSS 4, and optimized Google Fonts.
- **Dynamic Routing**: Automatically detects the app name from the URL path.
- **Stateless & Lean**: No database required. Configuration-free by default.
- **Hardened Deployment**: Includes a secure Docker configuration ready for production.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

## 🌍 URL Routing Logic

The application treats the first segment of the URL path as the **App Name**.

- **Generic Fallback**: `https://your-fallback-domain.com/`
- **App Specific**: `https://your-fallback-domain.com/quickdrop/dashboard`
  - **App Name**: Quickdrop
  - **Path Context**: /dashboard

## 🛠️ Deployment

### Using Dokploy or Coolify (Recommended)

This project is optimized for modern deployment platforms. To deploy:

1. Create a new **Application** and point it to your repository.
2. The provided `docker-compose.yml` will handle the build and basic security hardening.
3. **Domain Assignment**: Go to the **Domains** tab in your Dokploy/Coolify UI.
4. Add your domain (e.g., `fallback.yourdomain.com`) and point it to Port `3000`.
5. Enable SSL/HTTPS. The UI will automatically handle certificate generation via Traefik.

### Cloudflare Redirects

To redirect traffic from a paused app to this fallback, create a **Redirect Rule** in Cloudflare:

- **Match**: `https://app.yourdomain.com/*`
- **Target**: `https://fallback.yourdomain.com/app-name/${1}`
- **Status**: `302 Temporary Redirect`

## 🛡️ Container Hardening

The provided `docker-compose.yml` includes several security best practices out of the box:
- `read_only: true` filesystem.
- `cap_drop: - ALL` to prevent privilege escalation.
- `no-new-privileges: true` security option.
- `tmpfs` mounts for temporary file requirements.

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

Created with ❤️ by [Sundaresan V](https://sundaresan.dev)
