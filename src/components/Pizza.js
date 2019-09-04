import React from "react"

const Pizza = props => {
  return (
    <tr>
      <td>{props.pizzaInfo.topping}</td>
      <td>{props.pizzaInfo.size}</td>
      <td>{props.pizzaInfo.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={e => props.editPressed(e, props.pizzaInfo)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
