import React, { Fragment } from "react";
import Slider from "react-slick";

import "./Carousel.css";

import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import Education from "../Pages/Education/Education";
import Interests from "../Pages/Interests/Interests";
import Default from "../Pages/Default/Default";
import Button from "../Button/Button";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
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

      beforeChange: (current, next) => this.setState({ slideIndex: next }),
      lazyLoad: false
    };

    // nav area connecting Button map
    let navBtns = (
      <nav>
        <Button
          pages={this.props.pages}
          index={this.state.slideIndex}
          click={this.handleIndex}
        />
      </nav>
    );

    return (
      <Fragment>
        {navBtns}

        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <Default />
          </div>
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
      </Fragment>
    );
  }
}

export default Carousel;
