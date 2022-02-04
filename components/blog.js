import styles from '../styles/Blog.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BlogOverview from './blog/overview';
import BlogCoreFunctions from './blog/core'
import BlogPeople from './blog/people';
import BlogProcess from './blog/process';
import BlogData from './blog/data';
import BlogPartnerships from './blog/partnerships';
import BlogOther from './blog/other';

export default function Blog() {
return (


    <div className={styles['blog-wrap']}>
        
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>

            <TabList>
                <Tab>Overview</Tab>
                <Tab>{`Core Functions & Prioritization`}</Tab>
                <Tab>{`Processes & Tools`}</Tab>
                <Tab>{`People Management`}</Tab>
                <Tab>{`Partnerships & Strategy`}</Tab>
                <Tab>{`Data Management`}</Tab>
                <Tab><div className={styles['tab-other']}>{`Other`}</div></Tab>
            </TabList>

            <TabPanel><BlogOverview/></TabPanel>

            <TabPanel><BlogCoreFunctions/></TabPanel>

            <TabPanel><BlogProcess/></TabPanel>

            <TabPanel><BlogPeople/></TabPanel>

            <TabPanel><BlogPartnerships/></TabPanel>

            <TabPanel><BlogData/></TabPanel>

            <TabPanel><BlogOther/></TabPanel>

        </Tabs>

    </div>
)};




