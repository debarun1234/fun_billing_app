# 🚀 Quick Start Guide

## Windows Users 🪟

1. **Double-click** `setup.bat`
   ```
   setup.bat
   ```

OR manually:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## macOS/Linux Users 🍎🐧

1. **Run the setup script:**
   ```bash
   bash setup.sh
   ```

OR manually:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## 🎮 Using the App

### Flow:

1. **Enter Your Details**
   - Your name (DeBaRuN will spell it wrong anyway 😄)
   - Table number
   - Number of guests

2. **Browse & Order**
   - Click through the menu items
   - Adjust quantities
   - Add items to your order

3. **Review Order**
   - See all items with prices
   - Modify quantities or remove items
   - View subtotal

4. **Select Tip**
   - Choose from 0%, 10%, 15%, or 20%
   - See DeBaRuN's reactions
   - Preview the final bill

5. **Get Your Receipt**
   - Beautiful digital receipt
   - Print directly from browser
   - Start a new order or finish

---

## 📱 Features

✅ Appetizing warm colors (orange, gold, cream)  
✅ Beautiful responsive design  
✅ Interactive menu with emojis  
✅ Real-time price calculations  
✅ GST (18%) automatically calculated  
✅ Printable digital receipts  
✅ Humorous DeBaRuN commentary  

---

## 🖨️ Print Your Receipt

1. Click **"🖨️ Print Receipt"** button
2. Choose your printer
3. Print!

---

## ❓ Troubleshooting

### Port 3000 is already in use?

```bash
npm run dev -- -p 3001
```

Then go to http://localhost:3001

### npm install fails?

```bash
npm cache clean --force
npm install
```

### Still having issues?

Check that you have Node.js 18+ installed:

```bash
node --version
```

Should show v18.0.0 or higher.

---

## 🎨 Customizing the App

### Add New Menu Items:

Edit `src/utils/constants.ts`:

```typescript
{
  id: '11',
  name: 'Your Dish Name',
  price: 299,
  emoji: '🍴',
}
```

### Change Colors:

Edit `tailwind.config.ts` and update the colors in the theme.

### Change GST Rate:

Edit `src/utils/constants.ts` in the `calculateBill` function.

---

**Enjoy! And remember: DeBaRuN's EMI is due next week! 💸**
