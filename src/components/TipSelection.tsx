'use client'

import { Card, Button } from '@heroui/react'
import { TIP_OPTIONS } from '@/utils/constants'
import { BillCalculation } from '@/types'

interface TipSelectionProps {
  tipPercentage: number
  setTipPercentage: (tip: number) => void
  subtotal: number
  billData: BillCalculation
}

export default function TipSelection({
  tipPercentage,
  setTipPercentage,
  subtotal,
  billData,
}: TipSelectionProps) {
  const currentTipOption = TIP_OPTIONS.find((opt) => opt.value === tipPercentage)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="brand-heading text-3xl font-bold text-brand-dark mb-2">
          💸 Tip Selection
        </h2>
        <p className="text-brand-warm font-semibold">
          (How much love will you show DeBaRuN?)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TIP_OPTIONS.map((option) => (
          <Card
            key={option.value}
            isPressable
            onPress={() => setTipPercentage(option.value)}
            className={`p-6 cursor-pointer transition-all transform ${
              tipPercentage === option.value
                ? 'ring-4 ring-brand-accent scale-105 bg-gradient-to-br from-brand-warm to-brand-gold shadow-2xl'
                : 'hover:shadow-lg border-2 border-gray-200 bg-white'
            }`}
          >
            <div className="text-center space-y-4">
              <div
                className={`text-4xl font-bold ${
                  tipPercentage === option.value ? 'text-white' : 'text-brand-warm'
                }`}
              >
                {option.value}%
              </div>
              <p
                className={`font-semibold ${
                  tipPercentage === option.value ? 'text-white' : 'text-brand-dark'
                }`}
              >
                {option.label}
              </p>
              <div
                className={`text-2xl font-bold ${
                  tipPercentage === option.value ? 'text-yellow-200' : 'text-brand-gold'
                }`}
              >
                ₹{(
                  (subtotal * option.value) /
                  100
                ).toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Current selection message */}
      <Card className="p-8 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-brand-gold">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-brand-dark">
            {currentTipOption?.message}
          </p>
        </div>
      </Card>

      {/* Bill Preview */}
      <Card className="p-8 bg-white border-2 border-brand-gold shadow-xl">
        <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">
          💰 Bill Summary
        </h3>

        <div className="space-y-4 max-w-md mx-auto">
          <div className="flex justify-between text-lg">
            <span className="text-brand-dark">Subtotal:</span>
            <span className="font-bold text-brand-warm">
              ₹{billData.subtotal.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex justify-between text-lg text-gray-600">
            <span>SGST (9%):</span>
            <span className="font-bold">
              ₹{billData.sgst.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex justify-between text-lg text-gray-600 border-b-2 border-gray-300 pb-4">
            <span>CGST (9%):</span>
            <span className="font-bold">
              ₹{billData.cgst.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="text-brand-dark">
              Tip ({tipPercentage}%):
            </span>
            <span className="font-bold text-brand-accent">
              ₹{billData.tipAmount.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex justify-between text-2xl font-black bg-gradient-to-r from-brand-warm to-brand-gold bg-clip-text text-transparent p-4 border-2 border-brand-gold rounded-lg">
            <span>GRAND TOTAL:</span>
            <span>
              ₹{billData.grandTotal.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </Card>
    </div>
  )
}
