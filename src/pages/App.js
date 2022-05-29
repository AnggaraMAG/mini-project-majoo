import React, { useEffect } from "react";
import Header from "../components/molecules/Header";
import TaskDone from "../components/organism/TaskDone";
import TaskPending from "../components/organism/TaskPending/TaskPending";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getInitData } from "../configs/Redux/actions/index";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { doneData, loading, undoneData } = useSelector(
    (state) => state.todoStore
  );

  useEffect(() => {
    dispatch(getInitData());
  }, [dispatch]);

  return (
    <div align="center">
      <Header title="Todo List" />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={6}>
            {" "}
            <TaskPending
              loading={loading}
              data={undoneData}
              totalList={doneData.length + undoneData.length}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <TaskDone loading={loading} data={doneData} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
