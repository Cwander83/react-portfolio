import React from "react";
import Slider from "react-slick";
import { Spring } from "react-spring/renderprops";

import "./Carousel.css";

import About from "../../components/Pages/About/About";
import Skills from "../../components/Pages/Skills/Skills";
import Experience from "../../components/Pages/Experience/Experience";
import Projects from "../../components/Pages/Projects/Projects";
import Education from "../../components/Pages/Education/Education";
import Interests from "../../components/Pages/Interests/Interests";
import Button from "../../components/NavBox/Button/Button";
import NavBox from "../../components/NavBox/NavBox";
import BodyBox from "../../hoc/BodyBox";
// import NextArrow from "../../components/Arrows/NextArrow";
// import PrevArrow from "../../components/Arrows/PrevArrow";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,

      pages: [
        { page: "about" },
        { page: "skills" },
        { page: "experience" },
        { page: "projects" },
        { page: "education" },
        { page: "interests" }
      ]
    };
  }

  handleIndex = e => {
    this.slider.slickGoTo(e.target.value);
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };

    // nav area connecting Button map
    let navBtns = (
      <NavBox>
        <Button
          pages={this.state.pages}
          index={this.state.slideIndex}
          click={this.handleIndex}
        />
      </NavBox>
    );

    return (
      <BodyBox>
        {navBtns}

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 2500, duration: 500 }}
        >
          {spring => (
            <Slider
              style={spring}
              ref={slider => (this.slider = slider)}
              {...settings}
            >
              <div>
                <About />
              </div>
              <div>
                <Skills />
              </div>
              <div>
                <Experience />
              </div>
              <div>
                <Projects />
              </div>
              <div>
                <Education />
              </div>
              <div>
                <Interests />
              </div>
            </Slider>
          )}
        </Spring>
      </BodyBox>
    );
  }
}

export default Carousel;
