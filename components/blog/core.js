import styles from '../../styles/Blog.module.scss';

export default function BlogCoreFunctions() {
return (

    <div className={styles['blog-component-container']}>
       
        <div className={styles['blog-text-wrap']}>
            
            <div className={styles['blog-title']}>{`Core Functions & Prioritizing Initiatives`}</div>

            <p className={styles['blog-description']}>
                {`Identifying your Core Functions is relatively straightforward.  You know how your bread gets buttered, you can map out the critical paths for those 
                functions, and start by protecting those related suppliers (via split-sourcing, 4th party management) and making those processes efficient.`}
            </p>

            <p className={styles['blog-description']}>
                {`What was your company founded for? What problems are you solving?  Are you good at that?  Would you be better at something else, 
                maybe with a little help? Plans may be useless but planning is essential.  Keep an eye to the future, imagine how processes might work, and go with
                what makes the most all-around sense.`}
            </p>

            <p className={styles['blog-description']}>
                {`The next step is an ongoing process that can be done concurrently: honing in on your value to your clients and what your people
                are good at.  Use Value Stream Maps to identify what tools, tasks, and other skills required throughout your company, then use those to when planning for
                 the future, and to help employees drive the changes they want to see in their roles. From there you'll know where to find partners, and where you have 
                advantages that you can build on.`}
            </p>

        </div>

    </div>
)};

