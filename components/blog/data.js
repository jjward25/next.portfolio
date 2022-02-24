import styles from "../../styles/Blog.module.scss";

export default function BlogData() {
  return (
    <div className={styles["blog-component-container"]}>
      <div className={styles["blog-text-wrap"]}>
        <div className={styles["blog-title"]}>Data Management</div>
        <div className={styles["blog-subtitle"]}>
          <em>Operations Support</em>
        </div>

        <p className={styles["blog-description"]}>
          {`It's good to have an idea upfront of how your data is collected (web forms, manual excel sheets, API connections, etc.), how it's stored 
                (SQL, Object-based, something less modern), and how it's used (funneled into algorithms, visualized in reports, public releases).`}
        </p>
        <p className={styles["blog-description"]}>
          {`These variables all impact what you're able to do, but more importantly, what you should focus on doing right now.  If you're manually inputting the same data in multiple 
          places, or using manual forms (with or especially without digital data back-ups), or don't have KPIs supported by detailed process mapping, then you have some immediate 
          opportunities to consider.`}
        </p>
        <p className={styles["blog-description"]}>
          {`That said, the links on this page will mostly be one-off scripts for automating tasks and examples of specific types of analyses using different tools,
            as opposed to the case studies on broader processes and theories you'll find on the Process page.`}
        </p>
      </div>

      <div className={styles["blog-right-sidebar"]}>
        <div className={styles["blog-subtitle"]} style={{ paddingLeft: "1vw" }}>
          {`Scripts & Analyses`}
        </div>
        <a
          className={styles["sidebar-link"]}
          target="_blank"
          rel="noreferrer"
          title="Automate the Boring Stuff"
          alt="pythonScripts"
          href="https://github.com/jjward25/python.BoringStuff"
        >
          <li>{`Automate the Boring Stuff: A Collection of Useful Scripts`}</li>
        </a>
        <a
          className={styles["sidebar-link"]}
          target="_blank"
          rel="noreferrer"
          title="jsonifyExcel"
          alt="jsonifyScript"
          href="https://github.com/jjward25/python.other/tree/main/jsonifyExcel"
        >
          <li>{`Converting an excel table into a multi-level object with python`}</li>
        </a>

        <div className={styles["blog-subtitle"]} style={{ paddingLeft: "1vw" }}>
          {`Case Studies`}
        </div>
        <a
          className={styles["sidebar-link"]}
          target="_blank"
          rel="noreferrer"
          title="Real Time Analysis"
          alt="case study"
          href="https://public-docs2.s3.amazonaws.com/Real-Time+Data+Environment.png"
        >
          <li>{`Realtime Data Analysis Architecture`}</li>
        </a>
      </div>
    </div>
  );
}
