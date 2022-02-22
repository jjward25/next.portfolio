import styles from "../../styles/Blog.module.scss";
import Image from "next/image";
import Other from "../../public/other.json";

export default function BlogOverview() {
  return (
    <div className={styles["blog-component-container"]}>
      <div className={styles["blog-text-wrap"]}>
        <div className={styles["desktop-title"]}>About Me</div>
        <p className={styles["desktop-summary"]}>
          {`From running with the bulls in Pamplona to homeless outreach in Penn Station, I've always valued time and sought new experiences. My career began in 
          a rotational program that exposed me to Lean, SQL, Tableau, formal project management, and how people react when they think you’re telling them how to 
          do their job.`}
        </p>
        <p className={styles["desktop-summary"]} style={{ marginTop: "1vh" }}>
          {`I've continued to learn and listen.  I can code but I'm not a coder; instead I enjoy sitting at the cross-section of technology and operations, finding unique solutions for unique 
          problems, and helping all kinds of teams reach their maximum potential.`}
        </p>

        <div className={styles["blog-title"]}>Site Overview</div>

        <p className={styles["blog-description"]}>
          <em>{`This site is one big case study on operational efficiency, change management, analytics and task automation.  
          Over time I'll add case studies, templates, data visuals and python scripts to the relevant pages.`}</em>
        </p>
        <div className={styles["separator"]} />
        <p
          className={styles["blog-description"]}
        >{`For the purposes of this site, let's think of business operations in terms of three major questions:`}</p>
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
          {`This blog is all about #3. What problem you're solving is not the question: the question here is how can your company solve the problem(s) in the best way(s), 
          staff appropriately, with the right tools, while building the best relationships and innovating and iterating continuously?`}
        </p>

        <p className={styles["blog-description"]}>
          {`Every modern business leader has read countless stories of failures to innovate, and heard countless mutations of Silicon Valley's favorite mission statement ("fail fast"). 
          In this blog we'll explore my operational approach, which is focused on achieving a level of internal awareness and leveraging that information in 
          new and increased ways.`}
        </p>

        <p className={styles["blog-description"]}>
          {`The Processes tab will explore ways to develop detailed organizational awareness and foster employee-driven change.  The Data tab explores ways to
          automate specific tasks and other sample analyses.  Other displays side-projects and unrelated blog posts.`}
        </p>
      </div>

      <div className={styles["blog-right-sidebar"]}>
        <div className={styles["blog-subtitle"]} style={{ paddingLeft: "1vw" }}>
          {`Personal Projects`}
        </div>

        <div className={styles["other-all-cards-wrap"]}>
          {Other.map((card) => {
            return (
              <div className={styles["other-card-wrap"]} key={card.index}>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  alt={card.title}
                  title={card.title}
                  className={styles["other-card-image"]}
                >
                  <Image src={card.source} alt={card.title} layout="fill" />
                </a>

                <p className={styles["other-card-title"]}>{card.title}</p>

                <p className={styles["other-card-description"]}>
                  {card.description}
                </p>

                <div className={styles["other-tags-wrap"]}>
                  {card.tags.map((tag) => {
                    return (
                      <p className={styles["other-skill-tag"]} key={tag.index}>
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
