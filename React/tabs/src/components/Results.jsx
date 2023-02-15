import React from 'react'

const Results = (props) => {
    const {allTabs, currentTab} = props;

    return (
        <div className="results">
            {allTabs[currentTab].content}
        </div>
    )
}

export default Results