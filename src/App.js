import React from "react";
import TOPUI from "./UIs/TopUI";
import Contents from "./UIs/Contents";

let isMobile = false;
if (window.innerWidth <= 768) isMobile = true; // 모바일인지 확인

function App() {
  return (
    <div className="App">
      <TOPUI isMobile={isMobile}/>
      <Contents isMobile={isMobile}/>
    </div>
  );
}

export default App;
