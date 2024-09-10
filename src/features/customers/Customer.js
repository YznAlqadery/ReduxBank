import { useSelector } from "react-redux";

function Customer() {
  // useSelector is a hook that allows you to extract data
  // from the Redux store state using a selector function.
  //Because this component is subscribed to the Redux store,
  // it will re-render whenever the store state changes.
  const customerName = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customerName}</h2>;
}

export default Customer;
