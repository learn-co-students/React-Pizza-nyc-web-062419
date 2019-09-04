import React, { Component, Fragment } from "react"
import Header from "./components/Header"
import PizzaForm from "./components/PizzaForm"
import PizzaList from "./containers/PizzaList"
const defaultForm = { topping: "", size: "", vegetarian: "", id: "" }

class App extends Component {
  state = { allPizzas: [], form: defaultForm }

  componentDidMount() {
    fetch("http://localhost:3001/pizzas")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allPizzas: json })
      })
  }

  keyPressed = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }

  editPressed = (e, pizza) => {
    this.setState({ form: pizza })
  }

  submitPressed = e => {
    e.preventDefault()
    const newInfo = this.state.form
    if (newInfo.id === "") {
      fetch(`http://localhost:3001/pizzas/${newInfo.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topping: newInfo.topping,
          size: newInfo.size,
          vegetarian: newInfo.vegetarian
        })
      })
        .then(resp => resp.json())
        .then(json => {
          const newPizzas = [...this.state.allPizzas, json]
          this.setState({ allPizzas: newPizzas, form: defaultForm })
        })
    } else {
      let theOne = this.state.allPizzas.find(pizza => pizza.id === newInfo.id)
      const index = this.state.allPizzas.indexOf(theOne)
      const newPizzas = [
        this.state.allPizzas.slice(0, index),
        newInfo,
        this.state.allPizzas.slice(index + 1)
      ].flat()
      this.setState({ allPizzas: newPizzas, form: defaultForm })
      fetch(`http://localhost:3001/pizzas/${newInfo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          topping: newInfo.topping,
          size: newInfo.size,
          vegetarian: newInfo.vegetarian
        })
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          formInfo={this.state.form}
          keyPressed={this.keyPressed}
          submitPressed={this.submitPressed}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          editPressed={this.editPressed}
        />
      </Fragment>
    )
  }
}

export default App
