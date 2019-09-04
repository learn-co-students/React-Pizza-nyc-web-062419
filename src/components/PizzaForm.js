import React from "react";

class PizzaForm extends React.Component {
  render() {
    return (
      <div className="form-row">
        <div className="col-5">
          <input
            name="topping"
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={
              //Pizza Topping Should Go Here
              this.props.topping
            }
            onChange={this.props.changeHandler}
          />
        </div>
        <div className="col">
          <select
            value={this.props.size}
            className="form-control"
            name="size"
            onChange={this.props.changeHandler}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={this.props.vegetarian === true}
              onChange={this.props.changeHandler}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={this.props.vegetarian === false}
              onChange={this.props.changeHandler}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.props.submit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PizzaForm;
