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
                {`The next step is an ongoing process that can be done concurrently: honing in on your value to your clients and what your people
                are good at. From there you'll know where to find partners, and where you have advantages that you can build on.`}
            </p>

        </div>

    </div>
)};

