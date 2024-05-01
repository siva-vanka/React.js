import React from "react";
import { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "No",
  FavColors: [
    { color: "red", checked: false },
    { color: "blue", checked: false },
    { color: "green", checked: false },
    { color: "brown", checked: false },
  ],
};
const FormComponent2 = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (e,id) => {
    const { name, value,checked } = e.target;

    if(name==="Favcolors"){
        const newFavColors=[...formState.FavColors];
        newFavColors[id].checked=checked;

        setFormState({
            ...formState,
            FavColors:newFavColors
        })
    }
    else{
        setFormState({...formState,[name]:value})
    }

    
  };
  console.log(formState);

  const handleSubmit = (event,id) => {
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
          onChange={(e)=>handleChange(e)}
        />
        <br />
        <select
          name="country"
          value={formState.country}
          onChange={(e)=>handleChange(e)}
        >
          <option value="">selectCountry</option>
          <option value="India">India</option>
          <option value="Us">Us</option>
          <option value="China">China</option>
        </select>

        <br />
        <label>
          <input
            type="radio"
            name="isMarried"
            value="yes"
            onChange={(e)=>handleChange(e)}
            checked={formState.isMarried === "yes"}
          />
          yes
        </label>

        <label>
          <input
            type="radio"
            name="isMarried"
            value="No"
            onChange={(e)=>handleChange(e)}
            checked={formState.isMarried === "No"}
          />
          No
        </label>
        <br />

        {formState.FavColors.map((colorObj, id) => {
          return (
            <label key={id}>
              <input
                type="checkbox"
                name="Favcolors"
                checked={colorObj.checked}
                onChange={(e)=>handleChange(e,id)}
              />

              {colorObj.color}
            </label>
          );
        })}
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default FormComponent2;
