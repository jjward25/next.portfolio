import styles from "../styles/Bizcard.module.scss";
import Image from "next/image";
import Skillbar from "./main-skillbar";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import BlogOverview from "./blog/overview";
import BlogProcess from "./blog/process";
import BlogData from "./blog/data";
import "react-window";

export default function Bizcard() {
  const [blog, setBlog] = useState([]);

  function handleClick(blogElement) {
    const blogNew = blogElement;
    setBlog({
      ...blog,
      ...blogNew,
    });
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
    console.log(blog);
  }

  return (
    <div className={styles["business-card"]}>
      <div className={styles["bc-photo-wrap"]}>
        <div className={styles["bc-gear-img"]}>
          <Image
            src="/icon-gear-clear.png"
            layout="fill"
            alt="gear"
            priority={true}
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["bc-photo-img"]}>
          <Image
            src="/selfie-glasses.png"
            layout="fill"
            alt="selfie"
            priority={true}
            objectFit="contain"
          ></Image>
        </div>
      </div>

      <div className={styles["bc-blog-wrap"]}>
        <div className={styles["bc-blog-title"]}>Joe Ward</div>
        <div className={styles["bc-blog-subtitle"]}>
          <em>Operations Specialist</em>
        </div>
      </div>

      <div className={styles["service-summary"]}>
        <div className={styles["service-tag"]}>{`Process Design`}</div>
        <div className={styles["service-tag"]}>{`Data & Analytics`}</div>
        <div className={styles["service-tag"]}>{`Operational Efficiency`}</div>
        <div className={styles["service-tag"]}>{`Change Management`}</div>
        <div className={styles["service-tag"]}>{`Strategy & Tools`}</div>
        <div className={styles["service-tag"]}>{`Digital Transformation`}</div>
      </div>

      <div className={styles["personal-statement"]}>
        {`I began my career in a rotational program that exposed me to Lean, SQL, Tableau, formal project management practices, and how people react when they think you’re telling them how to do their job.`}
      </div>
      <div className={styles["personal-statement"]}>
        {`I also love keeping up with science and tech advancements, business and political theory, and generally look for new experiences in life - from running with the bulls in Pamplona to homeless outreach in Penn Station.`}
      </div>
      <div className={styles["personal-statement"]}>
        {`To wit, I can code but I'm not a coder, instead I enjoy sitting at the cross-section of technology and operations, finding unique solutions for unique problems, and helping all kinds of teams reach their maximum potential.`}
      </div>

      <Skillbar />

      <div className={styles["bc-mobile-blog-wrap"]}>
        <Menu>
          <Menu.Button className={styles["bc-blog-button"]}>
            Blog Menu
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className={styles["bc-block-link-wrap"]}>
              <Menu.Item
                className={styles["bc-blog-link"]}
                onClick={() => handleClick(<BlogOverview />)}
              >
                <li>Overview</li>
              </Menu.Item>
              <Menu.Item
                className={styles["bc-blog-link"]}
                onClick={() => handleClick(<BlogProcess />)}
              >
                <li>{`Processes & Tools`}</li>
              </Menu.Item>
              <Menu.Item
                className={styles["bc-blog-link"]}
                onClick={() => handleClick(<BlogData />)}
              >
                <li>{`Data & Analytics`}</li>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className={styles["mobile-blog-container"]}>{blog}</div>
    </div>
  );
}
