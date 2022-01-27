import styles from '../styles/Blog.module.scss';
import Bizcard from './main-bizcard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import BlogOverview from './blog/overview';
import BlogCoreFunctions from './blog/core'
import BlogPeople from './blog/people';
import BlogProcess from './blog/process';
import BlogData from './blog/data';
import BlogPartnerships from './blog/partnerships';
import BlogAll from './blog/all';
import BlogOther from './blog/other';

export default function Blog() {
return (


    <div className={styles['blog-wrap']}>
        
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>

            <TabList>
                <Tab>Overview</Tab>
                <Tab>{`Core Functions & Prioritization`}</Tab>
                <Tab>{`People Management`}</Tab>
                <Tab>{`Processes & Tools`}</Tab>
                <Tab>{`Data Management`}</Tab>
                <Tab>{`Partnerships & Strategy`}</Tab>
                <Tab>{`All Initiatives`}</Tab>
                <Tab>{`Other`}</Tab>
            </TabList>

            <TabPanel><BlogOverview/></TabPanel>

            <TabPanel><BlogCoreFunctions/></TabPanel>

            <TabPanel><BlogPeople/></TabPanel>

            <TabPanel><BlogProcess/></TabPanel>

            <TabPanel><BlogData/></TabPanel>

            <TabPanel><BlogPartnerships/></TabPanel>

            <TabPanel><BlogAll/></TabPanel>

            <TabPanel><BlogOther/></TabPanel>

        </Tabs>

    </div>
)};




