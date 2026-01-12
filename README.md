# Killer Shark Fishing Website

A premium, luxury charter fishing website built with Next.js 14, Tailwind CSS, and Shadcn UI.

## Features

- **Modern Luxury Design**: Dark theme, smooth scrolling, premium typography.
- **Booking Integration**: Supports Bókun and FishingBooker widget embeds.
- **Service Dispatch**: Dedicated form for marine services requests (towing, transport).
- **Backend Integration**: Supabase for data storage and Resend for email notifications.
- **SEO Optimized**: Metadata, JSON-LD schema (to be added), and semantic HTML.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend Configuration (Email)
RESEND_API_KEY=re_123456789

# Site Configuration
PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Database Setup (Supabase)

Create two tables in your Supabase project:

**Table: `dispatch_requests`**
- `id` (uuid, primary key)
- `created_at` (timestamp)
- `name` (text)
- `email` (text)
- `phone` (text)
- `service_type` (text)
- `urgency` (text)
- `details` (jsonb) - Stores other fields like vessel name, location, etc.

**Table: `contact_messages`**
- `id` (uuid, primary key)
- `created_at` (timestamp)
- `name` (text)
- `email` (text)
- `phone` (text)
- `message` (text)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Content & Settings

Edit `src/data/siteContent.ts` to update:
- Business details (Phone, Address, Captain's Name)
- Trip Packages (Prices, Durations, Inclusions)
- Services List
- Policies (Deposit, Weather, Cancellation)
- Booking Provider Config

### Booking Widget Setup

1. Open `src/data/siteContent.ts`.
2. Set `booking.provider` to either `"bokun"` or `"fishingbooker"`.
3. Paste your embed code details in the corresponding object.

**For Bókun:**
```typescript
bokun: {
  embedScript: "https://widgets.bokun.io/...", // URL from script src
  channelId: "..." // ID from the widget code
}
```

**For FishingBooker:**
```typescript
fishingbooker: {
  embedHtml: '<div id="...">...</div><script>...</script>' // Paste full embed code here
}
```

## Deployment (Vercel)

1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. Add the Environment Variables from step 2 in the Vercel project settings.
4. Deploy.

## License

Private / Proprietary
