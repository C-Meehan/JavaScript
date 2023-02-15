import React, {useState} from 'react';

const Tabs = (props) => {

    const {allTabs, currentTab, setCurrentTab} = props;

    const tabStyle = (index) => {
        if (index === currentTab){
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTab(index);
    }

    return (
        <div style={{margin: "auto", width: "85%", textAlign: "left"}}>
            {
                allTabs.map((item, index) => (
                    <div className={`tab ${tabStyle(index)}`} onClick={(e) => setSelectedTab(index)}>
                        {item.label}
                    </div>
            ))
            }
        </div>
    )

    // const [currentContent, setCurrentContent] = useState(props.content);
    // return (
    //     <div>
    //         <button onClick={(event) => setCurrentContent(currentContent)}>{props.number}</button>
    //         <p>{currentContent}</p>
    //     </div>
    // )
}

export default Tabs;