import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice.js";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  // useDispatch is a hook that gives you access to the dispatch function
  const dispatch = useDispatch();

  function handleClick() {
    // dispatch an action to create a new customer
    if (fullName && nationalId) dispatch(createCustomer(fullName, nationalId));
    else return; // do nothing if either field is empty
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
