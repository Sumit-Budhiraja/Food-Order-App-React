import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";
import {useState} from 'react';
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);//this component will automatically be updated by react whenever the context is changed  
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
