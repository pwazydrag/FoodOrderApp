import React from "react";

import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodOrderApp</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of food"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
