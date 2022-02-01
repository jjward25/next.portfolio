import styles from '../../styles/Blog.module.scss';

export default function BlogProcess() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-text-wrap']}>

            <div className={styles['blog-title']}>{`Process Design & Tooling`}</div>

            <p className={styles['blog-description']}>
                {`A major goal is to be as nimble as possible, able to adopt and ideally drive change.  This requires in-depth knowledge of 
                what you do, and what you don't do.`}
            </p>

            <p className={styles['blog-description']}>
                {`The templates and case studies in this section cover operations monitoring, designing scalable processes and org charts, and responsible automation.`}
            </p>

        </div>

    </div>
)};




