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
                (SQL, Object-based, something more or less modern), and how it's used (funneled into algorithms, visualized in reports).`}
        </p>
        <p className={styles["blog-description"]}>
          {`The links here are less structured than on the Process tab.  These are mostly one-off scripts and examples of specific types of analyses using different tools,
            as opposed to case studies of a full process or detailed change management theories.`}
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
          alt="case study"
          href="https://github.com/jjward25/python.BoringStuff"
        >
          <li>{`Automate the Boring Stuff: A Collection of Useful Scripts`}</li>
        </a>

        <div className={styles["blog-subtitle"]} style={{ paddingLeft: "1vw" }}>
          {`Case Studies & Templates`}
        </div>
        <a
          className={styles["sidebar-link"]}
          target="_blank"
          rel="noreferrer"
          title="Real Time Analysis"
          alt="case study"
          href="https://public-docs2.s3.amazonaws.com/Real-Time+Data+Environment.png"
        >
          <li>{`Case Study: Realtime Data Analysis Architecture`}</li>
        </a>
      </div>
    </div>
  );
}
