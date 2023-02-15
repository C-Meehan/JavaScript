import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {

  const tabArray = [
    { label: "Tab 1", content: "This is the first tab"},
    { label: "Tab 2", content: "Congrats this is the second tab"},
    { label: "Tab 3", content: "Third tab has been selected"},
    { label: "Tab 4", content: "You made it to the fourth tab"},
  ];

  const [allTabs, setAllTabs] = useState(tabArray);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="App">
      <Tabs allTabs={allTabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <Results allTabs={allTabs} currentTab={currentTab}/>
    </div>
  );
  // return (
  //   <div className="App">
  //     <div className="main">
  //       <Tabs number={"Tab 1"} content={"This is the first tab"}/>
  //       <Tabs number={"Tab 2"} content={"Congrats this is the second tab"}/>
  //       <Tabs number={"Tab 3"} content={"Third tab has been selected"}/>
  //   </div>
  //     </div>
  // );
}

export default App;
