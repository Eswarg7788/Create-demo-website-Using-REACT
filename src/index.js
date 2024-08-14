import React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header.js';
import Footer from './footer.js';
import Content from './content.js';
function Website(){
  return(
     <div>
      <Header/>
      <Content/>
      <Footer/>
     </div>
  );
}
ReactDOM.render(<Website/>,document.getElementById("root"));