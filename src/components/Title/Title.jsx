import React from "react";

const Title = ({ title, text, subtitle }) => {
  return (
    <>
    <h2>{subtitle}</h2>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};

export default Title;
