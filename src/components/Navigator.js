import React, { useState } from 'react';


const Tab = (props) => {

    const handleClick = () => {
        props.onClick(props.idx);
    }

    return (
        <div className={`tab ${props.className}`} onClick={handleClick}>
            <div className='tab__wrapper'>
                <svg className='tab__svg'>
                    <rect className='tab__rect' />
                </svg>
                <div className='tab__content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
};


const Navigator = (props) => {
    const [index, setIndex] = useState("1");

    const handleClick = (tabIndex) => {
        setIndex(tabIndex);
        props.onClick(tabIndex);
    }

    return (
        <div className='navigator'>
            <Tab className={`navigator__tab ${index === "1" ? "tab--active" : ""}`} idx="1" onClick={handleClick}> Experience</Tab>
            <Tab className={`navigator__tab ${index === "2" ? "tab--active" : ""}`} idx="2" onClick={handleClick}> Courses/Skills</Tab>
            <Tab className={`navigator__tab ${index === "3" ? "tab--active" : ""}`} idx="3" onClick={handleClick}> Projects</Tab>
            <Tab className={`navigator__tab ${index === "4" ? "tab--active" : ""}`} idx="4" onClick={handleClick}> More</Tab>
        </div>
    )
};

export default Navigator;
