import styles from '../../styles/Blog.module.scss';

export default function BlogPartnerships() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-text-wrap']}>

            <div className={styles['blog-title']}>{`Partnerships & Macro-Strategy`}</div>

            <p className={styles['blog-description']}>
                {`When you know what you do and how you do it, it's about filling in the gaps.  Where are your biggest opportunities and what does it take to get there?
                What's worth it for you to do, and what's worth it to find a partner for?  Reading your broader environment and picking the right goals upfront
                are key to making sure you make the right deals.'`}
            </p>

            <p className={styles['blog-description']}>
                {`While prioritization is covered in another section, here I go more into reading the macro-environment around a business and finding the right 
                partners for the right functions.`}
            </p>

        </div>

    </div>
)};




