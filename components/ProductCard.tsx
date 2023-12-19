import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductCard({ product }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Link href={product.affLink ? product.affLink : "https://mycollection.shop/tunabook_tusachdangquy"} target='blank' className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="product image"
          src={product.imageGroups[0]}
          width={560}
          height={640}
          className={cn(
            'object-cover duration-700 ease-in-out group-hover:opacity-75	',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
        <p>{VND.format(product.price)}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {product.shortDescription}
      </p>
    </Link>
  )
}
