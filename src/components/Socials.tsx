'use client'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Define social media links
const socials = [
  { id: 1, icon: FaInstagram, label: 'Instagram', link: 'https://www.instagram.com/waffle_hackclub/' },
  // { id: 2, icon: FaXTwitter, label: 'Twitter', link: 'https://x.com/Waffle-Hackclub' },
  { id: 3, icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/company/waffle-hackclub' },
];

const Socials: React.FC = () => {
  return (
    <div id="socials" className="flex flex-col items-center pt-5 md:pt-5 pb-20"> {/* Adjusted padding-bottom */}
      {/* Section Title */}
      <h2 className="text-3xl md:text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-black animate-pulse">
        Our Socials
      </h2>

      {/* Social Media Icons */}
      <div className="flex gap-6">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              id={`social-icon-${social.id}`} // Use unique ID for each social media icon
            >
              <Icon className="text-white text-4xl transition-transform duration-300 transform group-hover:scale-110" />
              {/* Icon hover effect */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;