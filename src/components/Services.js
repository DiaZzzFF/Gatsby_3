import React from "react";

import Title from "../components/Title";
import ServiceCards from "../components/ServiceCards";


const Services = () => {
  return (
    <section className="services">
      <Title myTitle="services" />

      <ServiceCards
        listClass="services__list"
        itemClass="services__item"
        headingClass="services__heading"
        underlineClass="services__underline"
        textClass="services__text"
      />
    </section>
  );
};


export default Services;
