'use client'

import { ESTABLISHMENT } from '@/utils/constants'

export default function Header() {
  return (
    <div className="text-center py-8 px-4 bg-gradient-to-r from-brand-warm via-brand-gold to-orange-400 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
      <h1 className="brand-heading text-5xl md:text-6xl font-black text-white mb-3">
        🍛 DeBaRuN's 🍛
      </h1>
      <h2 className="brand-heading text-2xl md:text-3xl font-bold text-white mb-2">
        DHABA & FINE DINING
      </h2>
      <p className="text-white text-lg italic mb-4 font-semibold">
        &quot;Eat like a king, pay like one too.&quot;
      </p>
      <div className="text-white text-sm md:text-base space-y-1">
        <p>{ESTABLISHMENT.address.split('\n')[0]}</p>
        <p>{ESTABLISHMENT.address.split('\n')[1]}</p>
        <p className="pt-2 font-mono">📞 {ESTABLISHMENT.phone}</p>
        <p style={{ fontSize: '12px', marginTop: '4px', color: '#fffefeff', textAlign: 'center' }}>
          <b>Disclaimer:</b> This whole bill and establishment is for fun!!!
        </p>
      </div>
    </div>
  )
}
