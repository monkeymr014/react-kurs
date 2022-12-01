import React from "react";
import AppContext from "../../contex";
import List from "../../components/List/List"

const TwittersViews = () => (
   <AppContext.Consumer>
      {(contex) => (  
      <List items={contex.twitter}/>
      ) }
   </AppContext.Consumer>
)

export default TwittersViews