import { useRef, useState } from 'react';
import classes from './CheckOut.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;

const CheckOut = (props) => {
  const [formValidity, setFormValidity] = useState({name: true, street: true, postal: true, city: true})
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChar(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    })
    let formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
    if (formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      ciyt: enteredPostal
    })
  }
  const nameControlClasses = `${classes.control} ${formValidity.name ? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formValidity.street ? '' : classes.invalid}`;
  const postalControlClasses = `${classes.control} ${formValidity.postal ? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formValidity.city ? '' : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p>Enter valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' ref={streetInputRef} />
        {!formValidity.street && <p>Enter valid street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formValidity.postal && <p>Enter valid postal code (5 characters long)</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p>Enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  )
}

export default CheckOut;