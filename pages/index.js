import Head from 'next/head'

// Components
import NavLinks from "../components/layouts/navComponents/NavLinks"
// Import Swiper React components
import SwiperPag from "../components/swiperJs/SwiperPag"
import SwiperFreeMode from "../components/swiperJs/SwiperFreeMode"
// Images 
import Image from "next/image"
const swiperPag = [
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday 1"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 2"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 3"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 4"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 5"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 6"
  },
]
const swiperFreeImages = [
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday 1"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 2"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 3"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 4"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 5"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 6"
  },
]
export default function Home() {
  return (
    <>
      <Head>
        <title>IvdaGeo</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

     <main className="mb-auto">
       <section className="bg-white">
       <div className="container">
          <section  className="lg:grid lg:gap-2 lg:grid-cols-[25%75%] w-full relative ">
          
                      <section className="z-10">
                      <NavLinks isHome={true} />
                      </section>
                    <section className="relative flex items-center justify-center">
                    <SwiperPag images={swiperPag}/>

                    </section>

     
          </section>
       </div>
       </section>
       <section className="pt-10 pb-2 bg-color">

          <div className="container h-full">
          <div className="justify-between lg:flex ">

            <section className="flex flex-col items-center justify-center w-full p-3 sm:flex-row sm:justify-start bg-green custom-border">
              <div className="">
              <Image src="/images/logo.png" width="280" height="70" />
              </div>
              <div className="w-full mt-2 text-sm text-center text-white sm:mt-0 sm:ml-4 lg:text-left">АБОНИРАЙТЕ СЕ ЗА НАШИТЕ СПЕЦИАЛНИ ОФЕРТИ</div>
            </section>

            <div className="flex items-center justify-center w-full">
                <div className="flex justify-end w-full">
                  <input type="text" className="w-full px-4 py-2 border lg:w-64 border-gray" placeholder="Вашият и-мейл" />
                  <button type="button" className="px-4 text-white transition-colors w-52 bg-primary hover:bg-primary-trans">
                    Абонирай ме
                  </button>
                </div>
            </div>
          </div>
            <div className="my-5 text-center">
            С абонамента се съгласявате предоставените от Вас лични данни да бъдат обработвани за целите и по начина посочени в общите условия, включително, но не само, за да получавате информация за актуални промоции и други активности на ИвдаГео.
              </div>
          </div>
       </section>
      <section className="bg-color">
        <div className="container">

      <SwiperFreeMode images={swiperFreeImages}/>
        </div>
      </section>

     </main>

    </>
  )
}
