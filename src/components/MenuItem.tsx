'use client'

import { Card, Button } from '@heroui/react'
import { MdAdd } from '@react-icons/all-files/md/MdAdd'
import { MdRemove } from '@react-icons/all-files/md/MdRemove'
import { MenuItem as MenuItemType } from '@/types'

interface MenuItemProps {
  item: MenuItemType
  quantity: number
  onQuantityChange: (qty: number) => void
  onAddToCart: () => void
  itemCountInOrder: number
}

export default function MenuItem({
  item,
  quantity,
  onQuantityChange,
  onAddToCart,
  itemCountInOrder,
}: MenuItemProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border-2 border-transparent hover:border-brand-gold">
      <div className="p-0 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-yellow-50 to-orange-50 opacity-60" />

        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Emoji */}
          <div className="text-5xl mb-3">{item.emoji}</div>

          {/* Name */}
          <h3 className="font-bold text-lg text-brand-dark line-clamp-2 group-hover:text-brand-warm transition-colors">
            {item.name}
          </h3>

          {/* Price */}
          <div className="text-3xl font-black text-brand-warm">
            ₹{item.price.toLocaleString('en-IN')}
          </div>

          {/* Badge if in order */}
          {itemCountInOrder > 0 && (
            <div className="inline-block bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-bold">
              ✓ {itemCountInOrder} in order
            </div>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
            <Button
              isIconOnly
              size="sm"
              onPress={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="bg-brand-warm text-white hover:bg-brand-accent"
            >
              <MdRemove />
            </Button>
            <div className="flex-1 text-center font-bold text-brand-dark">
              {quantity}
            </div>
            <Button
              isIconOnly
              size="sm"
              onPress={() => onQuantityChange(quantity + 1)}
              className="bg-brand-warm text-white hover:bg-brand-accent"
            >
              <MdAdd />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button
            fullWidth
            onPress={onAddToCart}
            className="bg-gradient-to-r from-brand-warm to-brand-gold text-white font-bold py-3 rounded-xl hover:shadow-lg transition-shadow"
          >
            🛒 Add to Order
          </Button>
        </div>
      </div>
    </Card>
  )
}
