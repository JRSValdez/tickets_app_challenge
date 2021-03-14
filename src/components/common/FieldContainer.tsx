import React from "react";

interface FieldContainer {
  children:JSX.Element
  title:string
}


const FieldContainer = ({children,title}: FieldContainer) => {
  return (
    <div className="d-flex flex-column">
      <label>{title}</label>
      {children}
    </div>
  );
};

export default FieldContainer;
