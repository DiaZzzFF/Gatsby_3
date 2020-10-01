import React from "react";
import {Link} from "gatsby";


const data = [
  {
    id: 1,
    text: `home`,
    url: `/`,
  },
  {
    id: 2,
    text: `about`,
    url: `/about/`,
  },
  {
    id: 3,
    text: `projects`,
    url: `/projects/`,
  },
  {
    id: 4,
    text: `blog`,
    url: `/blog/`,
  },
  {
    id: 5,
    text: `contact`,
    url: `/contact/`,
  },
];

const PageLinks = ({listClass, itemClass, linkClass}) => {
  return (
    <ul className={`${listClass ? listClass : ``}`}>
      {data.map((link) => {
        return (
          <li className={`${itemClass ? itemClass : ``}`} key={link.id}>
            <Link className={`${linkClass ? linkClass : ``}`} to={link.url}>
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};


export default PageLinks;
