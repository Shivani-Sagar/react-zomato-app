import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import * as Services from "./services/service"

import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    restaurants: [],
    loading: true,
  };
  async componentDidMount() {
    const result = await Services.search();
    this.props.setRestaurants(result.data.restaurants);
  }
  render() {
    
    return (
      <div>
    
        {this.state.loading ? (
          <>
           {/* <ul>
        {this.state.restaurants && this.state.restaurants.map(rest => <li>{rest.restaurant.cuisines}</li>) }
      </ul> */}
            <Header restaurants={this.props.restaurants} />
            <Footer />
          </>
        ) : (
          <>
            <Header restaurants={this.props.restaurants} />
            <Footer />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants
})

const mapDispatchToProps =  (dispatch) => {
  return {
    setRestaurants: (restaurants) => dispatch({type: "restaurants/set", payload: restaurants})
    // search: (searchQuery) =>  dispatch(search(searchQuery))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)