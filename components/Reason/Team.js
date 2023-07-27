import { Icon } from "@iconify/react";
import Image from "next/image";

const members = [
  {
    file: '1',
    name: 'Luke Patterson',
    role: 'CEO'
  },
  {
    file: '2',
    name: 'Gary Heitz',
    role: 'COO'
  },
  {
    file: '3',
    name: 'Jacob Patterson',
    role: 'CTO'
  },
  {
    file: '4',
    name: 'Nick Heldreth',
    role: 'CMO'
  },
  {
    file: '5',
    name: 'Stephen Rosen',
    role: 'CFO'
  },
  {
    file: '6',
    name: 'Virgil Grant',
    role: 'Advisor'
  },
  {
    file: '7',
    name: 'Dr. Uma Dhanabalan',
    role: 'MD MPH FAAFP MRO CMS'
  },
  {
    file: '8',
    name: 'Teran Ramsey',
    role: 'Advisor'
  }
]

const Team = () => {
  return (
    <div className="w-full grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-0">
      {members.map(i => <div  key={'client_'+i.file} className="">
        <Image
          src={`/team/${i.file}.png`}
          alt="team"
          width={135}
          height={140}
        />
        <div className="text-[14px] font-semibold leading-[20px] -translate-y-full bg-linearblack">
          <span>{i.name}</span>
          <br/>
          <span className="text-primary-purple text-[12px]">{i.role}</span>
        </div>
      </div>)}
    </div>
  );
};

export default Team;
