import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerList } from "../../actions/customerList";
import { UserNavCard } from "./UserNavCard";
import ErrorBoundary from "../ErrorBoundary";
import Logout from "./Logout";

export const UserNav = ({
  user,
  pianos,
}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(customerList(user.id))
    // dispatch(getuserId(user))
  },[])
  const customers = useSelector((state) => state.customers)
  const currentAppointment = useSelector((state) => state.currentAppointment)
  const currentCustomerId = useSelector((state) => state.currentCustomer)
  const currentCustomer = customers.find((customer)=>customer.id === currentCustomerId)
  const numberOfPianos = () => {
    if(pianos.length > 0) {
      return (
     <p>Pianos in Database: {pianos.length}</p>
     )
    }
  }
  const userRender = <div className="user-nav"><h1>Welcome {user.name} </h1>
  <Logout /></div>

  return <ErrorBoundary>{userRender}</ErrorBoundary>;
};
