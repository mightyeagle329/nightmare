import Image from "next/image";
import { Fragment, useState } from "react";
import { Icon } from '@iconify/react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

const menues = [
  { name: 'Home', href: '#' },
  { name: 'Discover/Match',  href: '#'},
  { name: 'Nearby',  href: '#'},
  { name: 'Products', href: '#'},
  { name: 'Brands', href: '#'},
  { name: 'Retailers', href: '#'},
  { name: 'Dashborads', href: '#'},
  { name: 'My Orders', href: '#'},
  { name: 'Wallet', href: '#'},
  { name: 'Earn Tokens', href: '#'},
  { name: 'Profile', href: '#'},
  { name: 'Settings', href: '#'},
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav className="w-full fixed top-0 z-50 select-none bg-white/70 backdrop-blur-xl transition-all duration-300">
      <div className="hidden md:flex py-[8px] px-[18px] md:px-[48px] row-auto justify-between border-b-[1px] border-secondary-graylight">
        <button className="py-[2px] px-[8px] bg-white border-[1px] text-primary-graydark
        border-secondary-graylight rounded-[8px] text-xs font-sysui font-bold leading-4">+ ADD YOUR LOCATION</button>
        <div className="flex md:gap-[24px] gap-[14px]">
          <div className="hidden lg:flex items-center gap-[8px]">
            <div className="flex text-primary-graydark font-sysui font-bold text-[14px] leading-normal items-center">
              Convert Prices to &nbsp;
              <Image
                src="/logo_ico.svg"
                alt="Bubo icon"
                width={16} height={16}
              />
              &nbsp; BUBO
            </div>
            <label className="relative inline-flex cursor-pointer align-middle">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-[44px] h-[24px] bg-secondary-graylight rounded-full
              peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
              after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full
              after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center">
            <p className="flex text-primary-graydark font-sysui text-[14px] leading-[16px]">
              <span className="mr-1 leading-[16px]"><Icon icon="tabler:arrows-double-ne-sw" width="16" height="16"/></span>
              <span className="mr-1 font-bold text-primary-purple">1 BUBO</span>
              <span className="mr-1 font-bold text-black">= 1.4567 USD</span>
              <span className="mr-1">- 24.12</span>
              <span className="mr-1 leading-[16px] font-bold text-secondary-greendark"><Icon icon="typcn:arrow-up-thick" width="16" height="16" /></span>
              <span className="mr-1 font-bold text-secondary-greendark">0.5%</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary-graydark font-sysui text-[14px] leading-[16px]">
            Connect Crypto Wallet
            <Icon icon="streamline:computer-connection-wifi-wireless-wifi-internet-server-network" width="16" height="16" rotate={1}/>
          </div>
        </div>
      </div>
      <div className="py-[24px] px-[18px] md:px-[48px] row-auto flex justify-between border-b-[1px] border-secondary-graylight">
        <div className="flex gap-[24px] h-[48px]">
          <a href="#home" className="hidden md:flex link mt-[-10px]">
            <Image
              src="/logo_txt.svg"
              alt="Logo - Budbo"
              width={145}
              height={65}
            />
          </a>
          <a href="#home" className="flex md:hidden link mt-[-20px] mb-[-20px]">
            <Image
              src="/logo.svg"
              alt="Logo - Budbo"
              objectFit="fill"
              width={100}
              height={100}
            />
          </a>
          <button className="xl:px-[24px] xl:py-[14px] h-[48px] w-[48px] xl:w-full bg-primary-purple10 flex gap-[16px] rounded-[24px] xl:rounded-[8px]
            font-bold text-primary-purple text-[18px] hover:bg-primary-purple50 transition-all justify-center items-center">
            <Image
              src="/cannabis.svg"
              alt="Cannabis Slider Icon"
              width={24}
              height={24}
            />
            <span className="hidden xl:block">Find Perfect Match</span>
          </button>
          <div className="hidden lg:flex relative text-gray-light-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[16px] pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input className="pl-[48px] px-[24px] py-[14px] h-[48px] max-w-[416px] bg-white border-[1px] border-primary-purple10 gap-[16px] rounded-[8px]
              text-[18px] text-black focus:border-primary-graydark50 focus:outline-none transition-all font-sysui"
              placeholder="Products, retailers & more..." />
          </div>
        </div>
        <div className="flex gap-[32px] h-[48px] items-center">
          <div className="flex gap-[16px] items-center">
            <button className="p-[16px] h-[48px] w-[48px] bg-primary-purple10 flex rounded-full
              hover:bg-primary-purple50 text-primary-purple transition-all">
              <Icon icon="el:user" width="16" height="16" />
            </button>
            <p className="hidden xl:flex text-primary-graydark text-[16px] font-bold transition-all">Login / Register</p>
          </div>
          <button className="hidden xl:flex p-[16px] h-[48px] w-[48px] bg-primary-purple10 rounded-full
            hover:bg-primary-purple50 text-primary-purple transition-all">
            <Icon icon="mdi:heart" width="16" height="16" />
          </button>
          <div className="flex gap-[16px] items-center">
            <button className="p-[16px] h-[48px] w-[48px] bg-primary-purple flex rounded-full
              hover:bg-primary-purple50 text-primary-purple10 transition-all">
              <Icon icon="majesticons:shopping-cart" color="white" width="16" height="16" hFlip={true} />
            </button>
            <p className="hidden xl:flex text-primary-graydark text-[16px] font-medium">0.00 USD</p>
          </div>
          <button onClick={() => setMobileMenuOpen(true)}
                className="h-[48px] w-[48px] ml-[-20px] flex md:hidden justify-center items-center rounded-full text-black transition-all">
            <Icon icon="tabler:menu-deep" color="black" width="36" height="36" />
          </button>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Icon icon="tabler:arrows-double-ne-sw" width="16" height="16"  aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 text-center">
                  <a
                        href='#'
                        className="-mx-3  block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </a>
                    {menues.map((item, i) => (
                      <a
                        key={item.name+"_"+i}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                    )) }
                  </div>
                  <div className="py-6">
                  <a href="#" className=" lg:hidden md:flex link mt-[-10px]">
                    <Image
                      src="/logo_txt.svg"
                      alt="Logo - Budbo"
                      width={145}
                      height={65}
                      className="m-auto"
                    />
                  </a>
                  <div className="border border-primary-graydark rounded-md py-2 flex items-center">
                    <div className="m-auto flex items-center text-primary-graydark font-sysui text-[14px] leading-[16px]">
                      <span className="w-[31px] h-[31px] pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 103 103" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M51.245 98.8797C25.1373 98.6307 4.01798 77.1394 4.17249 50.9781C4.32699 24.8168 25.6925 3.7308 51.8055 3.97992C77.9132 4.22898 99.0326 25.715 98.8781 51.8816C98.7236 78.0428 77.3528 99.1288 51.245 98.8797ZM50.1578 61.8329C48.0097 49.8163 46.7964 48.5067 44.0879 45.0656C43.6481 46.7158 43.2824 47.5156 41.2434 46.6769C38.5107 45.5496 34.8495 41.6206 34.4557 40.8881C34.336 42.2807 34.3213 43.8712 35.0191 45.2716C33.1251 44.1524 29.7788 41.7372 28.3662 39.117C28.0659 40.5186 27.8342 41.9952 28.0436 43.4017C26.6863 42.2024 22.7795 39.4042 21.7594 36.8463C21.4267 38.3539 21.2397 39.4533 21.7153 40.724C16.8172 36.7831 15.6052 31.6486 15.13 26.7233C11.9577 50.5789 28.3489 45.6495 40.4699 51.8031C43.5928 53.3969 46.7614 56.2254 50.1578 61.8329ZM52.7697 61.8579C55.0595 49.8836 56.2882 48.5973 59.037 45.2082C59.4572 46.8666 59.8134 47.6733 61.8621 46.8736C64.6078 45.7986 68.315 41.9399 68.7174 41.2149C68.8207 42.6097 68.8166 44.2003 68.1023 45.5872C70.0093 44.5042 73.3837 42.1532 74.8271 39.5602C75.1108 40.9674 75.325 42.4483 75.0991 43.8506C76.4704 42.6773 80.4098 39.9539 81.46 37.4158C81.7749 38.9296 81.9489 40.0325 81.4583 41.2939C86.4024 37.447 87.6749 32.3361 88.2083 27.4204C91.0984 51.3339 74.7673 46.0924 62.575 52.014C59.4283 53.548 56.232 56.3157 52.7697 61.8579ZM62.2437 33.4926L66.3207 9.26795C56.986 5.94978 46.6129 5.85083 37.2348 8.99048L41.0199 33.2902C44.8154 34.2414 48.2886 39.4454 51.5483 47.5359C54.9031 39.5031 58.4374 34.366 62.2437 33.4926ZM80.5041 34.7734L84.7912 21.7169C84.3007 21.1643 83.7942 20.6275 83.277 20.1012C79.0342 15.7836 73.9262 12.3196 68.2329 9.99373L64.5579 32.6795C70.0262 31.7635 75.2961 32.9735 80.5041 34.7734ZM85.2298 47.2295L95.4652 43.6512C94.7818 39.8091 93.6037 36.1378 92.0101 32.6967C91.6771 37.8537 90.0022 42.7905 85.2298 47.2295ZM91.7476 60.0752L95.3248 60.2476C95.6916 58.3679 95.9418 56.4445 96.0702 54.4828L92.982 54.2192C92.9773 55.9055 92.2952 58.1387 91.7476 60.0752ZM95.7568 45.5212L83.5354 52.7619L96.1651 51.8929L96.1654 51.8504C96.178 49.7066 96.0366 47.5933 95.7568 45.5212ZM81.2779 74.5409L86.8584 78.8925C90.7691 73.8335 93.6231 67.9078 95.0735 61.4422L91.3868 60.9282C89.091 66.7368 85.7251 71.2318 81.2779 74.5409ZM69.5925 80.0152L78.7358 86.9916C80.197 85.8671 81.5898 84.6568 82.9035 83.3607C83.8059 82.4702 84.6661 81.5422 85.4894 80.5818L85.4948 80.5659L79.78 75.5852C76.8168 77.52 73.4211 78.9825 69.5925 80.0152ZM62.8053 81.3336C60.9502 88.0082 57.4812 92.8853 51.8218 94.7145L51.8132 96.1614C61.1836 96.1391 69.8756 93.211 77.0402 88.2309L67.2799 80.573C65.8446 80.8838 64.3513 81.1356 62.8053 81.3336ZM61.7486 54.4054L59.007 65.5667C73.5465 66.7215 78.6682 60.6739 79.4825 51.3401L71.0646 52.7972C71.4483 53.4392 71.6669 54.1861 71.6622 54.9894C71.6484 57.314 69.7581 59.1791 67.4382 59.157C65.1183 59.1349 63.2502 57.2339 63.2639 54.9092C63.2655 54.6433 63.2936 54.3829 63.3429 54.1333L61.7486 54.4054ZM87.6244 54.3703L82.8999 54.2986C80.6384 66.869 71.825 69.6736 61.636 69.8636L57.5624 80.0494C76.6785 79.354 86.9045 67.5033 87.6244 54.3703ZM57.8713 62.8002L51.4356 66.617L45.0457 62.6779L43.5314 70.0739L51.3228 85.7087L59.298 70.2243L57.8713 62.8002ZM38.7209 32.433L35.3142 9.67969C29.594 11.8967 24.4458 15.2629 20.1524 19.499C19.6291 20.0154 19.1163 20.5478 18.6194 21.0857L22.7517 34.2224C27.9751 32.522 33.2587 31.4127 38.7209 32.433ZM11.2662 31.9317C9.62682 35.342 8.41077 38.9905 7.68208 42.8191L17.8741 46.5923C13.1548 42.0574 11.5383 37.0892 11.2662 31.9317ZM10.0403 53.428L6.94929 53.6326C7.04918 55.5965 7.2767 57.5244 7.62656 59.411L11.2054 59.3068C10.6754 57.36 10.025 55.1142 10.0403 53.428ZM7.36849 44.678C7.0643 46.7445 6.89788 48.8549 6.88518 51.004L6.88493 51.0465L19.503 52.1564L7.36849 44.678ZM11.5507 60.1719L7.85835 60.6155C9.23218 67.1081 12.0159 73.0875 15.8664 78.2206L21.4977 73.9759C17.0954 70.5771 13.783 66.0184 11.5507 60.1719ZM22.9884 75.0488L17.2154 79.9198L17.2206 79.9359C18.0325 80.9118 18.8816 81.8562 19.7735 82.7637C21.0716 84.0848 22.4447 85.3214 23.8925 86.4737L33.1171 79.6726C29.3065 78.5616 25.9285 77.0345 22.9884 75.0488ZM39.8933 81.115C38.3498 80.8875 36.8597 80.602 35.4282 80.2691L25.5786 87.7399C32.6835 92.8562 41.34 95.9498 50.709 96.1509L50.7176 94.704C45.0803 92.7723 41.6694 87.8243 39.8933 81.115ZM41.268 54.21L39.6771 53.9022C39.7234 54.1527 39.7484 54.4136 39.7468 54.6796C39.7331 57.0042 37.8427 58.8694 35.5229 58.8472C33.203 58.8251 31.3349 56.9241 31.3486 54.5994C31.3534 53.7962 31.5807 53.0536 31.972 52.419L23.5723 50.8014C24.2762 60.1497 29.3259 66.2943 43.8775 65.4171L41.268 54.21ZM20.115 53.705L15.3901 53.6865C15.9602 66.8265 26.045 78.871 45.1455 79.9363L41.1926 69.6739C31.007 69.2895 22.2278 66.3117 20.115 53.705ZM51.8261 0.485008C23.7914 0.217562 0.850635 22.8526 0.684731 50.9448C0.518826 79.0371 23.1896 102.107 51.2244 102.375C79.2592 102.642 102.2 80.0071 102.366 51.9148C102.532 23.8226 79.8609 0.752453 51.8261 0.485008Z" fill="#7951D0"/>
                        </svg>
                      </span>
                      <span className="mr-1 leading-[16px]"><Icon icon="tabler:arrows-double-ne-sw" width="16" height="16"/></span>
                      <span className="mr-1 font-bold text-primary-purple">1 BUBO</span>
                      <span className="mr-1 font-bold text-black">= 1.4567 USD</span>
                      <span className="mr-1 text-black" >+ 2.12</span>
                      <span className="mr-1 leading-[16px] font-bold text-secondary-greendark"><Icon icon="typcn:arrow-up-thick" width="16" height="16" /></span>
                      <span className="mr-1 font-bold text-secondary-greendark">0.5%</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold"></span>
                  </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Header;
