import React from "react";
import AppContext from "../../contex";
import List from "../../components/List/List"

const NotesViews = () => (
   <AppContext.Consumer>
      {(contex) => (
         <List items={contex.note} />
      )}
   </AppContext.Consumer>
)

export default NotesViews