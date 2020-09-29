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
    url: `https://www.twitter.com`,
  },
  {
    id: 2,
    icon: <FaLinkedin className="social__icon" />,
    url: `https://www.twitter.com`,
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social__icon" />,
    url: `https://www.twitter.com`,
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social__icon" />,
    url: `https://www.twitter.com`,
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social__icon" />,
    url: `https://www.twitter.com`,
  },
];

const SocialLinks = ({listClass, itemClass, linkClass}) => {
  return (
    <ul className={`social__list ${listClass ? listClass : ``}`}>
      {data.map((link) => {
        return (
          <li className={`social__item ${itemClass ? itemClass : ``}`} key={link.id}>
            <a className={`social__link ${linkClass ? linkClass : ``}`} href={link.url}>
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


export default SocialLinks;
