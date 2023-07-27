import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/dist/client/image";
import { useEffect, useRef } from "react";



export default function Budbo() {

  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const [carouselTimeline, scrollTrigger] = Carousel();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      carouselTimeline && carouselTimeline.progress(1);
    }
  }, [wrapperRef])

  const Carousel = () => {
    const carouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } })
    const carouselTextX = imgRef.current.clientWidth - window.innerWidth

    carouselTimeline.to(imgRef.current, { x: -(carouselTextX), duration: 1 })

    carouselTimeline.to(img2Ref.current, { x: carouselTextX, duration: 1 }, "<")

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'bottom bottom',
      end: '500%',
      scrub: 0,
      pin: true,
      animation: carouselTimeline,
    })
    return [carouselTimeline, scrollTrigger]
  }

  return (
    <div ref={wrapperRef} className="w-[100vw] h-[100vh] overflow-hidden flexx flex-col text-center font-sysui">
      <h1 className="text-[60px]">
        <span>
          We are
        </span>&nbsp;
        <span className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent">
          Budbo
        </span>
      </h1>
      <div className="h-[45px] overflow-y-hidden">
        <p className="text-[30px]">...and we’ve been expecting you! Join the Revolution, invest today!</p>
        <p className="text-[30px]">‘Tinder’ for buying cannabis? Yea, we did that.</p>
        <p className="text-[30px]">We’ve been expecting you! Join the Revolution, invest today!</p>
      </div>
      <div className="flex flex-col lg:gap-[108px] gap-4 my-[75px]">
        <div ref={imgRef} className="flex lg:gap-[45px] gap-3 items-center justify-center w-[360%]">
          <Image
            src="/about/budbo/Rectangle 120.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <Image
            src="/about/budbo/Rectangle 122.jpg"
            alt="leaderboard"
            width={210}
            height={257}
          />
          <Image
            src="/about/budbo/Rectangle 125.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <Image
            src="/about/budbo/Rectangle 126.jpg"
            alt="leaderboard"
            width={210}
            height={257}
          />
          <Image
            src="/about/budbo/Rectangle 127.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <Image
            src="/about/budbo/Rectangle 134.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 1.png"
            alt="leaderboard"
            width={690}
            height={175}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 2.png"
            alt="leaderboard"
            width={686}
            height={175}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 3.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 1.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 2.png"
            alt="leaderboard"
            width={696}
            height={184}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 3.png"
            alt="leaderboard"
            width={691}
            height={181}
          />
        </div>
        <div ref={img2Ref} className="relative left-[-260%] flex lg:gap-[45px] gap-3 items-center justify-center w-[360%]">


          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 2.15 2.png"
            alt="leaderboard"
            width={691}
            height={181}
          />

          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 2.15 1.png"
            alt="leaderboard"
            width={690}
            height={175}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 2.png"
            alt="leaderboard"
            width={686}
            height={175}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 2.png"
            alt="leaderboard"
            width={691}
            height={181}
          />

          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 7.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <Image
            src="/about/budbo/Screen Shot 2022-12-21 at 2.07 1.png"
            alt="leaderboard"
            width={696}
            height={184}
          />
          <Image
            src="/about/budbo/Rectangle 138.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />

          <Image
            src="/about/budbo/Rectangle 128.jpg"
            alt="leaderboard"
            width={293}
            height={198}
          />
          <Image
            src="/about/budbo/Rectangle 130.png"
            alt="leaderboard"
            width={210}
            height={258}
          />
          <Image
            src="/about/budbo/Rectangle 132.png"
            alt="leaderboard"
            width={293}
            height={198}
          />
          <Image
            src="/about/budbo/Rectangle 131.png"
            alt="leaderboard"
            width={210}
            height={258}
          />
          <Image
            src="/about/budbo/Rectangle 129.png"
            alt="leaderboard"
            width={210}
            height={198}
          />




        </div>
        {/* <div className="flex lg:gap-[45px] gap-3 items-center justify-center w-full">
          
        </div>
        <div className="flex lg:gap-[45px] gap-3 items-center justify-center w-full">
          
        </div>
        <div className="flex lg:gap-[45px] gap-3 items-center justify-center w-full">
         
        </div>
        <div className="flex lg:gap-[20px] gap-1 items-center overflow-hidden w-full">
         
        </div> */}
        <div className="flex mb-[-76px] lg:gap-[45px] gap-3 items-center justify-center">
          <Image
            src="/about/puff 4.png"
            alt="leaderboard"
            width={789}
            height={789}
          />
        </div>
      </div>
    </div>
  )
};