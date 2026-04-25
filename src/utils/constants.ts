import { MenuItem, BillCalculation } from '@/types'

export const ESTABLISHMENT = {
  name: "DeBaRuN's Dhaba & Fine Dining",
  tagline: '"Eat like a king, pay like one too."',
  address: 'No. 42, Behind the ATM that never works,\nKoramangala 5th Block, Bengaluru - 560095',
  phone: '+91 98765 43210',
  gstin: '29DBRNS9999R1ZX',
  owner: 'DeBaRuN (Yes, the caps are intentional. Don\'t ask.)',
  fssai: '11224403000123',
}

export const MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken (Extra Butter, Obviously)',
    price: 380,
    emoji: '🍗',
  },
  {
    id: '2',
    name: "Paneer Tikka (Paneer sourced from DeBaRuN's cow)",
    price: 280,
    emoji: '🧀',
  },
  {
    id: '3',
    name: 'Garlic Naan (8 cloves min, breath at own risk)',
    price: 65,
    emoji: '🍞',
  },
  {
    id: '4',
    name: "Biryani (secret: it's just fancy fried rice)",
    price: 350,
    emoji: '🍚',
  },
  {
    id: '5',
    name: 'Dal Makhani (Simmered since 2019)',
    price: 220,
    emoji: '🍲',
  },
  {
    id: '6',
    name: 'Masala Chai (Free if you cry about the bill)',
    price: 60,
    emoji: '🫖',
  },
  {
    id: '7',
    name: "Gulab Jamun x2 (DeBaRuN's emotional support dessert)",
    price: 110,
    emoji: '🍮',
  },
  {
    id: '8',
    name: "Chicken 65 (Named after DeBaRuN's exam score)",
    price: 320,
    emoji: '🌶️',
  },
  {
    id: '9',
    name: 'Virgin Mojito (DeBaRuN judges you silently)',
    price: 180,
    emoji: '🍋',
  },
  {
    id: '10',
    name: "DeBaRuN's Special Thali (Unknown ingredients, unmatched vibes)",
    price: 499,
    emoji: '🍛',
  },
]

export const TIP_OPTIONS = [
  { value: 0, label: 'No tip — DeBaRuN cries 😢', message: '😢 DeBaRuN is weeping. Happy now?' },
  { value: 10, label: '10% tip — Acceptable 👍', message: '👍 Fair enough. DeBaRuN respects your decision.' },
  { value: 15, label: '15% tip — Generous 🙏', message: '🙏 DeBaRuN thanks you from the bottom of his heart.' },
  { value: 20, label: '20% tip — LEGENDARY 🏆', message: '🏆 DeBaRuN will name his firstborn after you.' },
]

export const calculateBill = (
  subtotal: number,
  tipPercentage: number
): BillCalculation => {
  const sgst = Math.round(subtotal * 0.09 * 100) / 100
  const cgst = Math.round(subtotal * 0.09 * 100) / 100
  const tipAmount = Math.round((subtotal * tipPercentage) / 100 * 100) / 100
  const grandTotal = Math.round((subtotal + sgst + cgst + tipAmount) * 100) / 100

  return {
    subtotal,
    sgst,
    cgst,
    tipAmount,
    grandTotal,
    perHeadCost: 0, // Will be calculated based on covers
  }
}

export const generateBillNumber = (): number => {
  return Math.floor(Math.random() * 90000) + 10000
}
