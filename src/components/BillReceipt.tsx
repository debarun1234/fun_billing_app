'use client'

import { Card, Button } from '@heroui/react'
import { MdPrint } from '@react-icons/all-files/md/MdPrint'
import { OrderItem, BillCalculation } from '@/types'
import { ESTABLISHMENT, MENU } from '@/utils/constants'

interface BillReceiptProps {
  customerName: string
  tableNumber: string
  covers: number
  orderItems: OrderItem[]
  billNo: number
  tipPercentage: number
  billData: BillCalculation
  onReset: () => void
}

export default function BillReceipt({
  customerName,
  tableNumber,
  covers,
  orderItems,
  billNo,
  tipPercentage,
  billData,
  onReset,
}: BillReceiptProps) {
  const now = new Date()
  const perHeadCost = billData.grandTotal / covers

  const handlePrint = () => {
    window.print()
  }

  const getItemEmoji = (itemId: string) => {
    return MENU.find((item) => item.id === itemId)?.emoji || '🍽️'
  }

  return (
    <div className="space-y-6">
      {/* Print Controls */}
      <div className="flex gap-4 justify-center no-print">
        <Button
          onPress={handlePrint}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-lg"
          startContent={<MdPrint className="text-xl" />}
        >
          🖨️ Print Receipt
        </Button>
        <Button
          onPress={onReset}
          variant="bordered"
          className="border-2 border-brand-warm text-brand-warm font-bold px-6 py-3 rounded-lg"
        >
          ↻ New Order
        </Button>
      </div>

      {/* Receipt */}
      <div className="flex justify-center">
        <div
          className="w-full md:w-96 bg-white shadow-2xl print-receipt"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            backgroundColor: '#f9f7f3',
          }}
        >
          {/* Top Decoration */}
          <div className="text-center pt-6 pb-3 border-b-4 border-dashed border-gray-400">
            <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
              🍛 DeBaRuN's 🍛
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginTop: '4px',
              }}
            >
              DHABA & FINE DINING
            </div>
            <div style={{ fontSize: '11px', fontStyle: 'italic', marginTop: '6px' }}>
              "Eat like a king, pay like one too."
            </div>
          </div>

          {/* Address & Contact */}
          <div
            style={{
              fontSize: '9px',
              textAlign: 'center',
              padding: '8px 12px',
              lineHeight: '1.6',
              borderBottom: '2px solid #333',
            }}
          >
            <div>{ESTABLISHMENT.address.split('\n')[0]}</div>
            <div>{ESTABLISHMENT.address.split('\n')[1]}</div>
            <div style={{ marginTop: '4px' }}>📞 {ESTABLISHMENT.phone}</div>
            <div style={{ fontSize: '8px', color: '#666', marginTop: '2px' }}>
              GSTIN: {ESTABLISHMENT.gstin} | FSSAI: {ESTABLISHMENT.fssai}
            </div>
          </div>

          {/* Bill Metadata */}
          <div style={{ padding: '12px 16px', fontSize: '10px', lineHeight: '1.8' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Bill No:</span> #{billNo}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Customer:</span> {customerName}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Table:</span> {tableNumber} |{' '}
                  <span style={{ fontWeight: 'bold' }}>Covers:</span> {covers}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Date:</span>{' '}
                  {now.toLocaleDateString('en-IN')}
                </div>
                <div>
                  <span style={{ fontWeight: 'bold' }}>Time:</span>{' '}
                  {now.toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div style={{ borderTop: '1px solid #333', borderBottom: '1px solid #333' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 0.6fr 1fr 1fr',
                gap: '8px',
                padding: '8px 12px',
                fontSize: '10px',
                fontWeight: 'bold',
                borderBottom: '1px dashed #999',
                backgroundColor: '#efe9e1',
              }}
            >
              <div>ITEM</div>
              <div style={{ textAlign: 'center' }}>QTY</div>
              <div style={{ textAlign: 'right' }}>RATE</div>
              <div style={{ textAlign: 'right' }}>AMOUNT</div>
            </div>

            {orderItems.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 0.6fr 1fr 1fr',
                  gap: '8px',
                  padding: '6px 12px',
                  fontSize: '9px',
                  borderBottom: '1px dashed #ccc',
                  backgroundColor: idx % 2 === 0 ? '#fefdfb' : '#f9f7f3',
                }}
              >
                <div>
                  <span style={{ fontSize: '12px' }}>{getItemEmoji(item.id)}</span>{' '}
                  {item.name.substring(0, 30)}
                </div>
                <div style={{ textAlign: 'center' }}>{item.quantity}</div>
                <div style={{ textAlign: 'right' }}>₹{item.unitPrice}</div>
                <div style={{ textAlign: 'right' }}>₹{item.totalPrice}</div>
              </div>
            ))}
          </div>

          {/* Totals Section */}
          <div style={{ padding: '12px 16px', fontSize: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 'bold' }}>
                ₹{billData.subtotal.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '4px',
                color: '#666',
              }}
            >
              <span>SGST @ 9%</span>
              <span>
                ₹{billData.sgst.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                color: '#666',
                paddingBottom: '8px',
                borderBottom: '1px solid #999',
              }}
            >
              <span>CGST @ 9%</span>
              <span>
                ₹{billData.cgst.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                color: '#666',
              }}
            >
              <span>Tip ({tipPercentage}%)</span>
              <span style={{ fontWeight: 'bold' }}>
                ₹{billData.tipAmount.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            {/* Grand Total */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 8px',
                backgroundColor: '#FFE4B5',
                border: '2px solid #333',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '8px',
              }}
            >
              <span>GRAND TOTAL</span>
              <span>
                ₹{billData.grandTotal.toLocaleString('en-IN', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            {/* Per Head */}
            <div style={{ textAlign: 'right', fontSize: '9px', color: '#999' }}>
              Per head: ₹
              {perHeadCost.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>

          {/* GST Box */}
          <div
            style={{
              margin: '12px 16px',
              padding: '8px 10px',
              backgroundColor: '#f0f0f0',
              border: '1px dashed #999',
              fontSize: '8px',
              lineHeight: '1.6',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>GST SUMMARY</div>
            <div>
              Taxable Value: ₹
              {billData.subtotal.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              | SGST 9%: ₹
              {billData.sgst.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              | CGST 9%: ₹
              {billData.cgst.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div style={{ marginTop: '4px' }}>
              Total Tax Collected: ₹
              {(billData.sgst + billData.cgst).toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div style={{ fontSize: '7px', marginTop: '2px', color: '#666' }}>
              (DeBaRuN cries paying this to the government)
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: 'center',
              padding: '12px 16px',
              fontSize: '9px',
              borderTop: '2px solid #333',
              lineHeight: '1.8',
            }}
          >
            <div style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '4px' }}>
              ⭐ ⭐ ⭐
            </div>
            <div style={{ fontWeight: 'bold' }}>Thank you for dining with us!</div>
            <div style={{ fontSize: '8px', fontStyle: 'italic', marginTop: '2px' }}>
              DeBaRuN made this with love, tears & questionable life choices.
            </div>
            <div style={{ fontSize: '8px', marginTop: '4px' }}>
              Please visit again. DeBaRuN's EMI is due next week.
            </div>
            <div style={{ fontSize: '7px', marginTop: '6px', color: '#999' }}>
              *Computer generated bill. No signature required.
              <br />
              DeBaRuN will sign it anyway because he loves drama.*
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
