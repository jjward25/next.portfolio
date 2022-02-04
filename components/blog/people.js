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
                
            </p>

        </div>

    </div>
)};




