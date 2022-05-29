import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import ButtonCustome from "../../atoms/ButtonCustome";
import InputCustome from "../../atoms/InputCustome";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../configs/Redux/actions";

const FormInputTaskPending = (props) => {
  const { total } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const _addNewTodo = async () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    let payload = [
      {
        id: total + 1,
        title: title,
        description: "",
        status: 0,
        createdAt:
          today.getFullYear() +
          "-" +
          month +
          "-" +
          today.getDate() +
          " " +
          today.getHours() +
          ":" +
          today.getMinutes(),
      },
    ];
    await dispatch(addTodo(payload));
    setTitle("");
  };

  return (
    <div className="inputField">
      <InputCustome
        fullWidth
        type="text"
        placeholder="Add your new todo"
        onChange={(event) => setTitle(event.target.value)}
        required
        value={title}
      />
      <ButtonCustome title={title} onClick={_addNewTodo} icon={<AddIcon />} />
    </div>
  );
};

export default FormInputTaskPending;
