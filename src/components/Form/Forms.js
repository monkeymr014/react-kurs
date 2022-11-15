import React from "react";

const Form = ({submitFn}) => (
 
   <form onSubmit={submitFn} > 
      <input placeholder="name" name="name" />
      <input placeholder="link" name="link" />
      <input placeholder="image" name="image" />
      <textarea placeholder="descreption" name="descreption" />
      <button type="submit">Dodaj</button>
   </form>
);

export default Form;