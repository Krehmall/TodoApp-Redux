import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { selectTodo, updateTodoInfo } from "../store/todosSlice";

const SelectedTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  const isUserLoggedIn = useSelector((state) => state.users.loggedInUser);
  const [info, setInfo] = useState(selectedTodo.info);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
    if (id) {
      dispatch(selectTodo(+id));
    }

    return () => {
      dispatch(selectTodo(null));
    };
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodoInfo({ id: selectedTodo.id, info }));
    navigate(-1);
  };

  return (
    <div className="selected-todo">
      <div className="selected-todo-wrapper">
        <BackButton />
        {selectedTodo ? <h3>{selectedTodo.text}</h3> : <p>Todo not found</p>}
        <form onSubmit={handleSubmit}>
          <textarea rows={5} type="text" onChange={(e) => setInfo(e.target.value)} value={info} />
          <button className="add-info-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default SelectedTodo;
