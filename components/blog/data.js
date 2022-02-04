import styles from '../../styles/Blog.module.scss';

export default function BlogData() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-text-wrap']}>
           
            <div className={styles['blog-title']}>Data Management</div>
            <div className={styles['blog-subtitle']}><em>Operations Support</em></div>

            <p className={styles['blog-description']}>
                {`It's good to have an idea upfront of how your data is collected (web forms, manual excel sheets, API connections, etc.), how it's stored 
                (SQL, Object-based, something more or less modern), and how it's used (funneled into algorithms, visualized in reports).`}
            </p>

            <p className={styles['blog-description']}>
                {`This section will have some architectural case studies, as well as sample scripts and visualizations.`}
            </p>

        </div>

    </div>
)};


