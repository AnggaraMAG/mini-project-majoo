import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputCustome from "../../atoms/InputCustome";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  removeTodoData,
  updateDoneTodo,
  updateUndoneTodo,
} from "../../../configs/Redux/actions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

export default function ModalCustome(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { data, openDialog, handleClose, index, done } = props;

  const _updateData = () => {
    let payload = {
      id: data.id,
      title: title === "" ? data.title : title,
      description: description === "" ? data.description : description,
      status: 0,
      created_at: data.created_at,
    };
    done
      ? dispatch(updateDoneTodo(payload))
      : dispatch(updateUndoneTodo(payload));

    handleClose();
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>
          {data?.title}{" "}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <InputCustome
            style={{ marginTop: 15 }}
            label="Title"
            autoFocus
            fullWidth
            defaultValue={data?.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <InputCustome
            style={{ marginTop: 15 }}
            label="Description"
            fullWidth
            defaultValue={data?.description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={_updateData}>
            Save
          </Button>
          {done ? null : (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                dispatch(removeTodoData(index));
                handleClose();
              }}
            >
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
