import styles from "../styles/Menubar.module.scss";
import Image from "next/image";

export default function Menubar() {
  const text = "Joseph.Ward@Outlook.com";
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Joseph.Ward@Outlook.com copied to clipboard");
  };

  return (
    <div className={styles["menubar-menu"]}>
      <p className={styles["bc-link"]}>
        <a
          href="https://www.linkedin.com/in/joe-ward1/"
          title="LinkedIn"
          alt="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-linkedin-blue.png"
            alt="LinkedIn"
            layout="fill"
          ></Image>
        </a>
        LinkedIn
      </p>

      <p className={styles["bc-link"]}>
        <a
          href="https://github.com/jjward25"
          title="Github"
          alt="Github"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-github-white.png"
            alt="Github"
            layout="fill"
          ></Image>
        </a>
        Github
      </p>

      <p className={styles["bc-link"]}>
        <a
          href="https://public-docs2.s3.amazonaws.com/Joe+Ward.pdf"
          title="Resume"
          alt="Resume"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image src="/icon-cv-white.png" alt="Resume" layout="fill"></Image>
        </a>
        Resume
      </p>

      <p className={styles["bc-link"]} id="email" onClick={copy}>
        <a
          alt="Email"
          target="_blank"
          rel="noreferrer"
          title="Copy E-Mail"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-email-white.png"
            alt="Email Me"
            layout="fill"
          ></Image>
        </a>
        E-Mail
      </p>

      <p className={styles["bc-link-desktop"]}>
        <a
          href="https://www.linkedin.com/in/joe-ward1/"
          title="LinkedIn"
          alt="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-linkedin-blue.png"
            alt="LinkedIn"
            layout="fill"
          ></Image>
        </a>
        LinkedIn
      </p>
      <p className={styles["bc-link-desktop"]}>
        <a
          href="https://github.com/jjward25"
          title="Github"
          alt="Github"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-github-white.png"
            alt="Github"
            layout="fill"
          ></Image>
        </a>
        Github
      </p>

      <p className={styles["bc-link-desktop"]}>
        <a
          href="https://public-docs2.s3.amazonaws.com/Joe+Ward.pdf"
          title="Resume"
          alt="Resume"
          target="_blank"
          rel="noreferrer"
          className={styles["bc-work-icon"]}
        >
          <Image src="/icon-cv-white.png" alt="Resume" layout="fill"></Image>
        </a>
        Resume
      </p>
      <p className={styles["bc-link-desktop"]} onClick={copy}>
        <a
          alt="Email"
          target="_blank"
          rel="noreferrer"
          title="Copy E-Mail"
          className={styles["bc-work-icon"]}
        >
          <Image
            src="/icon-email-white.png"
            alt="Email Me"
            layout="fill"
          ></Image>
        </a>
        Copy E-mail
      </p>
    </div>
  );
}
