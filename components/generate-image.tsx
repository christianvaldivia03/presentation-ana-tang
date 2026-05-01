'use client'

import Image from 'next/image'

export function GenerateImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="/hero-psychologist.jpg"
        alt="Lic. Ana Alessandra Tang Bernilla - Psicóloga Licenciada"
        fill
        className="object-cover rounded-3xl"
        priority
      />
    </div>
  )
}
