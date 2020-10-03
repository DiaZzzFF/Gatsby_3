import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa";


const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social__icon" />,
    url: `https://www.facebook.com`,
    name: `Facebook`,
  },
  {
    id: 2,
    icon: <FaLinkedin className="social__icon" />,
    url: `https://www.linkedin.com`,
    name: `Linkedin`,
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social__icon" />,
    url: `https://dribbble.com`,
    name: `Dribbble`,
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social__icon" />,
    url: `https://www.behance.net`,
    name: `Behance`,
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social__icon" />,
    url: `https://www.twitter.com`,
    name: `Twitter`,
  },
];

const SocialLinks = ({listClass, itemClass, linkClass}) => {
  return (
    <ul className={`social__list ${listClass ? listClass : ``}`}>
      {data.map((link) => {
        return (
          <li className={`social__item ${itemClass ? itemClass : ``}`} key={link.id}>
            <a className={`social__link ${linkClass ? linkClass : ``}`} href={link.url}>
              <span className="visually-hidden">{link.name}</span>
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export default SocialLinks;
