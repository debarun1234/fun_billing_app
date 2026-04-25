# 🍛 DeBaRuN's Legendary Billing System

> _Where food is great, bills are real, and the owner cries in GST_

A modern, delightfully humorous web-based billing system for "DeBaRuN's Dhaba & Fine Dining" built with **Next.js 14**, **TypeScript**, **React**, **HeroUI v3.0.3**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Beautiful, Responsive UI** — Appetizing color scheme with warm oranges, golds, and cream tones
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- 🍽️ **Interactive Menu** — Browse 10 delicious items with emojis and funny descriptions
- 🛒 **Smart Order Management** — Add, remove, and adjust quantities with real-time calculations
- 💸 **Flexible Tip Selection** — Choose from 4 tip options with humorous messages from DeBaRuN
- 📄 **Digital Receipt Generation** — Professional, printer-friendly bill receipts
- 🖨️ **Print Support** — Print receipts directly from the browser
- 💰 **Automatic GST Calculation** — SGST (9%) + CGST (9%) applied to all items
- 📊 **Real-time Calculations** — Per-head cost, tax breakdown, and totals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project folder:**
   ```bash
   cd fun_billing_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with NextUIProvider
│   └── page.tsx             # Home page
├── components/
│   ├── BillingApp.tsx       # Main app orchestrator
│   ├── Header.tsx           # Restaurant header
│   ├── CustomerInfo.tsx     # Customer details form
│   ├── MenuSection.tsx      # Menu display
│   ├── MenuItem.tsx         # Individual menu item card
│   ├── OrderSummary.tsx     # Order review and management
│   ├── TipSelection.tsx     # Tip selection interface
│   └── BillReceipt.tsx      # Final receipt display
├── types/
│   └── index.ts             # TypeScript interfaces
└── utils/
    └── constants.ts         # Menu items, establishment info, calculations
```

## 🎨 Design Highlights

- **Color Palette:**
  - Primary: `#FF6B35` (Warm Orange)
  - Secondary: `#F7931E` (Gold)
  - Accent: `#FF4757` (Red)
  - Background: `#FFF8F0` (Cream)
  - Dark: `#1F1410` (Deep Brown)

- **Typography:**
  - Headings: "Playfair Display" (elegant serif)
  - Monospace: "DM Mono" (for numbers and codes)
  - Body: System fonts (Segoe UI, Tahoma)

- **Components:**
  - HeroUI Cards, Buttons, Inputs
  - Smooth transitions and hover effects
  - Print-friendly receipt layout

## 🔄 How It Works

### Step-by-Step Flow:

1. **👤 Customer Info** — Enter name, table number, and number of guests
2. **🍽️ Menu Selection** — Browse and add items to your order
3. **🎯 Order Review** — Review, modify quantities, or remove items
4. **💸 Tip Selection** — Choose a tip percentage (0%, 10%, 15%, 20%)
5. **📄 Bill Receipt** — View and print your final receipt with all details

### Calculations:

- **Subtotal** = Sum of (Quantity × Price) for all items
- **SGST** = Subtotal × 9%
- **CGST** = Subtotal × 9%
- **Tip** = Subtotal × Tip Percentage
- **Grand Total** = Subtotal + SGST + CGST + Tip
- **Per Head Cost** = Grand Total ÷ Number of Covers

## 🎭 Humorous Features

- DeBaRuN's commentary throughout the experience
- Funny item descriptions ("secret: it's just fancy fried rice")
- Witty messages based on tip selection
- Owner's emotional journey displayed on receipts
- GST complaints and EMI reminders

## 🖨️ Printing & Export

- Click the **"Print Receipt"** button to open print dialog
- The receipt is optimized for standard thermal printer sizes
- The layout automatically adjusts for printing
- Only the receipt appears in print preview (buttons hidden)

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **UI Library:** HeroUI v3.0.3
- **Styling:** Tailwind CSS 3.3.6
- **Icons:** React Icons
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Playfair Display, DM Mono, Merriweather)

## 📝 Development

### Available Scripts:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Customization:

#### Add New Menu Items:
Edit `src/utils/constants.ts` and add to the `MENU` array:

```typescript
{
  id: '11',
  name: 'Your Dish Name',
  price: 299,
  emoji: '🍴',
}
```

#### Modify Colors:
Update `tailwind.config.ts` theme colors under `theme.extend.colors`

#### Change Tip Options:
Modify `TIP_OPTIONS` in `src/utils/constants.ts`

## 🎬 Demo Data

The app comes with:
- 10 pre-configured menu items
- Realistic pricing in Indian Rupees (₹)
- Sample establishment details for "DeBaRuN's Dhaba & Fine Dining"
- GSTIN and FSSAI registration numbers

## 📱 Browser Compatibility

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Android Chrome)

## 🐛 Troubleshooting

### Port Already in Use:
```bash
npm run dev -- -p 3001
```

### Dependencies Issue:
```bash
rm -rf node_modules
npm install
```

### Build Errors:
```bash
npm run lint  # Check for TypeScript errors
```

## 📄 License

This project is part of the fun_billing_app collection.

## 🙏 Credits

Inspired by the legendary DeBaRuN's Dhaba, where good food and better humor collide.

---

**Made with ❤️, tears, and questionable life choices by DeBaRuN's Dev Team**

_Please visit again. DeBaRuN's EMI is due next week._
