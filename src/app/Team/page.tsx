'use client';
import { PinContainer } from "@/components/ui/Tdpin";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'; 
import { FaXTwitter } from "react-icons/fa6";
import teamData from '@/data/team.json';

function Team() {
  return (
    <div id="team" className="container mx-auto py-12  md:px-0 max-w-7xl"> {/* Centering container with max-width */}
      <div className="text-center mb-8"> {/* Heading centering */}
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          Meet the Team ✨
        </h1>
      </div>

      <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16"> {/* Responsive grid */}
        {teamData.map((member, index) => (
          <PinContainer key={index} title={member.title}>
            <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem] mx-auto"> {/* Ensure card centering */}
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {member.name}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {member.description}
                </span>
              </div>
              <div className="relative flex flex-1 w-full rounded-lg mt-4">
                <img
                  style={{ objectFit: 'cover', width: '80%', height: '80%', borderRadius: '0.5rem', justifySelf: 'center' }}
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="flex mt-2  justify-between">
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="mr-2 text-white hover:text-gray-400">
                    <AiFillGithub size={24} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2 text-white hover:text-gray-400">
                    <AiFillLinkedin size={24} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaXTwitter size={24} />
                  </a>
                )}
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}

export default Team;
