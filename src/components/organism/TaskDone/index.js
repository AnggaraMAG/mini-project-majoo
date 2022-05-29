import React from "react";
import HeaderTitle from "../../atoms/HeaderTitle";
import ListItem from "../../atoms/ListItem";
const TaskDone = (props) => {
  const { loading, data } = props;

  const _renderList = () => {
    if (data.length === 0) {
      return <p>No Item Todo</p>;
    } else {
      return data?.map((item, idx) => {
        return <ListItem data={item} index={idx} done={true} />;
      });
    }
  };
  return (
    <div className="wrapper">
      <HeaderTitle title="Task Done" />
      <ul className="todoList">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <ul className="todoList">{_renderList()}</ul>
        )}
      </ul>
      <div className="footer">
        <span>
          You have {data.length}
          <span className="doneTasks"></span> done tasks
        </span>
      </div>
    </div>
  );
};

export default TaskDone;
