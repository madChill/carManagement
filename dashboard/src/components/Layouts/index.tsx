import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import classes from "./style.module.css";

const Layouts: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    return (<div className={classes.rootContainer}>
        <Sidebar />
        <div className={classes.mainContainer}>
            <Header />
            {children}
        </div>
    </div>)
}

export default Layouts