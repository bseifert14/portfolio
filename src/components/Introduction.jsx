import React from 'react'
import { Link } from 'react-scroll';

class Introduction extends React.Component {

  render() {
    return (
      <div class="background">
        <div id="over-background">
          <div class="banner">
            <div class="banner-text">
              Equivalent Division
            </div>
          </div>
          <div class="direct-user">
            <div class="left-triangle"/>
            <Link
              activeClass="active"
              to="benny"
              spy={true}
              smooth={true}
              duration={500}>
              <span class="fas fa-arrow-down fa-2x"/>
            </Link>
            <div class="right-triangle"/>
          </div>
          <div class="about-section">
            A gallery exploring contrast & polarity
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
