import React from "react";
import {
  FaCode,
  FaSketch,
  FaAndroid
} from "react-icons/fa";


const data = [
  {
    id: 1,
    icon: <FaCode className="services__icon" />,
    title: `web development`,
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch className="services__icon" />,
    title: `web design`,
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="services__icon" />,
    title: `app design`,
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
];

const ServiceCards = ({listClass, itemClass, headingClass, underlineClass, textClass}) => {
  return (
    <div className={`${listClass ? listClass : ``}`}>
      {data.map((card) => {
        return (
          <article className={`${itemClass ? itemClass : ``}`} key={card.id}>
            {card.icon}

            <h4 className={`${headingClass ? headingClass : ``}`}>
              {card.title}
            </h4>

            <span className={`${underlineClass ? underlineClass : ``}`} />

            <p className={`${textClass ? textClass : ``}`}>
              {card.text}
            </p>
          </article>
        );
      })}
    </div>
  );
};


export default ServiceCards;
