import React from "react";
import { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "No",
};
const FormComponent = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };
  console.log(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          onChange={handleChange}
        />

        <select
          name="country"
          value={formState.country}
          onChange={handleChange}
        >
          <option value="">selectCountry</option>
          <option value="India">India</option>
          <option value="Us">Us</option>
          <option value="China">China</option>
        </select>
        <label>
          <input
            type="radio"
            name="isMarried"
            value="yes"
            onChange={handleChange}
            checked={formState.isMarried === "yes"}
          />
          yes
        </label>

        <label>
          <input
            type="radio"
            name="isMarried"
            value="No"
            onChange={handleChange}
            checked={formState.isMarried === "No"}
          />
          No
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default FormComponent;
