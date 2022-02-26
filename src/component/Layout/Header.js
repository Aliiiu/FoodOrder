import { Fragment } from "react/cjs/react.production.min";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className= { classes.header }>
                <h1> React Meals </h1>
                <HeaderCardButton onClick={ props.onShowCart }/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table full of food" />
            </div>
        </Fragment>
    )
}

export default Header;