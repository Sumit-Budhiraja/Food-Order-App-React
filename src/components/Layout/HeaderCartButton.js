import React, { useContext,useEffect,useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";
//import {useState} from 'react';
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const cartCtx=useContext(CartContext);//this component will automatically be updated by react whenever the context is changed  
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

  const {items}=cartCtx;
  const btnClasses= `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer=setTimeout(()=>{//so that the bump class is removed after every 300 mSec
      setBtnIsHighlighted(false);
    },300);

    return ()=>{
      clearTimeout(timer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
