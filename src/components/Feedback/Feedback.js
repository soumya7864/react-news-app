import React, { useRef, useState } from "react";
import classes from "./Feedback.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AutoCompleteCountry from "./Autocomplete/Autocomplete";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import { cartActions } from "../../store/cart-slice";

const Feedback = (props) => {
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const dispatch = useDispatch();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  let isFeedbackFormVisible = useSelector(
    (state) => state.cart.isFeedbackFormVisible
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!emailInputRef.current.value.match(/\S+@\S+\.\S+/)) {
      setShowEmailError(true);
      return;
    }
    if (phoneInputRef.current.value.length !== 10) {
      setShowPhoneError(true);
      return;
    }
    setShowEmailError(false);
    setShowPhoneError(false);
    dispatch(cartActions.changeIsFeedbackformNotVisible());
  };

  const feedbackHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.changeIsFeedbackformNotVisible());
  };

  return (
    <React.Fragment>
      {isFeedbackFormVisible && (
        <Modal
          show={isFeedbackFormVisible}
          className={classes.modalContainer}
          modalClosed={feedbackHandler}
        >
          <div className={classes.cardContainer}>
            <Card className={classes.readerSection}>
              <div className={classes.image} />
              <div className={classes.readerContainerDiv}>
                <h1>Hi Reader,</h1>
                <p>Here's Your News</p>
              </div>
            </Card>
            <Card className={classes.feedbackSection}>
              <h1>Have a Feedback?</h1>
              <button type="submit" onClick={feedbackHandler}>
                We're Listening
              </button>
            </Card>
          </div>

          <section className={classes.Feedback}>
            <h1>Thank You so much for taking the time!</h1>
            <p>Please provide the below details.</p>
            <form onSubmit={onSubmitHandler}>
              <div className={classes.control}>
                <label htmlFor="fname">First Name</label>
                <input
                  type="fname"
                  id="fname"
                  required
                  placeholder="Enter First Name"
                  ref={firstNameInputRef}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="lname"
                  id="lname"
                  required
                  placeholder="Enter Last Name"
                  ref={lastNameInputRef}
                />
              </div>
              <div className={classes.controlAddress}>
                <label htmlFor="address">Address</label>
                <input
                  type="textarea"
                  id="address"
                  required
                  placeholder="Enter Address"
                  ref={addressInputRef}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="country">Country</label>
                <AutoCompleteCountry />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter Email"
                  ref={emailInputRef}
                />
                {showEmailError && (
                  <p style={{ color: "red" }}>Enter valid email</p>
                )}
              </div>

              <div className={classes.control}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  required
                  placeholder="Enter Phone Number"
                  ref={phoneInputRef}
                />
                {showPhoneError && (
                  <p style={{ color: "red" }}>Enter valid phone number</p>
                )}
              </div>

              <div className={classes.actions}>
                <button type="submit" className={classes.toggle}>
                  Submit Feedback
                </button>
              </div>
            </form>
          </section>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Feedback;
