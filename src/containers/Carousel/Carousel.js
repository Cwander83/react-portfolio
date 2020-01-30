import React, { Fragment } from "react";
import Slider from "react-slick";

import "./Carousel.css";

import About from "../../components/Pages/About/About";
import Skills from "../../components/Pages/Skills/Skills";
import Experience from "../../components/Pages/Experience/Experience";
import Projects from "../../components/Pages/Projects/Projects";
import Education from "../../components/Pages/Education/Education";
import Interests from "../../components/Pages/Interests/Interests";
import Default from "../../components/Pages/Default/Default";
import Button from "../../components/Button/Button";

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
