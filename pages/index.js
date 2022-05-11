import Head from 'next/head'


// Components
import NavLinks from "../components/layouts/navComponents/NavLinks"
// Import Swiper React components
import SwiperPag from "../components/swiperJs/SwiperPag"

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
       <div className="container w-full ">
          <section  className="lg:container lg:grid lg:grid-cols-[25%75%] w-full relative">
          
                      <section className="z-10  w-full">
                      <NavLinks isHome={true} />
                      </section>
                    <section className="lg:grid-span-8">
                    <SwiperPag images={dicSwiper}/>

                    </section>

     
          </section>
       </div>
     </main>

    </>
  )
}
