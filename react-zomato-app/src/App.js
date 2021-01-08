import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import * as Services from "./services/service";

import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    restaurants: [],
    loading: true,
    search: "",
  };
  async componentDidMount() {
    const result = await Services.search();
    this.props.setRestaurants(result.data.restaurants);
    this.props.setQVal(result.data.restaurants);
    console.log(this.props.setQVal(result.data.restaurants));
  }


  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log("jksjfkd",event);
    
  };
  searchCuisines = (e) => {
    const res = Services.cuisineSearch(this.state.search);
    this.setState({res});
    console.log(this.state.search);
  };

  
  render() {
    return (
      <div>
        {this.state.loading ? (
          <>
            {/* <ul>
        {this.state.restaurants && this.state.restaurants.map(rest => <li>{rest.restaurant.cuisines}</li>) }
      </ul> */}
            <Header
              restaurants={this.props.restaurants}
              onChangeHandler={this.onChangeHandler}
              onSubmit={this.props.restaurants}
              searchCuisines={this.searchCuisines}
            />
            <Footer />
          </>
        ) : (
          <>
            <Header
              restaurants={this.props.restaurants}
              onChangeHandler={this.onChangeHandler}
              onSubmit={this.props.restaurants}
              searchCuisines={this.searchCuisines}
            />
          
            <Footer />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  search: state.restaurants,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setRestaurants: (restaurants) =>
      dispatch({ type: "restaurants/set", payload: restaurants }),
    setQVal: (cuisines) =>
      dispatch({ type: "cuisines/set", payload: cuisines }),
    // search: (searchQuery) =>  dispatch(search(searchQuery))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
