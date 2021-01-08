import React, { Component } from "react";

import "../index.css";
import * as Services from "../services/service"

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log("yo", props.restaurants,props.searchCuisines);
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
                name="search"
               
                onChange={this.props.onChangeHandler}
              />
              <button className="search-btn"  onClick={this.props.searchCuisines}>Search</button>
         
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
                          src={
                            item.restaurant.thumb
                              ? item.restaurant.thumb
                              : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F09%2FJunk-Food-Computer-Wallpaper.jpg&f=1&nofb=1"
                          }
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
              {this.props.restaurants &&
                this.props.restaurants.map((item, i) => {
                  return (
                    <div class="col-md-4">
                      <div class="d-flex align-items-center locations-div">
                        <p class="m-0 ml-3 h5">
                          {item.restaurant.location.locality}
                        </p>
                       <a href={item.restaurant.menu_url}> <i class="fa fa-arrow-right ml-auto mr-4"></i></a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
