import React, { Component } from 'react';
import logo from './img/logo-white.png';
import './sass/style.css';
import './fonts/icon-font.css';
import Photo_1 from './img/nat-1-large.jpg';
import Photo_2 from './img/nat-2-large.jpg';
import Photo_3 from './img/nat-3-large.jpg';


class App extends Component {
  render() {
    return (
    <div>
      <header class='header'>
        <div class='header__logo-box'>
          <img src = {logo} alt='Logo' class='header__logo'/>
        </div>
        <div class='header__text-box'>
          <h1 class='heading-primary'>
            <span class='heading-primary--main'>Outdoors</span>
            <span class='heading-primary--sub'>is where life happens</span>
          </h1>

          <a href='#' class='btn btn--white btn--animated'>Discover our tours</a>
        </div>
        </header>

        <main>
            <section class= 'section-about'>
              <div class='u-center-text u-margin-bottom-big'> {/*UTILITY CLASSES*/}
                <h2 class= 'heading-secondary'>
                Exciting tours for adventurous people
                </h2>
              </div>

                <div class='row'>
                  <div class='col-1-of-2'>
                    <h3 className="heading-tertiary u-margin-bottom-small"> You're going to fall in love with nature</h3>
                    <p class="paragraph">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small"> Live adventures like you never have before</h3>
                    <p class="paragraph">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <a href="#" class="btn-text">Learn more &rarr;</a>
                  </div>
                  <div class='col-1-of-2'>
                    <div class="composition">
                      <img src= {Photo_1} alt="P1" class="composition__photo composition__photo--p1"/>
                      <img src= {Photo_2} alt="P2" class="composition__photo composition__photo--p2"/>
                      <img src= {Photo_3} alt="P3" class="composition__photo composition__photo--p3"/>
                    </div>
                  </div>
                </div>
            </section>

            <section class="section-features">


                <div class="row">
                  <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-world"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p class="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-compass"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p class="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-map"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Find Your way</h3>
                        <p class="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-heart"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p class="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>
                </div>
            </section>

            <section class="section-tours">
              <div class='u-center-text u-margin-bottom-big'> {/*UTILITY CLASSES*/}
                <h2 class= 'heading-secondary'>
                  Most popular tours
                </h2>
              </div>

              <div class='row'>
                <div class='col-1-of-3'>
                  <div class="card">
                    <div class="card__side card__side--front">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tours</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                      BACK
                    </div>
                  </div>
                </div>
                <div class='col-1-of-3'>
                  <div class="card">
                    <div class="card__side card__side--front">
                      FRONT
                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                      BACK
                    </div>
                  </div>
                </div>
                <div class='col-1-of-3'>
                  <div class="card">
                    <div class="card__side card__side--front">
                      FRONT
                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                      BACK
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </main>
{/*
        <section class='grid-test'>
          <div class='row'>
            <div class='col-1-of-2'>
              Col 1 of 2
            </div>
            <div class='col-1-of-2'>
              Col 1 of 2
            </div>
          </div>

          <div class='row'>
            <div class='col-1-of-3'>
              Col 1 of 3
            </div>
            <div class='col-1-of-3'>
              Col 1 of 3
            </div>
            <div class='col-1-of-3'>
              Col 1 of 3
            </div>
          </div>

          <div class='row'>
            <div class='col-1-of-3'>
              Col 1 of 3
            </div>
            <div class='col-2-of-3'>
              Col 2 of 3
            </div>
          </div>

          <div class='row'>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
          </div>

          <div class='row'>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-2-of-4'>
              Col 2 of 4
            </div>
          </div>

          <div class='row'>
            <div class='col-1-of-4'>
              Col 1 of 4
            </div>
            <div class='col-3-of-4'>
              Col 3 of 4
            </div>

          </div>
      </section>
      */}
</div>

    );
  }
}

export default App;
