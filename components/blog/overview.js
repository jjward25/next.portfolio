import styles from '../../styles/Blog.module.scss';

export default function BlogOverview() {
return (

    <div className={styles['blog-component-container']}>
        
        <div className={styles['blog-title']}>Modern Business</div>
        
        <p className={styles['blog-description']}>
            {`This site a thought excerise on modern business management. I focus on Change Management, Digital Transformation, Process Design, and overall 
            Organizational Flexibility. I provide an explanation of methods, templates for specific initiatives (employee-driven continuous improvement, 
            monitoring for skill supply and demand), and suggestions for possible tools.`}
        </p>
        <div className={styles['separator']}></div>
        <p className={styles['blog-description']}>{`In general, I look at business in terms of three major questions:`}</p>
             <ol className={styles['blog-bullet-wrap']}>
                <li className={styles['blog-bullet']}>(1) What problem(s) need(s) solving? <em>(User Focus)</em></li>
                <li className={styles['blog-bullet']}>(2) Who will be involved? <em>{`(People & Partnerships)`}</em></li> 
                <li className={styles['blog-bullet']}>(3) How will we do it? <em>(Processes, Data, Tools)</em></li>
             </ol>

        <p className={styles['blog-description']}>
            {`The longer-term effects of Covid are taking shape. We see continued labor shortages caused by a mix of factors - 
            resignations, benefits, immigration - that are compounding supply chain woes.`}
        </p>

        <p className={styles['blog-description']}>
            {`These covid forces - combined with existing market forces driving automation, fear of black swans, and organizational flexiblity (horizontal mobility/chart-flattening, hybrid work) -
            are also driving companies to focus on core functions as much as possible. Automation insulates companies from human capital costs, and focusing on core functions gives you less to worry about in your supply chain.`}
        </p>

        <p className={styles['blog-description']}>
            {`2022's Digital Transformation trend is about insulation. Black Swans are inevitable, and focusing on core functions, automating anything monotonous, and making the right strategic partners is smart.
            Companies are narrowing their priorities and focusing on their most profitable niche, then making partnerships to maximize that value.`}
            
        <p className={styles['blog-description']}></p>
            {`Venture Capitalists are pouring money into PaaS and SaaS companies that basically serve as IoT gateways for their partners; facilitating 
            better communication and efficiency via better data management and visualization.  Maybe not monopolies, but companies are looking for their fiefdoms.`}
        </p>

        <p className={styles['blog-description']}>
            {`New companies aren't building out like Google into new services, they're doing something well and building that up with good partnerships. Big companies
            are figuring out how to stay competitive, and everyone is chasing insulation without the costs of vertical integration.`}
        </p>

    </div>
)};

