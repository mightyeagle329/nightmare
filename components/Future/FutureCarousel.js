import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const { useRef, useEffect } = require("react");

const FutureCarousel = () => {

  const IMAGES = [
    {
      src: "/screenshot/homebook 2.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'one'
    },
    {
      src: "/screenshot/Image.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'two'
    },
    {
      src: "/screenshot/connectbook5 3.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'three'
    },
    {
      src: "/screenshot/connectphone 2.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'four'
    },
    {
      src: "/screenshot/traxbook 2.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'five'
    },
    {
      src: "/screenshot/map 3.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'six'
    },
  ]

  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  // const textRef = useRef(null);

  useEffect(() => {
    const [carouselTimeline, scrollTrigger] = Carousel();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      carouselTimeline && carouselTimeline.progress(1);
    }
  }, [containerRef])

  const Carousel = () => {
    const carouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const carouselTextX = imagesRef.current.clientWidth - window.innerWidth
    carouselTimeline
      .to(imagesRef.current, { x: -(carouselTextX + 90), duration: 1 });

    // const width = `${imagesRef.current.clientWidth / window.innerHeight}%`
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "400%",
      scrub: 0,
      pin: true,
      animation: carouselTimeline,
    })
    return [carouselTimeline, scrollTrigger]
  }

  return (
    <div ref={containerRef} className="bg-black text-white p-5 pb-[200px] text-center font-sysui h-[100vh] flex flex-col w-[100vw] overflow-hidden">
      <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] lg:text-[88px] my-[83px] text-center font-semibold">
        Your future awaits...
      </h1>
      <div ref={imagesRef} className="flex flex-nowrap w-[200%] items-stretch">
        {IMAGES.map((x, i) => (
          <section key={"carousel_" + x.id}>
            <Image
              src={x.src}
              alt="Purple Line"
              width={x.w}
              height={x.h}
              className="object-cover"
            />
          </section>
        ))}
        {IMAGES.map((x, i) => (
          <section key={"carousel_2_" + x.id}>
            <Image
              src={x.src}
              alt="Purple Line"
              width={x.w}
              height={x.h}
              className="object-cover"
            />
          </section>
        ))}
      </div>
    </div>
  )
}
export default FutureCarousel;
