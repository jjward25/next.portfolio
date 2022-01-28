import styles from '../../styles/Blog.module.scss';

export default function BlogData() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-text-wrap']}>
           
            <div className={styles['blog-title']}>Data Management</div>

            <p className={styles['blog-description']}>
                {`It's good to have an idea upfront of how your data will be collected (web forms, manual excel sheets, API connections, etc.), how it will be stored 
                (SQL, Object-based, something more or less modern), and how it will be used (funneled into algorithms, visualized in reports).`}
            </p>

        </div>

    </div>
)};


