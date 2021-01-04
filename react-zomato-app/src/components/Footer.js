import React, { Component } from "react";
import "../index.css";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section id="get-zomato-app">
          <div class="container">
            <div class="row">
              <div class="col-md-6 d-none d-md-flex">
                <img
                  src="https://b.zmtcdn.com/web/home/dining/2c17b1c302656ee6d434bff811442f8c1588271130.png"
                  class="ml-auto"
                  width="250px"
                  height="400px"
                  alt="img"
                />
              </div>
              <div class="col-md-6">
                <p class="display-4 font-weight-bold mt-4">
                  Get the Zomato App
                </p>
                <p>
                  We will send you a link, open it on your phone to download the
                  app
                </p>
                <div class="d-flex">
                  <input type="text" placeholder="Email" class="email-input" />
                  <button class="btn btn-danger ml-2">Get App</button>
                </div>
                <p class="mt-3 text-muted">Download app from</p>
                <div class="d-flex">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.tildacdn.com%2Ftild3435-3430-4133-a362-346661346266%2FGoogle-Play-and-Appl.png&f=1&nofb=1"
                    width="350px"
                    height="60px"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
