import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  // Add Reducers
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
