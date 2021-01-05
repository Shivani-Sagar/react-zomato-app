import React, { Component } from "react";
import "../index.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log("yo", props.restaurants);
  }
  render() {
    return (
      <div>
        <div id="header-img">
          <header>
            <div className="d-flex justify-content-center">
              <div className="nav-menu">
                <p className="float-left text-white m-0 mt-3">Get the app</p>
                <p className="float-right text-white m-0 mt-3 h4 nav-link">
                  Sign up
                </p>
                <p className="float-right mr-4 text-white m-0 mt-3 h4 nav-link">
                  Login
                </p>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="d-flex justify-content-center header-flex">
              <p className="zomato">Zomato</p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <input
                type="text"
                placeholder="Search for dishes or cuisines..."
                className="search-box"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
        <section id="second-section">
        <div class="container">
                      <div class="row">
                {this.props.restaurants &&
                  this.props.restaurants.map((item, i) => {
                    return (
                   
                        <div class="col-md-3">
                      <div class="card">
                        <img
                          src={item.restaurant.thumb ? item.restaurant.thumb : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Computer-Wallpaper.jpg&f=1&nofb=1" }
                          height="100%"
                          width="100%"
                          alt="img"
                        />

                        <div class="card-bottom">
                          <p class="h4 m-0 mt-2 text-center">
                            {item.restaurant.cuisines}
                          </p>
                        </div>
                      </div>
                      </div>
                     
                    );
                  })}
                   </div>
                      </div>
              {/* </div>

              <div class="col-md-3">
                <div class="card">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftasteofindiaabq.com%2Fwp-content%2Fuploads%2F2014%2F12%2FIndian-Food-Samosa-Dish-HD-Wallpapers.jpg&f=1&nofb=1"
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                  <div class="card-bottom">
                    <p class="h4 m-0 mt-2 text-center">Go out for a meal</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fmeganalvarezrcl%2Fwp-content%2Fuploads%2Fsites%2F5598%2F2013%2F10%2Ffriends-eating-out.jpg&f=1&nofb=1"
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                  <div class="card-bottom">
                    <p class="h4 m-0 mt-2 text-center">Night Life</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.heart.org%2F-%2Fmedia%2Faha%2Fh4gm%2Farticle-images%2Ffriends-dining-out.jpg&f=1&nofb=1"
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                  <div class="card-bottom">
                    <p class="h4 m-0 mt-2 text-center">Zomato Gold</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <section id="popular-locations">
          <div class="container">
            <div class="d-flex justify-content-center">
              <p class="popular-heading">
                Popular locations in and around{" "}
                <span class="font-weight-bold">Kolkata</span>
              </p>
            </div>
            <div class="row mt-4">
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Park Street Area</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Sector 5, Salt Lake</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Ballygunge</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Chinar Park</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Mukundapur</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center locations-div">
                  <p class="m-0 ml-3 h5">Rashbehari</p>
                  <i class="fa fa-arrow-right ml-auto mr-4"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
