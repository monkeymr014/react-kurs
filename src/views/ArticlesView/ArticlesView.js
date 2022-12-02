import React from "react";
import AppContext from "../../contex";
import List from "../../components/List/List"

const ArticlesViews = () => (
   <AppContext.Consumer>
      {(contex) => (
         <List items={contex.article} />
      )}
   </AppContext.Consumer>
)

export default ArticlesViews