import styles from '../styles/Blog.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BlogOverview from './blog/overview';
import BlogPeople from './blog/people';
import BlogProcess from './blog/process';
import BlogData from './blog/data';
import BlogOther from './blog/other';

export default function Blog() {
return (


    <div className={styles['blog-wrap']}>
        
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>

            <TabList>
                <Tab>Overview</Tab>
                <Tab>{`Processes & Tools`}</Tab>
                <Tab>{`People & Partners`}</Tab>
                <Tab>{`Data & Analytics`}</Tab>
                <Tab><div className={styles['tab-other']}>{`Other`}</div></Tab>
            </TabList>

            <TabPanel><BlogOverview/></TabPanel>

            <TabPanel><BlogProcess/></TabPanel>

            <TabPanel><BlogPeople/></TabPanel>

            <TabPanel><BlogData/></TabPanel>

            <TabPanel><BlogOther/></TabPanel>

        </Tabs>

    </div>
)};




