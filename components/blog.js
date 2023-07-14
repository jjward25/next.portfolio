import styles from "../styles/Blog.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BlogOverview from "./blog/overview";
import BlogProcess from "./blog/process";
import BlogData from "./blog/data";

export default function Blog() {
  return (
    <div className={styles["blog-wrap"]}>
      <div defaultIndex={0} onSelect={(index) => console.log(index)}>
        <div>
          <BlogOverview />
        </div>
    
      </div>
    </div>
  );
}
