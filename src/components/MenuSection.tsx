'use client'

import { useState } from 'react'
import { Card, Button, Input } from '@heroui/react'
import { MENU } from '@/utils/constants'
import { OrderItem } from '@/types'
import MenuItem from './MenuItem'

interface MenuSectionProps {
  onAddItem: (item: OrderItem) => void
  orderItems: OrderItem[]
}

export default function MenuSection({ onAddItem, orderItems }: MenuSectionProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const handleAddToCart = (menuItemId: string) => {
    const menuItem = MENU.find((item) => item.id === menuItemId)
    if (!menuItem) return

    const quantity = quantities[menuItemId] || 1
    const orderItem: OrderItem = {
      id: menuItem.id,
      name: menuItem.name,
      quantity,
      unitPrice: menuItem.price,
      totalPrice: quantity * menuItem.price,
    }

    onAddItem(orderItem)
    setQuantities((prev) => ({ ...prev, [menuItemId]: 1 }))
  }

  const getItemQuantityInOrder = (itemId: string) => {
    return orderItems.find((item) => item.id === itemId)?.quantity || 0
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="brand-heading text-3xl font-bold text-brand-dark mb-2">
          🍽️ Our Legendary Menu
        </h2>
        <p className="text-brand-warm font-semibold">
          (Where food is great and DeBaRuN's judgment is greater)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 1}
            onQuantityChange={(qty) =>
              setQuantities((prev) => ({ ...prev, [item.id]: qty }))
            }
            onAddToCart={() => handleAddToCart(item.id)}
            itemCountInOrder={getItemQuantityInOrder(item.id)}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border-2 border-brand-gold">
        <p className="text-center text-brand-dark font-semibold">
          📊 Items in order: <span className="text-2xl font-bold text-brand-warm">{orderItems.length}</span>
        </p>
      </div>
    </div>
  )
}
