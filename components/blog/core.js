import styles from '../../styles/Blog.module.scss';

export default function BlogCoreFunctions() {
return (

    <div className={styles['blog-component-container']}>
       
        <div className={styles['blog-text-wrap']}>
            
            <div className={styles['blog-title']}>{`Core Functions & Prioritizing Initiatives`}</div>
            
            <div className={styles['blog-subtitle']}><em>The Customer is Always Right</em></div>

            <p className={styles['blog-description']}>
                {`Identifying your Core Functions is relatively straightforward...  What are your users paying for? What functions support that value prop?
                Protecting your supply chain (via split-sourcing, 4th party management) is vital, then the focus is mostly making those processes efficient and effective.`}
            </p>

            <p className={styles['blog-description']}>
                {`What was your company founded for? What problems are you solving?  Are you good at that?  Would you be better at something else, 
                maybe with a little help? What other needs do your users have that you can meet?`}
                </p>
            <p className={styles['blog-description']}>
                {`Plans may be useless but planning is essential.  Imagine how processes might work, dream up black swans, and go with
                what makes the most all-around sense.`}
            </p>

            <p className={styles['blog-description']}>
                {`The next step is an ongoing, indefinite process: honing in on your value to your clients and what your people
                are good at.  Use Value Stream Maps to identify what tools, tasks, and other skills are required throughout your company, then use those to when planning for
                 the future, and to help employees drive the changes they want to see in their roles.`}</p>
                 <p className={styles['blog-description']}>
                 {`Get good, consistent feedback from clients, existing partners, and employees. 
                From there you'll know where to find partners, and where you have advantages that you can build on.`}
            </p>

        </div>

    </div>
)};

