import React from "react"

const PizzaForm = props => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          name="topping"
          onChange={props.keyPressed}
          value={props.formInfo.topping}
        />
      </div>
      <div className="col">
        <select
          value={props.formInfo.size}
          className="form-control"
          name="size"
          onChange={props.keyPressed}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            name="vegetarian"
            onChange={props.keyPressed}
            checked={props.formInfo.vegetarian ? true : null}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            name="vegetarian"
            onChange={props.keyPressed}
            checked={!props.formInfo.vegetarian ? true : null}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <input
          type="text"
          name="id"
          onChange={props.keyPressed}
          value={props.formInfo.id}
        />
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={props.submitPressed}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default PizzaForm
