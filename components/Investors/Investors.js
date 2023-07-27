import { Icon } from "@iconify/react";
import Image from "next/image";

const members = [
  {
    key: 1,
    file: 'jack 5',
    name: 'Jack Finkelstei',
    investrole: 'Lead Investor',
    role: 'CEO - Liquimedlock, Inc.',
    words: 'I am the CEO and founder of a Canadian and US medical packaging company that offers unique supply chain products to labs, pharmacies, licensed producers and dispensaries in the cannabis industry. I’ve been a long time investor in Budbo. What first attracted me to Budbo was the matching technology and the ability for ancillary businesses, such as myself, to use the Budbo platform on the B2B side.',
    banner: 'jack_w'
  },
  {
    key: 2,
    file: 'virgil 2',
    name: 'Virgil Grant',
    investrole: 'Investor, Customer,',
    role: 'Owner - California Cannabis, Co-founder California Minority Alliance, Co-founder Southern California Coalition',
    words: 'Budbo has been a pleasure to work with and is multifaceted in that it supports a wide range of my cannabis businesses. I was first interested in Budbo as a platform for my dispensaries to increase sales. I have since joined the team as an advisor, investor, and customer for all of my cannabis related enterprises.',
    banner: 'virgil_w'
  },
]

const Investors = () => {
  return (
    <div className="flex w-full">
      <div className="w-full m-auto px-4 font-sysui lg:px-[160px] lg:py-[70px] items-center">
        <h1 className="text-center font-semibold text-[2rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] my-[56px]">
          <span>Hear from some of our</span>
          &nbsp;
          <span className="bg-linear bg-clip-text text-transparent">Investors</span>
          &nbsp;
          <span>and</span>
          &nbsp;
          <span className="bg-linear bg-clip-text text-transparent">Customers</span>
        </h1>
        <div className="w-full md:flex">
          {members.map(i =>
            <div key={i.key + "_members"} className="flex items-start md:w-1/2 gap-[36px]">
              <Image
                src={`/investors/${i.file}.png`}
                alt="team"
                width={window.innerWidth > 768 ? window.innerWidth * .1 : window.innerWidth * .2}
                height={window.innerWidth > 768 ? window.innerWidth * .12 : window.innerWidth * .25}
              />
              <div className="w-full md:w-[25vw] py-[24px]">
                <div className="text-[1.5rem] md:text-[1rem] font-medium leading-snug mb-[60px]">
                  <p>{i.name}</p>
                  <p className="italic">{i.investrole}</p>
                  <p>{i.role}</p>
                  <br />
                  <p className="text-primary-graydark md:ml-0 ml-[-80px]">{i.words}</p>
                </div>
                <Image
                  src={`/investors/${i.banner}.png`}
                  alt="team"
                  width={window.innerWidth > 768 ? window.innerWidth * .5 : window.innerWidth * .9}
                  height={window.innerWidth > 768 ? window.innerWidth * .5 / 1.5 : window.innerWidth * .9 / 1.5}
                  className="w-full md:ml-0 ml-[-80px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investors;
