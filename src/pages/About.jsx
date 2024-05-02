import react from "react";
import Image from "../Assets/Images/about.jpg";
import Title from "../components/Title/Title";

const About = () => {
  return (
    <>
      <div className="content">
        <div>
          <Title
            subtitle="Hello"
            title="I'm Antoine"
            text="I'm a web developer"
          />
          <button>See more</button>
          <div>
          <img src={Image}></img>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
