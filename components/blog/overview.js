import styles from "../../styles/Blog.module.scss";
import Image from "next/image";

export default function BlogOverview() {
  return (
    <div className={styles["blog-component-container"]}>
      <div className={styles["blog-text-wrap"]}>
        <div className={styles["blog-title"]}>Overview</div>

        <p className={styles["blog-description"]}>
          <em>{`This site is one big case study focused on change management, Digital Transformation, and overall 
                    organizational effectiveness.  Over time I'll add links to posts on case studies, project templates, and data visuals and scripts.`}</em>
        </p>
        <div className={styles["separator"]} />
        <p
          className={styles["blog-description"]}
        >{`For this purpose, let's look at business in terms of three major questions:`}</p>
        <ol className={styles["blog-bullet-wrap"]}>
          <li className={styles["blog-bullet"]}>
            (1) What problem(s) need(s) solving? <em>(User Focus)</em>
          </li>
          <li className={styles["blog-bullet"]}>
            (2) Who will be involved? <em>{`(People & Partnerships)`}</em>
          </li>
          <li className={styles["blog-bullet"]}>
            (3) How will we do it? <em>(Processes, Data, Tools)</em>
          </li>
        </ol>

        <p className={styles["blog-description"]}>
          {`2022's Digital Transformation trend is about insulation. Black Swans are inevitable, and focusing on core functions, automating anything monotonous, and 
                    making the right strategic partners is smart. Many companies are narrowing their priorities and focusing on their most profitable niche, then making 
                    partnerships to maximize that value.`}

          <p className={styles["blog-description"]}></p>
          {`Venture Capitalists are pouring money into PaaS and SaaS companies that basically serve as IoT gateways for their partners; facilitating 
                    better communication and efficiency via better data management and visualization.`}
        </p>

        <p className={styles["blog-description"]}>
          {`New companies aren't building out like Google into new services, they're doing something well and building that up with good partnerships. Big companies
                    are figuring out how to stay competitive, and everyone is chasing insulation without vertical integration. Maybe not monopolies, but companies are looking 
                    for their fiefdoms.`}
        </p>
        <p className={styles["blog-description"]}>
          {`In this blog we'll explore ways to automate different process and how to more broadly maintain organizational effectiveness with a culture that embraces change.`}
        </p>

        <div
          className={styles["blog-title"]}
        >{`Core Functions & Prioritizing Initiatives`}</div>

        <div className={styles["blog-subtitle"]}>
          <em>The Customer is Always Right</em>
        </div>

        <p className={styles["blog-description"]}>
          {`Identifying your Core Functions is relatively straightforward...  What are your users paying for? What functions support that value prop?
                    Protecting your supply chain (via split-sourcing, 4th party management) is vital, then the focus is mostly keeping those processes efficient and maintaining a user focus.`}
        </p>

        <p className={styles["blog-description"]}>
          {`What was your company founded for? What problems are you solving?  Are you good at that?  Would you be better at something else, 
                    maybe with a little help? What other needs do your users have that you can meet? Plans may be useless but planning is essential. Imagine how processes 
                    might work, take some time to dream, and go with what makes the most all-around sense.`}
        </p>

        <p className={styles["blog-description"]}>
          {`The next step is an ongoing, indefinite process: honing in on your value to your clients and what your people
                    are good at.  I suggest using Value Stream Maps to identify what tools, tasks, and other skills are required throughout your company, then use those to when 
                    planning for the future, and to help employees drive the changes they want to see in their roles.`}
        </p>

        <p className={styles["blog-description"]}>
          {`And always make sure you're geting good, consistent feedback from clients, existing partners, and employees. 
                    From there you'll know where to find partners, and where you have advantages that you can build on.`}
        </p>
      </div>

      <div className={styles["blog-right-sidebar"]}>
        <div className={styles["blog-overview-image"]}>
          <Image
            src="/ex-digital-transformation.png"
            alt="Modern Business"
            layout="fill"
          />
        </div>

        <div className={styles["blog-image-description"]}>
          New businesses have a laser focus on serving niche customer needs and
          growing from there, finding the right partners to help provide the
          value their customers want. Legacy businesses should identify part(s)
          of their business that can hold their own (frequent or painful problem
          being solved, competitive advantage, undeveloped market, etc.).
          <br /> <br />
          Smart companies have been focusing on the client and consumer forever,
          but bloat is easy. Digital Transformation (like Automation, RPA, Lean,
          Strategic Resiliency, etc.) is mostly about companies taking another
          look at things and narrowing focus.
        </div>
      </div>
    </div>
  );
}
