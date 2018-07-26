import React, { Component } from 'react';
import logo from './img/logo-white.png';
import './sass/style.css';

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
              <div class='u-center-text'>
                <h2 class= 'heading-secondary'>
                Exciting tours for adventurous people
                </h2>
                </div>

                <div class='row'>
                  <div class='col-1-of-2'>
                    Text content
                  </div>
                  <div class='col-1-of-2'>
                    Image composition
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
