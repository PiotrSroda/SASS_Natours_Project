import React, { Component } from 'react';
import logo from './img/logo-white.png';
import './sass/style.css';
import './fonts/icon-font.css';
import Photo_1 from './img/nat-1-large.jpg';
import Photo_2 from './img/nat-2-large.jpg';
import Photo_3 from './img/nat-3-large.jpg';
import figure1 from './img/nat-8.jpg';
import figure2 from './img/nat-9.jpg';
import video from './img/video.mp4';
import video1 from './img/video.webm';


class App extends Component {
  render() {
    return (
    <div>
      <header className='header'>
        <div className='header__logo-box'>
          <img src = {logo} alt='Logo' className='header__logo'/>
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Outdoors</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>

          <a href='#' className='btn btn--white btn--animated'>Discover our tours</a>
        </div>
        </header>

        <main>
            <section className= 'section-about'>
              <div className='u-center-text u-margin-bottom-big'> {/*UTILITY classNameES*/}
                <h2 className= 'heading-secondary'>
                Exciting tours for adventurous people
                </h2>
              </div>

                <div className='row'>
                  <div className='col-1-of-2'>
                    <h3 className="heading-tertiary u-margin-bottom-small"> You're going to fall in love with nature</h3>
                    <p className="paragraph">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small"> Live adventures like you never have before</h3>
                    <p className="paragraph">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>
                  </div>
                  <div className='col-1-of-2'>
                    <div className="composition">
                      <img src= {Photo_1} alt="P1" className="composition__photo composition__photo--p1"/>
                      <img src= {Photo_2} alt="P2" className="composition__photo composition__photo--p2"/>
                      <img src= {Photo_3} alt="P3" className="composition__photo composition__photo--p3"/>
                    </div>
                  </div>
                </div>
            </section>

            <section className="section-features">


                <div className="row">
                  <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-world"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p className="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-compass"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-map"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Find Your way</h3>
                        <p className="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>

                  <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-heart"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p className="feature-box__text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                  </div>
                </div>
            </section>

            <section className="section-tours">
              <div className='u-center-text u-margin-bottom-big'> {/*UTILITY classNameES*/}
                <h2 className= 'heading-secondary'>
                  Most popular tours
                </h2>
              </div>

              <div className='row'>
                <div className='col-1-of-3'>
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tour</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: easy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                          <div className="card__price-box">
                              <p className="card__price-only">Only</p>
                              <p className="card__price-value">$297</p>
                          </div>
                          <a href="" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-1-of-3'>
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--2">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>7 day tour</li>
                          <li>Up to 40 people</li>
                          <li>6 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: medium</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                      <div className="card__cta">
                          <div className="card__price-box">
                              <p className="card__price-only">Only</p>
                              <p className="card__price-value">$585</p>
                          </div>
                          <a href="" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-1-of-3'>
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__picture card__picture--3">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>5 day tour</li>
                          <li>Up to 15 people</li>
                          <li>3 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: hard</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                          <div className="card__price-box">
                              <p className="card__price-only">Only</p>
                              <p className="card__price-value">$767</p>
                          </div>
                          <a href="" className="btn btn--white">Book now!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='u-center-text u-margin-top-huge'>
                <a href="#" className="btn btn--green">Discover all tours</a>
              </div>

            </section>

            <section className="section-stories">

            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type='video/mp4'/>
                <source src={video1} type='video/webm'/>
                Your browser is not supported
              </video>
            </div>

              <div className='u-center-text u-margin-bottom-big'> {/*UTILITY classNameES*/}
                <h2 className= 'heading-secondary'>
                  We make people genuinely happy
                </h2>
              </div>

              <div className="row">
                      <div className="story">
                          <figure className="story__shape">
                          <img src={figure1} alt="Person on a tour" className="story__img"/>
                          <figcaption className="story__caption">Mary Smith</figcaption>
                          </figure>
                          <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                          </div>
                      </div>
              </div>

              <div className="row">
                      <div className="story">
                          <figure className="story__shape">
                          <img src={figure2} alt="Person on a tour" className="story__img"/>
                          <figcaption className="story__caption">Jack Wilson</figcaption>
                          </figure>
                          <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely diffent now </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                          </div>
                      </div>
              </div>

              <div className='u-center-text u-margin-top-huge'>
                <a href="#" className="btn-text">Read all stories &rarr;</a>
              </div>
            </section>
        </main>
{/*
        <section className='grid-test'>
          <div className='row'>
            <div className='col-1-of-2'>
              Col 1 of 2
            </div>
            <div className='col-1-of-2'>
              Col 1 of 2
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>
              Col 1 of 3
            </div>
            <div className='col-1-of-3'>
              Col 1 of 3
            </div>
            <div className='col-1-of-3'>
              Col 1 of 3
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-3'>
              Col 1 of 3
            </div>
            <div className='col-2-of-3'>
              Col 2 of 3
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-2-of-4'>
              Col 2 of 4
            </div>
          </div>

          <div className='row'>
            <div className='col-1-of-4'>
              Col 1 of 4
            </div>
            <div className='col-3-of-4'>
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
