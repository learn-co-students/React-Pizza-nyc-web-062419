import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  render() {
    let pizza = this.props.pizzas.map(pizza => (
      <Pizza pizza={pizza} key={pizza.id} click={this.props.click} />
    ));
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            pizza
          }
        </tbody>
      </table>
    );
  }
}

export default PizzaList;
