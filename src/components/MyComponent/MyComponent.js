import React from "react";


class MyComponent extends React.Component {
 /*   constructor(props) {
      super(props)
      this.state = {}
   }       */


   state = {
      text: '',
   }
   handleChange = (event) => {
      this.setState({ text: event.target.value.toUpperCase() })
   }
   render() {
      return (
         <>
            <input
               onChange={this.handleChange}
               value={this.state.text}
            />
            <h1>{this.state.text}</h1>
         </>
      )
   }
}


export default MyComponent;