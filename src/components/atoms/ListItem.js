import React from "react";
import { useDispatch } from "react-redux";

import { doneActionTodo, undoneActionTodo } from "../../configs/Redux/actions";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CheckIcon from "@mui/icons-material/Check";
import ModalCustome from "../molecules/ModalCustome";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const { data, done, index } = props;
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
      <li key={data && data.id}>
        {done ? (
          <span
            className="icon"
            onClick={() => dispatch(undoneActionTodo(index, data))}
          >
            <KeyboardBackspaceIcon />
          </span>
        ) : (
          <span
            className="icon"
            onClick={() => dispatch(doneActionTodo(index, data))}
          >
            <CheckIcon />
          </span>
        )}
        <div onClick={handleShow}>{data?.title}</div>
      </li>
      <ModalCustome
        openDialog={show}
        handleClose={handleShow}
        data={data}
        index={index}
        done={done}
      />
    </>
  );
};

export default ListItem;
