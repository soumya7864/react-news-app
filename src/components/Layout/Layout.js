import classes from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import NewsContent from "../NewsContent/NewsContent";

const Layout = (props) => {
  return (
    <section className={classes.Layout}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.containerDiv}>
        <NewsContent />
      </div>
    </section>
  );
};

export default Layout;
