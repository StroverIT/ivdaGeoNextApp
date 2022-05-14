// NextJS
import Head from 'next/head'
import Image from "next/image"

// Components
import NavLinks from "../components/layouts/navComponents/NavLinks"
// Import Swiper React components
import SwiperPag from "../components/swiperJs/SwiperPag"
import SwiperFreeMode from "../components/swiperJs/SwiperFreeMode"
// Images 
const swiperPag = [
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday 1",
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 2",
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 3",
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 4",
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 5",
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    key: "test carousel for my monday version 6",
    pageUrl: "/products/main/product"

  },
]
const swiperFreeImages = [
  {
    src:"/images/testCarousel.jpg",
    title: "Боя за коса",
    price: 123,
    isPromo: false,
    pageUrl: "/products/main/product"
  },
  {
    src:"/images/testCarousel.jpg",
    title: "ШКАФ ЗА БАНЯ С ОГЛЕДАЛО SYNCHRO Т2108-80К",
    price: 123,
    isPromo: false,
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    title: "СМЕСИТЕЛ ЗА КУХНЯ FORMA VITA КРИСТАЛ",
    price: 23.94,
    isPromo: true,
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    title: "СМЕСИТЕЛ ЗА КУХНЯ FORMA VITA Диамант",
    price: 1000.94,
    isPromo: false,
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    title: "Шкаф за обувки",
    price: 10,
    isPromo: false,
    pageUrl: "/products/main/product"

  },
  {
    src:"/images/testCarousel.jpg",
    title: "Шкаф за дрехи",
    price: 15,
    isPromo: false,
    pageUrl: "/products/main/product"

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
              <div className="w-full mt-2 text-center text-white sm:mt-0 sm:ml-4 lg:text-left">АБОНИРАЙТЕ СЕ ЗА НАШИТЕ СПЕЦИАЛНИ ОФЕРТИ</div>
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
            <div className="my-5 text-sm text-center">
            С абонамента се съгласявате предоставените от Вас лични данни да бъдат обработвани за целите и по начина посочени в общите условия, включително, но не само, за да получавате информация за актуални промоции и други активности на ИвдаГео.
              </div>
          </div>
       </section>
      <section className="py-5 bg-color">
        <div className="container">
        <h1 className="text-3xl">Месечни топ предложения</h1>
      <SwiperFreeMode images={swiperFreeImages}/>
        </div>
      </section>
    <section className="py-5 bg-color">
        <div className="container">
          <h2 className="py-2 text-2xl font-semibold text-center">За нас и нашият магазин</h2>
          <section className="items-center justify-center grid-cols-2 my-5 md:grid">
            <div className="my-5 text-center md:text-left lg:ml-40 md:my-0">
            Строителен супермаркет Ивда Гео с повече от 20 години опит в търговията със строителни материали, инструменти, крепежни елементи и други. В нашата железария ще намерите винаги богат асортимент от продукти на отлични цени и качествено обслужване.
            През годините се доказахме като надежден и лоялен партньор в бранша. Ние следим всички нови тенденции и можем да ви предложим решение за всеки индивидуален проект.
            </div>

            <div className="relative flex items-center justify-center w-full h-60">
              {/* Image  of the shop*/}

              <Image src="/images/testCarousel.jpg" alt="atasda" layout="fill" objectFit='contain'/>
            </div>
          </section>
        </div>

    </section>
    <section className="py-5 bg-color">
      <h1 className="text-center">Тука ще има нашите партньори</h1>
    </section>
     </main>

    </>
  )
}
