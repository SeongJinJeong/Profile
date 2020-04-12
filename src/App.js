import React from "react";
import TOPUI from "./UIs/TopUI";
import Contents from "./UIs/Contents";

const Menu = ["TimeLine", "Skills", "Nexon", "Laftel", "Facebook"];

function App() {
  return (
    <div className="App">
      <TOPUI menu={Menu} />
      <Contents menu={Menu} />
    </div>
  );
}

export default App;
