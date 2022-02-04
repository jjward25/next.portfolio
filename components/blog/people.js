import styles from '../../styles/Blog.module.scss';

export default function BlogPeople() {
return (

    <div className={styles['blog-component-container']}>

        <div className={styles['blog-text-wrap']}>

            <div className={styles['blog-title']}>People Management</div>
            <div className={styles['blog-subtitle']}><em>Communicating Change</em></div>

            <p className={styles['blog-description']}>
                {`Your people only use SQL, but do any of them have past experience with Python, or Tableau? Have they gone through a transformation process that another
                team is starting? Do you track that after hiring? How do you decide when to sunset a process or product?  And where do those resources go?`}
            </p>

            <p className={styles['blog-description']}>
                {`These questions are making your team uncomfortable? How can we communicate that their jobs are expected to change regularly going forward?`}
            </p>

            <p className={styles['blog-description']}>
                {`These links provide short approaches to the unique problems modern businesses face in managing people and culture in a rapidly 
                changing world.`}
            </p>


            <div className={styles['blog-title']}>{`Partnerships & Macro-Strategy`}</div>
            <div className={styles['blog-subtitle']}><em>Filling in the Gaps</em></div>

            <p className={styles['blog-description']}>
                {`When you know what you do (and want to do) and how you do it (and want to do it), it's about filling in the gaps.  Where are your 
                biggest opportunities and what does it take to get there? What's worth it for you to do, and what's worth it to find a partner for?`}
            </p>
            <p className={styles['blog-description']}>
                {`Reading your broader environment and picking the right goals upfront are key to making sure you pick the right partners for the right
                function.`}
            </p>

            <p className={styles['blog-description']}>
                {``}
            </p>

        </div>

    </div>
)};




