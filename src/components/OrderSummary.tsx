'use client'

import { Card, Button } from '@heroui/react'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { OrderItem } from '@/types'
import { MENU } from '@/utils/constants'

interface OrderSummaryProps {
  orderItems: OrderItem[]
  onUpdateQuantity: (itemId: string, quantity: number) => void
  onRemoveItem: (itemId: string) => void
  subtotal: number
}

export default function OrderSummary({
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  subtotal,
}: OrderSummaryProps) {
  const getItemEmoji = (itemId: string) => {
    return MENU.find((item) => item.id === itemId)?.emoji || '🍽️'
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="brand-heading text-3xl font-bold text-brand-dark mb-2">
          🎯 Your Order
        </h2>
        <p className="text-brand-warm font-semibold">
          (DeBaRuN is already judging your choices)
        </p>
      </div>

      <Card className="p-8 shadow-xl bg-white border-2 border-brand-gold">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-brand-warm to-brand-gold text-white rounded-lg">
              <tr className="text-left">
                <th className="p-4 font-bold">Item</th>
                <th className="p-4 text-center font-bold">Qty</th>
                <th className="p-4 text-right font-bold">Rate</th>
                <th className="p-4 text-right font-bold">Amount</th>
                <th className="p-4 text-center font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b ${idx % 2 === 0 ? 'bg-yellow-50' : 'bg-white'} hover:bg-orange-50 transition-colors`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getItemEmoji(item.id)}</span>
                      <div>
                        <p className="font-semibold text-brand-dark">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        isIconOnly
                        size="sm"
                        onPress={() =>
                          onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="bg-brand-warm text-white"
                      >
                        −
                      </Button>
                      <span className="w-8 text-center font-bold text-lg">
                        {item.quantity}
                      </span>
                      <Button
                        isIconOnly
                        size="sm"
                        onPress={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-brand-warm text-white"
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="p-4 text-right font-mono text-brand-warm font-bold">
                    ₹{item.unitPrice.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-right font-mono text-brand-dark font-bold">
                    ₹{item.totalPrice.toLocaleString('en-IN')}
                  </td>
                  <td className="p-4 text-center">
                    <Button
                      isIconOnly
                      onPress={() => onRemoveItem(item.id)}
                      className="bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <MdDelete className="text-lg" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subtotal Section */}
        <div className="mt-8 border-t-2 border-brand-gold pt-6">
          <div className="flex justify-end">
            <div className="w-full md:w-80">
              <div className="flex justify-between text-lg mb-4">
                <span className="font-semibold text-brand-dark">Subtotal:</span>
                <span className="font-bold text-brand-warm text-xl">
                  ₹{subtotal.toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <p className="text-xs text-gray-500 text-right">
                (GST will be added at checkout)
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border-2 border-brand-gold">
        <p className="text-center text-brand-dark font-semibold">
          ✅ Order locked in. DeBaRuN is already judging your choices.
        </p>
      </div>
    </div>
  )
}
