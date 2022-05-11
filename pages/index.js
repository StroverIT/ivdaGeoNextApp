import Head from 'next/head'

// Components
import NavLinks from "../components/layouts/navComponents/NavLinks"
// Import Swiper React components
import SwiperPag from "../components/swiperJs/SwiperPag"
// Images 
import Image from "next/image"
const dicSwiper = [
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday"
  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 2"
  },


]
export default function Home() {
  return (
    <>
      <Head>
        <title>IvdaGeo</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

     <main className="mb-auto h-full">
       <section className="bg-white">
       <div className="container">
          <section  className="lg:grid lg:grid-cols-[25%75%] w-full relative">
          
                      <section className="z-10  w-full">
                      <NavLinks isHome={true} />
                      </section>
                    <section className="lg:grid-span-8">
                    <SwiperPag images={dicSwiper}/>

                    </section>

     
          </section>
       </div>
       </section>
       <section className="bg-color">

          <div className="container">
          <div className="lg:flex justify-between ">

            <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-start bg-green custom-border w-full h-full p-3">
              <div className="">
              <Image src="/images/logo.png" width="280" height="70" />
              </div>
              <div className="w-full text-sm mt-2 sm:mt-0 sm:ml-4 text-white text-center lg:text-left">АБОНИРАЙТЕ СЕ ЗА НАШИТЕ СПЕЦИАЛНИ ОФЕРТИ</div>
            </section>

            <div className="flex items-center justify-center w-full">
                <div className="flex justify-end w-full ">
                  <input type="text" className="px-4 py-2 w-full lg:w-64" placeholder="Вашият и-мейл" />
                  <button type="button" className="px-4 w-52 bg-primary text-white hover:bg-primary-trans transition-colors">
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

     </main>

    </>
  )
}
