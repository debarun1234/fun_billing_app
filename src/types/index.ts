export interface MenuItem {
  id: string
  name: string
  price: number
  emoji?: string
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface Order {
  items: OrderItem[]
  customerName: string
  tableNumber: string
  covers: number
  subtotal: number
  sgst: number
  cgst: number
  tipPercentage: number
  tipAmount: number
  grandTotal: number
  billNo: number
  timestamp: Date
}

export interface BillCalculation {
  subtotal: number
  sgst: number
  cgst: number
  tipAmount: number
  grandTotal: number
  perHeadCost: number
}
