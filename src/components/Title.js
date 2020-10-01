import React from "react";


const Title = ({myTitle, boxClass, headingClass, underlineClass}) => {
  return (
    <div className={`title-box ${boxClass ? boxClass : ``}`}>
      <h2 className={`title ${headingClass ? headingClass : ``}`}>
        {myTitle || `default title`}
      </h2>

      <span className={`title__underline ${underlineClass ? underlineClass : ``}`} />
    </div>
  );
};


export default Title;
