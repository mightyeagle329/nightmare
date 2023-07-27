import Image from "next/image";

const Role = () => {
  return (
    <div className="bg-black text-white pt-[136px] pb-[200px] text-center font-sysui">
      <h1 className="text-[3rem] sm:text-[5rem] my-[75px] leading-none">
        Mover. Maker.<br />Boundary breaker.
      </h1>
      <p className="text-primary-graydark50 text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] mb-[20px]">
        You are in control of your financial future and the paths and journeys your life takes.
        <br /><br />
        Take the step, and begin that journey with us.<br />
        Budbo is an investment opportunity without equal.
      </p>
      <p className="text-white text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] mb-[60px]">
        The future belongs to you: invest from only $195
      </p>
      <button className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] p-[2px] rounded-full bg-linear bg-clip-padding">
        <div className="px-[60px] py-[24px] rounded-full bg-black">
          <p className="bg-linear bg-clip-text text-transparent">Take control ➔</p>
        </div>
      </button>
      <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold mt-[140px] mb-[40px]">
        <span>Simply</span>&nbsp;
        <span className="italic">savvy.</span>
      </h1>
      <Image
        src="/about/ez.gif"
        alt="savvy"
        width={962}
        height={722}
        className="m-auto"
      />
    </div>
  );
};

export default Role;
