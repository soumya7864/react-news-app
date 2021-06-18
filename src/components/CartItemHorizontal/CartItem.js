import { useDispatch } from "react-redux";
import Card from "../../UI/Card/Card";
import React, { useState } from "react";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import ClearIcon from "@material-ui/icons/Clear";
import Modal from "../../UI/Modal/Modal";
import Iframe from "../../UI/IFrame/IFrame";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [linkSrc, setLinkSrc] = useState("");
  const [isLinkVisible, setIsLinkVisible] = useState(false);

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const isLinkVisibleHandler = (link) => {
    setIsLinkVisible(true);
    console.log("link1", linkSrc);
    setLinkSrc(link);
    console.log("link2", linkSrc);
  };
  const closeModalHandler = (link) => {
    setIsLinkVisible(false);
  };

  return (
    <React.Fragment>
      <Modal
        id="myModal"
        show={isLinkVisible}
        modalClosed={closeModalHandler}
        className={classes.modalContainer}
      >
        <div onClick={closeModalHandler}>
          <Iframe src={linkSrc} />
        </div>
      </Modal>
      <div className={classes.container}>
        {props.item.map((item) => (
          <div key={item.id} className={classes.containerDiv}>
            <Card className={classes.item}>
              <div className={classes.innerContainer}>
                <div
                  onClick={removeItemHandler.bind(null, item.id)}
                  className={classes.removeIcon}
                >
                  <ClearIcon style={{ color: "red" }} />
                </div>
                <div
                  className={classes.newsContainer}
                  onClick={isLinkVisibleHandler.bind(null, item.link)}
                >
                  <h2>{item.title}</h2>
                  <h1>
                    {item.summary === undefined
                      ? "Consectetur adipiscing elit. Praesent elementum, nulla in vulputate consectetur, tellus quam dictum augue, in aliquet enim mi nec augue. Nulla facilisi"
                      : item.summary}
                  </h1>
                  <p>{item.published}</p>
                </div>
              </div>
              <div
                className={classes.image}
                onClick={isLinkVisibleHandler.bind(null, item.link)}
              />
            </Card>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CartItem;
