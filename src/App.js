import "./App.css";
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Cart from "./Cart/Cart";
import Signin from "./SigninNSignup/Signin";
import Signup from "./SigninNSignup/Signup";
import BlogDetails from "./BlogDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [], //cart is an array of {product: productStructure, count: num} structures
      price: 0,
    };
  }


  addHandler = (product) => {
    let currentState = {...this.state};
    currentState.cart.push({ product: product, count: 1 });
    currentState.price = currentState.price + product.price;
    this.setState( currentState , () => console.log(this.state));
  };

  increaseHandler = (prod) => {
    let currentState = {...this.state};
    const index = currentState.cart.findIndex(
      (elem) => elem.product.id === prod.id
    );
    currentState.cart[index].count++;
    currentState.price = currentState.price + prod.price;
    this.setState( currentState , () => console.log(this.state));
  };

  decreaseHandler = (prod) => {
    let currentState = {...this.state};
    const index = currentState.cart.findIndex(
      (elem) => elem.product.id === prod.id
    );
    if (currentState.cart[index].count > 1) {
      currentState.cart[index].count--;
      currentState.price = currentState.price - prod.price;
    }
    else if (currentState.cart[index].count === 1){
      currentState.cart.splice(index, 1);
      currentState.price = currentState.price - prod.price;
    }

    this.setState( currentState , () => console.log(this.state));
  };

  returnCount = (prod) => {
    let currentState = {...this.state};
    const cartElem = currentState.cart.find(
      (elem) => elem.product.id === prod.id
    );
    if (cartElem === undefined)
      return 0;
    console.log("CartElem",cartElem);
      return cartElem.count;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage handlers={[this.addHandler, this.increaseHandler, this.decreaseHandler, this.returnCount]} />
              </Route>

              <Route exact path="/Cart" >
                <Cart cart={this.state.cart} price={this.state.price}  />
              </Route>
              <Route exact path="/Signin" >
                <Signin />
              </Route>
              <Route exact path="/Signup" >
                <Signup />
              </Route>
              <Route path="/restaurants/:id">
                  <BlogDetails />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;