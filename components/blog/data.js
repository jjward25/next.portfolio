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
                {`This will have an overview of higher-level best practices, and a few examples of reports and analyses.`}
            </p>

        </div>

    </div>
)};


