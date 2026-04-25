'use client'

import { useState, useEffect } from 'react'
import { Button } from '@heroui/react'
import Header from './Header'
import CustomerInfo from './CustomerInfo'
import MenuSection from './MenuSection'
import OrderSummary from './OrderSummary'
import TipSelection from './TipSelection'
import BillReceipt from './BillReceipt'
import { OrderItem } from '@/types'
import { calculateBill, generateBillNumber } from '@/utils/constants'

type Step = 'info' | 'menu' | 'summary' | 'tip' | 'receipt'

export default function BillingApp() {
  const [currentStep, setCurrentStep] = useState<Step>('info')
  const [customerName, setCustomerName] = useState('')
  const [tableNumber, setTableNumber] = useState('')
  const [covers, setCovers] = useState(1)

  useEffect(() => {
    setTableNumber(String(Math.floor(Math.random() * 10) + 1))
  }, [])
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [tipPercentage, setTipPercentage] = useState(10)

  const subtotal = orderItems.reduce((sum, item) => sum + item.totalPrice, 0)
  const billData = calculateBill(subtotal, tipPercentage)
  const billNo = generateBillNumber()

  const handleAddItem = (item: OrderItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
                totalPrice: (i.quantity + item.quantity) * i.unitPrice,
              }
            : i
        )
      }
      return [...prev, item]
    })
  }

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.id !== itemId))
  }

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(itemId)
      return
    }
    setOrderItems((prev) =>
      prev.map((i) =>
        i.id === itemId
          ? { ...i, quantity, totalPrice: quantity * i.unitPrice }
          : i
      )
    )
  }

  const handleContinue = () => {
    if (currentStep === 'info') {
      if (customerName.trim()) setCurrentStep('menu')
    } else if (currentStep === 'menu') {
      if (orderItems.length > 0) setCurrentStep('summary')
    } else if (currentStep === 'summary') {
      setCurrentStep('tip')
    } else if (currentStep === 'tip') {
      setCurrentStep('receipt')
    }
  }

  const handleReset = () => {
    setCurrentStep('info')
    setCustomerName('')
    setTableNumber('')
    setCovers(1)
    setOrderItems([])
    setTipPercentage(10)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-yellow-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="mt-8">
          {currentStep === 'info' && (
            <CustomerInfo
              customerName={customerName}
              setCustomerName={setCustomerName}
              tableNumber={tableNumber}
              setTableNumber={setTableNumber}
              covers={covers}
              setCovers={setCovers}
              onContinue={handleContinue}
            />
          )}

          {currentStep === 'menu' && (
            <MenuSection onAddItem={handleAddItem} orderItems={orderItems} />
          )}

          {currentStep === 'summary' && (
            <OrderSummary
              orderItems={orderItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              subtotal={subtotal}
            />
          )}

          {currentStep === 'tip' && (
            <TipSelection
              tipPercentage={tipPercentage}
              setTipPercentage={setTipPercentage}
              subtotal={subtotal}
              billData={billData}
            />
          )}

          {currentStep === 'receipt' && (
            <BillReceipt
              customerName={customerName}
              tableNumber={tableNumber}
              covers={covers}
              orderItems={orderItems}
              billNo={billNo}
              tipPercentage={tipPercentage}
              billData={billData}
              onReset={handleReset}
            />
          )}

          {currentStep !== 'receipt' && currentStep !== 'info' && (
            <div className="mt-8 flex gap-4 justify-center">
              <Button
                onPress={() => {
                  const steps: Step[] = ['info', 'menu', 'summary', 'tip']
                  const currentIndex = steps.indexOf(currentStep)
                  if (currentIndex > 0) {
                    setCurrentStep(steps[currentIndex - 1])
                  }
                }}
                variant="bordered"
                size="lg"
                className="border-2 border-brand-warm text-brand-warm"
              >
                ← Back
              </Button>
              <Button
                onPress={handleContinue}
                isDisabled={currentStep === 'menu' && orderItems.length === 0}
                size="lg"
                className="bg-gradient-to-r from-brand-warm to-brand-gold text-white font-bold"
              >
                {currentStep === 'tip' ? 'Generate Bill 📄' : 'Next →'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
