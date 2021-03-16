import React from "react";

interface IFieldContainerProps {
  children:JSX.Element
  title:string
}


const FieldContainer = ({children,title}: IFieldContainerProps) => {
  return (
    <div className="d-flex flex-column">
      <label>{title}</label>
      {children}
    </div>
  );
};

export default FieldContainer;
