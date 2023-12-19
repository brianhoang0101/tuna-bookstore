import Image from 'next/image'
import Link from 'next/link'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="mx-auto bg-[#FFBE98]">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="relative px-4 py-4 sm:px-6 sm:py-8 lg:py-16 lg:px-8">
            <p className=" relative left-0 right-0 mx-auto max-w-xl text-center text-xl  font-semibold uppercase tracking-wide text-orange-600">
              TUNA Book - Tủ sách đáng quý
            </p>
            <h1 className=" mt-4 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">NHỮNG CUỐN SÁCH HAY</span>
              <span className="block text-orange-500">TRONG CUỘC ĐỜI</span>
            </h1>
            <div className="mx-auto mt-2 pt-4 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <Link
                target="_blank"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                href="https://mycollection.shop/tunabook_tusachdangquy">
                CHỌN SÁCH HAY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
