import { Icon } from "@iconify/react";
import Image from "next/image";
import Team from "./Team";

const Reason = () => {
  return (
    <div className="bg-black xl:py-[100px] xl:px-[15vw] py-10 px-6 text-white font-sysui">
      <div className="bg-reason xl:py-[85px] xl:px-[38px]">
        <h2 className="font-semibold text-[50px] mb-[40px]">Budbo is a global brand in emerging markets<br />and technologies.</h2>
        <p className="max-w-[862px] text-[24px] font-medium">
          We are innovative, stubborn, and find purpose only within the pursuit of our goals. The Budbo suite of cannabis products has outpaced the future with curiosity, sleek user experiences, and an exceptional token reward system.
          <br /><br />
          It’s time to begin your adventure, invest in Budbo today.
        </p>
      </div>
      <div className="mx-auto w-[1100px] h-[90px] border-b-[1px] my-[38px] border-secondary-graylight"></div>
      <div>
        <h1 className="text-[32px] lg:text-[64px] font-semibold leading-none lg:mx-[80px] my-[40px] r">
          <span>Let’s talk</span>&nbsp;
          <span className=" text-[50px] lg:px-[34px] lg:text-[128px] text-transparent bg-linear bg-clip-text">Reasons</span>&nbsp;
          <span>to invest</span>
        </h1>
        <p className="text-[18px] lg:px-[30px] w-full lg:text-[32px] mb-[92px]">
          Reason #1 – Not another Cannabis startup; Budbo is a technology company that has built the ecosystem that benefits dispensaries, growers, manufacturers, couriers, patients, and consumers.
        </p>
        <div className="flex flex-wrap space-y-8 content-center">
          <div className="lg:flex  w-max items-start">
            <div className="mb-8 lg:text-center">
              <p className="bg-linear bg-clip-text text-transparent font-bold text-[52px] leading-none pb-[40px]">
                Your future.<br />
                Your money.<br />
                Your adventure.<br />
                You’re Budbo.<br />
              </p>
              <p className="text-[18px] lg:text-center lg:w-[369px]">
                When you invest in Budbo, you’re investing in a company poised for endless scalability and explosive revenue growth potential.
                <br /><br />
                Budbo is far more than just an app.
                <br />
                It’s the first step of your new journey.
              </p>
            </div>
            <div className="w-max h-max flex  justify-center items-start">
              <Image
                src="/reason/homebook 1.png"
                alt="homebook1"
                width={872}
                height={418}
                className="lg:w-[872px] w-[518px]"
              />
              <Image
                src="/reason/Image.png"
                alt="homephone"
                width={257}
                height={416}
                className="w-[150px] lg:w-[257px]"
              />
            </div>
          </div>
          <div className="lg:m-[70%] m-auto flex justify-center my-[32px] gap-[20px]">
            <button className="lg:w-[70px] w-14 lg:h-[70px] h-14 bg-primary-purple opacity-50 rounded-full flex justify-center items-center">
              <Icon icon="teenyicons:arrow-left-solid" color="white" height={24} width={24} />
            </button>
            <button className="lg:w-[70px] w-14 lg:h-[70px] h-14 bg-primary-purple rounded-full flex justify-center items-center">
              <Icon icon="teenyicons:arrow-right-solid" color="white" height={24} width={24} />
            </button>
          </div>
        </div>
        <div className="py-[50px]">
          <h1 className="text-[70px] lg:text-[88px] font-semibold leading-none lg:mx-[80px] my-[40px] lg:text-center">
            Supercharge your portfolio.
          </h1>
          <div className="absolute top-[24000px] left-[-300px] pointer-events-none -z-1">
            <Image
              src="/reason/Ellipse 7.svg"
              alt="ellipse"
              width={2068}
              height={714}
              className="flex m-auto"
            />
          </div>
          <div className="flex justify-center gap-[30px] my-[84px] relative z-10">
            {/* <p className="bg-linear bg-clip-text text-transparent text-right pb-[150px]">
            Patent-pending technologies
            <br/>
            175,000 registered users
          </p> */}
            <Image
              src="/reason/checkout 2.png"
              alt="checkout2"
              width={685}
              height={515}
            />
            {/* <p className="bg-linear bg-clip-text text-transparent text-left pb-[150px]">
            Gamified product discovery
            <br/>
            Sleek user interface
          </p> */}
          </div>
          <div className="text-[22px] lg:p-[135px]">
            <span className="bg-linear bg-clip-text text-transparent">289,000,000</span>
            &nbsp;
            <span>patients and recreational users worldwide can now</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">find, order, and have delivered</span>
            &nbsp;
            <span>
              <br />
              legal cannabis from 1000s of local dispensaries around the world.
              <br /><br />
              This is your opportunity to tap into legalized cannabis sales and industry expansion on a massive scale.
            </span>
          </div>
        </div>
        <div className="py-[50px]">
          <h1 className="text-[70px] lg:text-[88px] font-semibold leading-none lg:mx-[80px] my-[40px] lg:text-center">
            Business intelligence.
          </h1>
          <div className="text-[#97979A] text-[24px] font-medium lgtext-center py-[5px]">
            <span>Built by dispensaries for dispensaries, Budbo‘s retailer dashboard and key analytics <br /></span>&nbsp;
            <span className="bg-linear bg-clip-text text-transparent italic" >empower</span>&nbsp;
            <span>our dispensary clients to sell more products with pro-active decision making.</span>
          </div>
          <div className="lg:flex justify-center items-start my-[40px] w-max">
            <div className="flex relative overflow-hidden items-end justify-end">
              <Image
                src="/reason/connectbook5 1.png"
                alt="connectbook"
                width={window.innerWidth * .7}
                height={window.innerWidth * .35}
              />
              <div className="absolute right-[8%]">
                <Image
                  src="/reason/connectphone 1.png"
                  alt="connectphone"
                  width={window.innerWidth * .1}
                  height={window.innerWidth * .2}
                />
              </div>
            </div>
          </div>
          <div className="text-[18px] lg:px-[180px]">
            <span>With a database of over</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">100,000</span>
            &nbsp;
            <span>target businesses and a successful pilot with</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">2,100</span>
            &nbsp;
            <span>dispensaries, Budbo has explosive opportunities for monthly recurring revenue growth from dispensaries, retailers, product manufacturers, brands, and growers. </span>
          </div>
        </div>
        <div className="py-[10x0px]">
          <h1 className="text-[64px] lg:text-[88px] font-semibold leading-none lg:mx-[80px] my-[40px] text-left">
            Problem solver.
            <br />
            Industry evolver.
          </h1>
          <div className="lg:flex justify-center items-start my-[40px] w-max">
            <div className="flex relative overflow-hidden items-end justify-end">
              <Image
                src="/reason/traxbook 1.png"
                alt="traxbook"
                width={window.innerWidth * .5}
                height={window.innerWidth * .25}
                className="w-[543px] lg:w-[1085px]"
              />
              <div className="absolute right-[15%]">
                <Image
                  src="/reason/traxchain 1.png"
                  alt="traxchain"
                  width={window.innerWidth * .08}
                  height={window.innerWidth * .16}
                  className="w-[110px] lg:w-[163px]"
                />
              </div>
            </div>
            <div className="lg:translate-x-[-170px] lg:mt-0 mt-10 lg:px-0 px-5">
              <div className="text-[18px] font-medium lg:mb-[150px]">
                Visibility into the entire cannabis supply chain from
                <br />
                <span className="bg-linear bg-clip-text text-transparent text-[64px] italic">seed to soul.</span>
              </div>
              <div className="font-medium text-[16px] lg:pl-[40px]">
                <p className="text-[28px] mb-[30px]">Blockchain powered telematic logistic solutions</p>
                <ul className="list-disc lg:pl-[30px]">
                  <li>Commercial fleet and delivery tracking.</li>
                  <li>Immutable lab results, compliance reporting.</li>
                  <li>Chain of custody.</li>
                  <li>Incredible revenue opportunities from per tracking fees.</li>
                  <li>AgTech and Pharmaceutical crossover</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[1100px] h-[50px] border-b-[1px] my-[100px] border-secondary-graylight"></div>
        </div>
        <div className="lg:py-[100px]">
          <h2 className="text-[32px] font-semibold leading-none lg:px-[156px]">
            Reason #2 – Budbo is the first holistic ecosystem that touches every stakeholder of the cannabis industry.
          </h2>
          <div className="flex justify-center items-start my-[36px]">
            <Image
              src="/reason/Table.png"
              alt="traxchain"
              width={1120}
              height={638}
            />
          </div>
        </div>
        <div className="py-[100px]">
          <h2 className="text-[32px] font-semibold leading-none lg:px-[156px] text-center mb-[60px]">
            Reason #3 – Exit strategy and exit opportunities.
          </h2>
          <div className="lg:px-[72px] mb-[150px] text-[24px] font-semibold">
            Our aim in approximately two years is to have an annual recurring revenue(ARR) of a minimum of $5 million and a valuation of approximately $45-$50 million, giving Budding Technologies, Inc. the ability to go to market either via a private or public offering, or acquisition.
            <br /><br />
            <ul className="list-disc pl-[120px]">
              <li>Explosive revenue growth from dispensaries, retailers, growers, manufacturers, and couriers</li>
              <li>Expansion throughout the world with advisors and team members in Canada, Germany, Israel, Thailand, and Portugal.</li>
            </ul>
            <br />
            Budbo is managed by an incredibly experienced team, with executives from Google, Comcast, NetSpend, Harvard trained doctors, cannabis industry veterans, and seasoned financial executives with extensive merger and acquisition experience as well as IPO/Public exit experience.
          </div>
          <Team />
          <p className="text-[17px] text-center">Battle tested and forged in fire</p>
        </div>
      </div>
      <div className="w-full bg-reason lg:after:py-[85px]">
        <h1 className="lg:text-center font-semibold text-[2rem] lg:text-[3rem]">
          <span>Meet your new&nbsp;</span>
          <span className="bg-linear bg-clip-text text-transparent text-[2.5rem] lg:text-[6rem]">Team</span>
        </h1>
        <h2 className="lg:text-center text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] mb-[60px]">Experience. Vision. Passion.</h2>
        <div className="relative md:flex justify-center mb-[50px]">
          <div className="flex">
            <Image
              src="/team/1_active.png"
              alt="team"
              width={window.innerWidth * .25}
              height={window.innerWidth * .25}
              className="w-screen"
            />
            <div className="px-[48px] flex flex-col md:hidden">
              <h3 className="text-center lg:text-start text-[50px]">Luke Patterson</h3>
              <h5 className="text-center lg:text-start text-[28px] text-primary-purple">CEO (Co-Founder)</h5>
            </div>
          </div>
          <p className="font-medium text-[20px] w-full text-primary-graydark50 md:hidden">
            A data-driven entrepreneur with true grit, Luke has decades of experience in the software industry. His works have been featured in Yahoo, TechCrunch, Complex, and Business Insider. As CEO and founder of his previous software venture in the restaurant and bar industry, Luke oversaw and directed every facet of the organization which ultimately resulted in its acquisition.
          </p>
          <div className="text-left justify-start hidden md:flex flex-col px-[48px] w-[70%]">
            <h3 className="text-center lg:text-start text-[50px]">Luke Patterson</h3>
            <h5 className="text-center lg:text-start text-[28px] text-primary-purple">CEO (Co-Founder)</h5>
            <p className="font-medium text-[20px] w-full text-primary-graydark50">
              A data-driven entrepreneur with true grit, Luke has decades of experience in the software industry. His works have been featured in Yahoo, TechCrunch, Complex, and Business Insider. As CEO and founder of his previous software venture in the restaurant and bar industry, Luke oversaw and directed every facet of the organization which ultimately resulted in its acquisition.
            </p>
          </div>
        </div>
        <Team />
      </div>
      <div className="lg:p-[12px]">
        <h1 className="text-[2rem] lg:text-[3.5rem] xl:text-[3.5rem] font-semibold my-[24px]">
          <span className="whitespace-nowrap">Team member</span>
          &nbsp;
          <span className="bg-linear bg-clip-text text-transparent">SPOTLIGHT</span>
        </h1>
        <div className="lg:flex flex-row-reverse  justify-center items-center gap-[60px]">
          <div className="lg:w-1/2">
            <Image
              src="/team/Dr Uma Image.png"
              alt="team"
              width={632}
              height={488}
            />
          </div>
          <div className="lg:w-1/2">
            <div>
              Our patent-pending product matching feature is on the cutting edge of scientific research.  The AI driven algorithm is improving everyday with the help of one of Budbo’s key members, Dr. Uma Dhanablan.
              <br /><br />
              <ul className="list-disc pl-[36px]">
                <li>Dr. Dhanabalan is a highly respected and educated physician and known to most as Dr Uma. She completed her Bachelor of Arts degree with High Honors from Rutgers University and her Medical Degree from the University of Medicine & Dentistry in Newark, New Jersey. </li>
                <br />
                <li>She completed her Family Practice Residency at the Medical University of South Carolina, in Charleston, South Carolina. She has her Master’s in Public Health and completed her Occupational & Environmental Medicine Residency and Fellowship in Heavy Metals at the Harvard School of Public Health in Boston, Massachusetts. She is a Fellow of the American Academy of Family Physicians.</li>
                <br />
                <li>She is a Diplomat in Cannabinoid Medicine Certified by the American Academy of Cannabinoid Medicine, and a Medical Review Officer Certified by  Medical Review Officer Certification Council. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
