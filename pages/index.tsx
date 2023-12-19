import { useRef } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { getProducts, getBestSellerProducts } from '../sfcc.js'

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
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols2- lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">

          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@tusach.dangquy" data-unique-id="tusach.dangquy" data-embed-type="creator" style={{ maxWidth: "780px", minWidth: "288px" }} > <section> <a target="_blank" href="https://www.tiktok.com/@tusach.dangquy?refer=creator_embed">@tusach.dangquy</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@tusachgiauco" data-unique-id="tusachgiauco" data-embed-type="creator" style={{ maxWidth: "780px", minWidth: "288px" }} > <section> <a target="_blank" href="https://www.tiktok.com/@tusachgiauco?refer=creator_embed">@tusachgiauco</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@tusachbinhyen" data-unique-id="tusachbinhyen" data-embed-type="creator" style={{ maxWidth: "780px", minWidth: "288px" }} > <section> <a target="_blank" href="https://www.tiktok.com/@tusachbinhyen?refer=creator_embed">@tusachbinhyen</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@nhalanhdaotuonglai" data-unique-id="nhalanhdaotuonglai" data-embed-type="creator" style={{ maxWidth: "780px", minWidth: "288px" }} > <section> <a target="_blank" href="https://www.tiktok.com/@nhalanhdaotuonglai?refer=creator_embed">@nhalanhdaotuonglai</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
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
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8">
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
