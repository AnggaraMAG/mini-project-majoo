import React from "react";

const ButtonCustome = (props) => {
  const { title, icon, ...rest } = props;
  return (
    <>
      <button {...rest} disabled={title === ""}>
        {icon}
      </button>
    </>
  );
};

export default ButtonCustome;
