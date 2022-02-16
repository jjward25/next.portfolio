import styles from "../styles/Blog.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BlogOverview from "./blog/overview";
import BlogProcess from "./blog/process";
import BlogData from "./blog/data";

export default function Blog() {
  return (
    <div className={styles["blog-wrap"]}>
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>{`Processes & Tools`}</Tab>
          <Tab>{`Data & Analytics`}</Tab>
        </TabList>

        <TabPanel>
          <BlogOverview />
        </TabPanel>

        <TabPanel>
          <BlogProcess />
        </TabPanel>

        <TabPanel>
          <BlogData />
        </TabPanel>
      </Tabs>
    </div>
  );
}
