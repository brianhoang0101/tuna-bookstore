import { useRef } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { getProducts, getBestSellerProducts } from '../sfcc.js'
import Image from 'next/image'
import Link from 'next/link'
import logoTuSachDangQuy from "../public/tusachdangquy.svg"
import logoTuSachBinhYen from "../public/tusachbinhyen.svg"
import logoTuSachGiauCo from "../public/tusachgiauco.svg"
import logoNhaLanhDaoTuongLai from "../public/nhalanhdaotuonglai.svg"


export default function Gallery({ trendingBooks, newBooks }) {
  let newBookRef = useRef<HTMLParagraphElement>()
  let socialRef = useRef<HTMLParagraphElement>()
  let trendingBookRef = useRef<HTMLParagraphElement>()

  const scrollHandler = (e) => {
    e.preventDefault()
    // @ts-ignore
    newBookRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #d5d5d5',
  }

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={socialRef}
            >
              Các kênh truyền thông
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-3 sm:grid-cols2- lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4">
          <div className='flex horizontal w-full'>
            <Image
              style={imageStyle}
              src={logoTuSachDangQuy}
              className='aspect-square mr-1 w-14 h-14'
              alt='Tiktok Tủ sách đáng quý'
            />
            <div className="flex-row">
              <a className='text-sm'>TỦ SÁCH ĐÁNG QUÝ</a>
              <Link target="_blank"
                className="flex items-left justify-left text-base font-medium text-orange-600"
                href="https://www.tiktok.com/@tusach.dangquy">
                @tusach.dangquy
              </Link>
            </div>
          </div>
          <div className='flex horizontal w-full'>
            <Image
              style={imageStyle}
              className='aspect-square mr-1 w-14 h-14'
              src={logoTuSachGiauCo}
              alt='Tiktok Tủ sách giàu có'
            />
            <div className="flex-row">
              <a className='text-sm overflow-ellipsis overflow-hidden'>TỦ SÁCH GIÀU CÓ</a>
              <Link target="_blank"
                className="flex items-left justify-left text-base font-medium text-orange-600"
                href="https://www.tiktok.com/@tusach.giauco">
                @tusach.giauco
              </Link>
            </div>
          </div>
          <div className='flex horizontal w-full'>
            <Image
              style={imageStyle}
              src={logoTuSachBinhYen}
              alt='Tiktok Tủ sách bình yên'
              className='aspect-square mr-1 w-14 h-14'
            />
            <div className="flex-row">
              <a className='text-sm'>TỦ SÁCH BÌNH YÊN</a>
              <Link target="_blank"
                className="flex items-left justify-left text-base font-medium text-orange-600"
                href="https://www.tiktok.com/@tusachbinhyen">
                @tusachbinhyen
              </Link>
            </div>
          </div>
          <div className='flex horizontal w-full'>
            <Image
              style={imageStyle}
              src={logoNhaLanhDaoTuongLai}
              className='aspect-square mr-1 w-14 h-14'
              alt='Tiktok Nhà lãnh đạo tương lai'
            />
            <div className="flex-row">
              <a className='text-sm'>NHÀ LÃNH ĐẠO TƯƠNG LAI</a>
              <Link target="_blank"
                className="flex items-left justify-left text-base font-medium text-orange-600"
                href="https://www.tiktok.com/@nhalanhdaotuonglai">
                @nhalanhdaotuonglai
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={trendingBookRef}
            >
              SÁCH BÁN CHẠY
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {trendingBooks &&
            trendingBooks.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={newBookRef}
            >
              SÁCH MỚI
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {newBooks &&
            newBooks.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps() {
  const bestSellerProducts = await getBestSellerProducts()

  const newProducts = await getProducts()

  return {
    props: {
      trendingBooks: bestSellerProducts,
      newBooks: newProducts,
    },
  }
}
