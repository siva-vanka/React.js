import React, { useReducer } from "react";
import { formInitialState, formReducer } from "./formReducer";

const AddRestaurants = ({handleAddRestaurant}) => {
  const [state, dispatch] = useReducer(formReducer, formInitialState);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(state);
    handleAddRestaurant(state);
    dispatch({type:"RESET_FIELDS"})
}

  const handleChange = (e) => {
    let { name, value } = e.target;
    const payload = {
      name: name,
      value: value,
    };
    if (
      name === "number_of_votes" ||
      name === "price_starts_from" ||
      name === "rating"
    ) {
      payload.value = Number(value);
    }

    dispatch({
      type: "CHANGE_INPUT",
      payload: payload,
    });
  };

  const { name, type, rating, number_of_votes, price_starts_from, image } =
    state;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="addName"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="type" value="type" onChange={handleChange}>
            <option value="">select restaurant type</option>
            <option value="ethnic">ethnic</option>
            <option value="cafe">cafe</option>
            <option value="fast_food">fast food</option>
            <option value="continental">continental</option>
          </select>
        </div>
        <div>
          <select name="rating" onChange={handleChange}>
            <option value="">select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="number_of_votes"
            value={number_of_votes}
            placeholder="add no of votes"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="price_starts_from"
            value={price_starts_from}
            placeholder="price details"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="image"
            value={image}
            placeholder="image"
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="submit" value="AddRestaurant" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
