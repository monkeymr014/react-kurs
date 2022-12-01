import React from "react";
import AppContext from "../../contex";

const ArticlesViews = () => (
   <AppContext.Consumer>
      {(contex) => (
         
      <p>{contex}</p>
      ) }
   </AppContext.Consumer>

)

export default ArticlesViews