'use client'

import { Card } from '@heroui/react'
import { MdPerson } from '@react-icons/all-files/md/MdPerson'
import { MdRestaurant } from '@react-icons/all-files/md/MdRestaurant'
import { MdPeople } from '@react-icons/all-files/md/MdPeople'

interface CustomerInfoProps {
  customerName: string
  setCustomerName: (name: string) => void
  tableNumber: string
  setTableNumber: (table: string) => void
  covers: number
  setCovers: (covers: number) => void
  onContinue: () => void
}

export default function CustomerInfo({
  customerName,
  setCustomerName,
  tableNumber,
  setTableNumber,
  covers,
  setCovers,
  onContinue,
}: CustomerInfoProps) {
  return (
    <Card className="p-8 md:p-12 shadow-xl bg-white border-2 border-brand-gold">
      <div className="space-y-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="brand-heading text-3xl font-bold text-brand-dark mb-2">
            📋 Welcome to DeBaRuN&apos;s
          </h2>
          <p className="text-brand-warm font-semibold">
            (DeBaRuN will spell your name wrong anyway 😄)
          </p>
        </div>

        {/* Form Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-brand-dark flex items-center gap-2">
              <MdPerson className="text-brand-warm text-lg" />
              Your Good Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-base focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>

          {/* Table Number */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-brand-dark flex items-center gap-2">
              <MdRestaurant className="text-brand-gold text-lg" />
              Table Number
            </label>
            <input
              type="text"
              placeholder="Table #"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-brand-dark text-base focus:outline-none focus:border-brand-gold transition-colors"
            />
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-brand-dark flex items-center gap-2">
              <MdPeople className="text-brand-warm text-lg" />
              Number of Guests
            </label>
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-2">
              <button
                onClick={() => setCovers(Math.max(1, covers - 1))}
                className="w-9 h-9 rounded-lg bg-brand-warm text-white font-bold text-xl flex items-center justify-center hover:bg-brand-accent transition-colors flex-shrink-0"
              >
                −
              </button>
              <span className="flex-1 text-center font-bold text-2xl text-brand-dark">
                {covers}
              </span>
              <button
                onClick={() => setCovers(covers + 1)}
                className="w-9 h-9 rounded-lg bg-brand-warm text-white font-bold text-xl flex items-center justify-center hover:bg-brand-accent transition-colors flex-shrink-0"
              >
                +
              </button>
            </div>
          </div>

        </div>

        {/* Continue Button */}
        <div className="pt-2">
          <button
            onClick={onContinue}
            disabled={!customerName.trim() || !tableNumber.trim()}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-brand-warm to-brand-gold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            ✨ Continue to Menu →
          </button>
          {(!customerName.trim() || !tableNumber.trim()) && (
            <p className="text-center text-sm text-gray-400 mt-2">
              Please enter your name and table number to continue
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}
