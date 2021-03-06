import React from "react";

function Button({text, handleClick}) {

  return (<button onClick={handleClick} data-testid="button">{text}</button>);
}

export default Button;