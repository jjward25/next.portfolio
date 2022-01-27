import styles from '../../styles/Blog.module.scss';

export default function BlogOverview() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-title']}>Modern Business</div>
        
        <p className={styles['blog-description']}>{`I look at business in terms of three major questions:`}
            
             <ol className={styles['blog-bullet-wrap']}>
             <li className={styles['blog-bullet']}>(1) What problem needs solving? <em>(User Focus)</em></li>
             <li className={styles['blog-bullet']}>(2) Who and What will be involved? <em>{`(People & Tools)`}</em></li> 
             <li className={styles['blog-bullet']}>(3) How will we do it? <em>(Processes, Data, Partnerships)</em></li>
             </ol>
        </p>

        <p className={styles['blog-description']}>
            {`In 2022, as we see the longer-term effects of Covid taking shape. We see continued labor shortages caused by a mix of factors - 
            resignations, benefits, immigration supply - that are helping drive supply chain woes along with a mix of other factors.`}
        </p>

        <p className={styles['blog-description']}>
            {`These market forces, combined with existing automation patterns, are driving companies to focus on core functions and automate as much as possible.
            Obviously automation insulates companies from human capital costs, and focusing on core functions gives you less to worry about from a supply chain function.`}
        </p>

        <p className={styles['blog-description']}>
            {`2022's Digital Transformation trend is about insulation. Black Swans are inevitable, and focusing on core functions, automating anything monotonous, and making the right strategic partners is smart.
            Companies are narrowing their priorities and focusing on their most profitable niche, then making partnerships to maximize that value.`}
            
        <p className={styles['blog-description']}></p>
            {`Venture Capitalists are pouring money into PaaS and Saas companies that basically serve as an IoT gateway for their partners, facilitating 
            better communication and efficiency via better data management and visualization.  Maybe not monopolies, but companies are looking for their fiefdoms.`}
        </p>

        <p className={styles['blog-description']}>
            {`New companies aren't building out like Google into new services, they're doing something well and building that up with good partnerships. Big companies
            are figuring out how to stay competitive.`}
        </p>

        <p className={styles['blog-description']}>
            {`This site an excerise in modern business management focused on Change Management, Digital Transformation, Process Design, and overall 
            Organizational Flexibility, including methods `}<em>and</em>{`tools to achieve and maintain a modern organizational structure with employee-driven
            continuous improvement, horizontal mobility, modern tools, monitoring for skill supply and demand, and more.`}
        </p>

    </div>
)};

