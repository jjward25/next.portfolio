import styles from "../../styles/Blog.module.scss";
import Image from "next/image";

export default function BlogProcess() {
  return (
    <div className={styles["blog-component-container"]}>
      <div className={styles["blog-text-wrap"]}>
        <div className={styles["blog-title"]}>{`Process Design & Tooling`}</div>
        <div className={styles["blog-subtitle"]}>
          <em>Continuous Improvement via Operational Awareness</em>
        </div>

        <p className={styles["blog-description"]}>
          {`The goal now is to be as nimble as possible, quick to adapt and ideally able to drive change.  This requires in-depth knowledge of 
                what you do, and what you don't do.  This page examines one way of knowing what we need to know about our businesses and teams.`}
        </p>

        <div className={styles["separator"]} />

        <p className={styles["blog-description"]}>
          <b>{`1.   Create Detailed Value Stream Maps (VSM)`}</b>
          {` for every team and every process.  Each VSM should capture a full process, and every process a 
                team performs should be mapped. These VSMs will give us several key data points towards operational excellence:`}
        </p>

        <li
          className={styles["blog-list-item"]}
        >{`A list of all tasks that teams perform, broken down into subtasks, illustrated in workflows that help identify KPIs.`}</li>

        <li
          className={styles["blog-list-item"]}
        >{`Currest State metrics: Widget times that allow us to see which teams are performing similar tasks better and facilitate 
            a sharing of best practices or tools (or KPIs).  We can create Process-Task Matrixes so teams that perform similar work can set up time to consult with each other
            on anything at anytime.`}</li>

        <li
          className={styles["blog-list-item"]}
        >{`Institutional knowledge.  Track which employees work on core functions, innovations, 
            procurement, and any other company-specific knowledge you want to keep track of.`}</li>

        <div className={styles["process-vsm-wrap"]}>
          <a className={styles["process-vsm"]}>
            <Image
              src="/process-vsm.png"
              layout="fill"
              alt="Value Stream Map"
            />
          </a>
          <a className={styles["process-vsm-object"]}>
            <Image
              src="/process-vsm-object.png"
              layout="fill"
              alt="VSM Object"
            />
          </a>
        </div>

        <p className={styles["blog-description"]}>
          {`That's basically it.  Value Stream Maps are an extremely under-leveraged tool that can even help in interviews.  You can use them to
                talk candidates through the existing role, what they're familiar with, what they'd change... But operations are nebulous, it's hard data
                to capture and even harder to maintain and make use of.  That's why what's important in the figure above isn't the visual map, it's the structured data 
                below each step.`}
        </p>
        <p className={styles["blog-description"]}>
          {`In this example I tried to make a widely transferrable object model based on a simple ecommerce transaction.  By using object notation when defining
                what you want to measure about your operations, you can make your data scalable and flexible.  This data can be visualized in 
                cleaner front-end dashboards via well structured and permissioned APIs for continuous operational monitoring.`}
        </p>
        <p className={styles["blog-description"]}>
          {`This data can be structured in Process-Task Matrixes that map out where we have syngergies or gaps in tasks and skills. Human Resources
                can combine this data with their existing knowledge from resumes and interviews so we can find more leaders internally. Procurement
                and Strategy teams will also help find the right external partners based on our needs.`}
        </p>
        <p className={styles["blog-description"]}>
          {`Most importantly, sitting down with teams and mapping things out WITH them gives employees the chance to point out their bottlenecks and 
                pain points and how they view things.  The biggest impediment to change is fear and comfort.  We can fight that with clarity and excitement. Let them own their own Process Maps, 
                and make it a part of quarterly goal setting to review the process with managers (or even broader groups) and commit to improvements when possible.`}
        </p>
        <p className={styles["blog-description"]}>
          {`If you listen to their problems and keep them informed about all the possible high level directions the company could take, then they can
          automate or adapt their roles without fear. They can do it with a mind towards what will make them most valuable to the future state of the company.  Those interested can request
          tuition payment for upskilling and everyone gets set up for success.`}
        </p>
        <p className={styles["blog-description"]}>
          {`Doing quarterly VSM reviews is good practice for enabling a culture of change. Asking employees what they like and don’t 
                like about their jobs is valuable information, and giving them the power to influence that change makes is worth everyone’s 
                time.`}
        </p>
        <p className={styles["blog-description"]}>
          {`By pairing automation with generous skill development budgets and well-communicated dream-scenarios, you will empower 
                interested employees to drive their roles towards your dream future.  And by replacing automated work with new, future-focused work, 
                the trade is equitable to everyone involved.`}
        </p>

        <div className={styles["separator"]} />
        <div className={styles["blog-subtitle"]}>
          <em>Summary of Approach</em>
        </div>

        <p className={styles["blog-description"]}>
          {`Instead of a central team of Lean consultants descending on teams, make VSM reviews a part of normal quarterly manager-employee
                discussions.  Being consistent with these reviews and having them come from their own teams will make them more meaningful to employees.`}
        </p>
        <p className={styles["blog-description"]}>
          {`This also keeps changes and strategies more at the product/team level, letting people make decisions for themselves with broader corporate strategy in mind, and possibly with input 
           input from a central team that reviews well-structured organization data for opportunities.`}
        </p>
      </div>

      <div className={styles["blog-right-sidebar"]}>
        <div
          className={styles["blog-subtitle"]}
          style={{ paddingLeft: "1vw" }}
        >{`Case Studies`}</div>

        <a
          className={styles["sidebar-link"]}
          target="_blank"
          rel="noreferrer"
          title="Resource ReAllocation"
          alt="case study"
          href="https://public-docs2.s3.amazonaws.com/Case+Study+-+Resource+ReAssignment.pdf"
        >
          <li>{`Re-Allocating Project Resources`}</li>
        </a>
      </div>
    </div>
  );
}
