import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    let str = word.toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role='alert'
        >
          {capitalize(props.alert.type)} : <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
