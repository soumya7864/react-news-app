import classes from "./Sidebar.module.css";
import Card from "../../UI/Card/Card";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Sidebar = (props) => {
  let listActive;
  let horizontalActive;
  const isListView = useSelector((state) => state.cart.isListView);
  const isHorizontalView = useSelector((state) => state.cart.isHorizontalView);
  const dispatch = useDispatch();

  const feedbackHandler = (event) => {
    event.preventDefault();
    console.log("cliked feedback btn");
    dispatch(cartActions.changeIsFeedbackformVisible());
  };
  const listViewHandler = () => {
    dispatch(cartActions.changeToListView());
  };
  const horizontalViewHandler = () => {
    dispatch(cartActions.changeToHorizontalView());
  };
  if (isListView) {
    listActive = classes.listActive;
  } else if (isHorizontalView) {
    horizontalActive = classes.horizontalActive;
  }
  const listActiveCss = `${classes.formatListButton} ${listActive}`;
  const horizontalActiveCss = `${classes.SpeakerNotesIcon} ${horizontalActive}`;

  return (
    <div className={classes.Sidebar}>
      <div className={classes.paddingDiv} />
      <Card className={classes.readerSection}>
        <div className={classes.image} />
        <div className={classes.readerContainerDiv}>
          <h1>Hi Reader,</h1>
          <p>Here's Your News</p>
        </div>
      </Card>
      <Card className={classes.toggleSection}>
        <div></div>
        <h1>View Toggle</h1>
        <div className={classes.buttonGroup}>
          <div className={listActiveCss} onClick={listViewHandler}>
            <FormatListBulletedIcon style={{ fontSize: 25 }} />
          </div>
          <div className={horizontalActiveCss} onClick={horizontalViewHandler}>
            <SpeakerNotesIcon style={{ fontSize: 25 }} />
          </div>
        </div>
      </Card>
      <Card className={classes.feedbackSection}>
        <h1>Have a Feedback?</h1>
        <button type="submit" onClick={feedbackHandler}>
          We're Listening
        </button>
      </Card>
    </div>
  );
};

export default Sidebar;
