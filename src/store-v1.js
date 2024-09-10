import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

/*store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState()); // { balance: 500, loan: 0, loanPurpose: "" }
store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState()); // { balance: 300, loan: 0, loanPurpose: "" }

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "Buy a Car." },
});
console.log(store.getState()); // { balance: 1300, loan: 1000, loanPurpose: "Buy a Car." }

store.dispatch({ type: "account/payLoan" });
console.log(store.getState()); // { balance: 300, loan: 0, loanPurpose: "" }
*/

//Account Action Creators
function desposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(desposit(500));
store.dispatch(withdraw(200));
console.log(store.getState()); // { balance: 300, loan: 0, loanPurpose: "" }

store.dispatch(requestLoan(1000, "Buy a Car."));
console.log(store.getState()); // { balance: 1300, loan: 1000, loanPurpose: "Buy a Car." }

store.dispatch(payLoan());
console.log(store.getState()); // { balance: 300, loan: 0, loanPurpose: "" }

//Customer Action Creators
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Yazan Alqaderi", "1234"));
console.log(store.getState()); // { balance: 300, loan: 0, loanPurpose: "", fullName: "Yazan Alqadery", nationalID: "1234", createdAt: "2021-09-07T14:00:00.000Z" }\
store.dispatch(updateName("Yazan Alqadery"));
store.dispatch(desposit(700));
console.log(store.getState()); // { balance: 500, loan: 0, loanPurpose: "", fullName: "Yazan Alqadery", nationalID: "1234", createdAt: "2021-09-07T14:00:00.000Z" }
