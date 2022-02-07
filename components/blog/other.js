import styles from '../../styles/Blog.module.scss';
import Image from 'next/image';
import Other from '../../public/other.json';

export default function BlogOther() {
return (

    <div className={styles['blog-component-container']}>

        <div className={styles['text-wrap']}>

            <div className={styles['blog-title']}>Other</div>

            <div className={styles['other-all-cards-wrap']}>
             
                {Other.map(card => {
                    return (

                        <div className={styles['other-card-wrap']}>
                    
                        <a href={card.link} target='_blank' rel='noreferrer' alt={card.title} title={card.title} className={styles['other-card-image']}>
                            <Image src={card.source} alt={card.title} layout="fill" />
                        </a>

                        <p className={styles['other-card-title']}>
                            {card.title}
                        </p>

                        <p className={styles['other-card-description']}>
                            {card.description}
                        </p>

                        <div className={styles['other-tags-wrap']}>
                            {card.tags.map(tag => {
                                return(
                                <p className={styles['other-skill-tag']}>{tag}</p>
                                )
                            })}
                        </div>
        
                    </div>

                    )
                })}

            </div>
        </div>

    </div>
)};




