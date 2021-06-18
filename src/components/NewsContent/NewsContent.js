import classes from "./NewsContent.module.css";
import { useSelector } from "react-redux";
import CartItemList from "../CartItemList/CartItem";
import CartItemHorizontal from "../CartItemHorizontal/CartItem";
import Pagination from "../Pagination/Pagination";
import React, { useState } from "react";
import Feedback from "../Feedback/Feedback";

const NewsContent = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isListView = useSelector((state) => state.cart.isListView);
  const isHorizontalView = useSelector((state) => state.cart.isHorizontalView);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cartItems.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <React.Fragment>
      <section className={classes.NewsContent}>
        <div className={classes.cart}>
          {isListView && (
            <ul className={classes.listViewCart}>
              <CartItemList item={currentPosts} />
            </ul>
          )}
          {isHorizontalView && (
            <ul className={classes.horizontalViewCart}>
              <CartItemHorizontal item={currentPosts} />
            </ul>
          )}
        </div>
      </section>
      <div className={classes.paginate}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={cartItems.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Feedback />
    </React.Fragment>
  );
};

export default NewsContent;
