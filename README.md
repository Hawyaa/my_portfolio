# Hawi Alemu — Portfolio Website

A stunning Next.js 14+ portfolio with animated waves, a RAG-powered chat widget, and a full-stack developer showcase.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📁 Project Structure

```
hawi-portfolio/
├── app/
│   ├── globals.css       # Global styles, animations
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main page
├── components/
│   ├── AnimatedWaves.tsx # SVG wave background
│   ├── Navbar.tsx        # Fixed nav with scroll state
│   ├── Hero.tsx          # Hero with typing animation
│   ├── Skills.tsx        # Animated skill pills
│   ├── Projects.tsx      # Project cards with placeholders
│   ├── AISection.tsx     # AI Automation focus section
│   ├── Experience.tsx    # Timeline of work & education
│   ├── Contact.tsx       # Contact form + info
│   ├── ChatWidget.tsx    # RAG-powered chat widget
│   └── Footer.tsx        # Footer
├── lib/
│   └── rag.ts            # RAG system (mock embeddings + cosine similarity)
├── public/               # Add your screenshots here!
└── tailwind.config.js
```

## 🤖 RAG Chat System

The chat widget uses a fully client-side RAG pipeline:
- **Knowledge base** — 12 chunks about Hawi (skills, projects, experience, etc.)
- **Mock embeddings** — TF-IDF bag-of-words vectors
- **Cosine similarity** — retrieves top-K relevant chunks per query
- **Keyword boost** — exact keyword matching for higher precision
- **Response generation** — templates based on retrieved categories

No external APIs needed — it all runs in the browser!

## 🖼️ Replacing Placeholder Images

Add real screenshots to the `/public` folder and update the `image` field in `components/Projects.tsx`:

```tsx
// Change this:
image: '/placeholder-ecommerce.png',

// To your actual screenshot:
image: '/ecommerce-screenshot.png',
```

## 🔧 Customization

- **Email**: Search for `hawi@example.com` and replace with your real email
- **GitHub**: Search for `https://github.com` and replace with your GitHub URL
- **Live URLs**: Update the `live` fields in `Projects.tsx`

## 🎨 Design System

- **Colors**: Teal (`#0D9488`), Cream (`#FAF8F3`), Ink (`#1A1612`), Amber (`#D97706`)
- **Fonts**: Playfair Display (headings), JetBrains Mono (code), DM Sans (body)
- **Animations**: Framer Motion (page/scroll), CSS (waves, cursor blink, gradient borders)

## 📦 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
