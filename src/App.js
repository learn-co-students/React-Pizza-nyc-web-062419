import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    topping: "",
    size: "",
    vegetarian: true,
    editPizza: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(data => this.setState({ pizzas: data }));
  }

  clickHandler = obj => {
    let { topping, size, vegetarian } = obj;
    this.setState({ editPizza: obj });
    this.setState({ topping: topping });
    this.setState({ size: size });
    this.setState({ vegetarian: vegetarian });
  };

  changeHandler = e => {
    let { name, value } = e.target;
    if (e.target.type === "radio") {
      this.setState(
        { [name]: value === "Vegetarian" ? true : false },
        console.log(this.state)
      );
    } else {
      this.setState({ [name]: value }, console.log(this.state));
    }
  };

  submitHandler = e => {
    e.preventDefault();
    let obj = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    };

    this.setState({ pizzas: [...this.state.pizzas, obj] });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state.editPizza}
          changeHandler={this.changeHandler}
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          submit={this.submitHandler}
        />
        <PizzaList click={this.clickHandler} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
