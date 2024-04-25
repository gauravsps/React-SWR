import useSWR from "swr";
import TodoItem from "./TodoItem";
import Form from "./form";
import { BASE_URL } from "../utils/comman";

const TodoList = () => {
  const {
    data: todos,
    mutate,
    isLoading,
    error,
  } = useSWR(BASE_URL,{
    revalidateOnFocus: false,
    // revalidateIfStale: false // fetch updated data
  });

  if (isLoading) {
    return (
      <div>
        <h3>Loading.....</h3>
      </div>
    );
  }

  const getTodoDetail = () => {};
  const handleDelete = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "Delete",
    });
    if(response.ok){
      mutate(
        (prevData) => {
          console.log({prevData});
          return {
            data:[...prevData.data.filter((data) => data._id !== id)]
          }
        },
        { revalidate: true } // prevents revalidating the cache
      )
    }
  };

  return (
    <div className="todo-container">
      <h2>React SWR</h2>
      <div className="left">
        <Form {...{ mutate, todos }} />
      </div>
      <div className="right">
        {todos?.data?.map((todo) => (
          <TodoItem
            key={todo._id}
            id={todo._id}
            title={todo.title}
            description={todo.description}
            getTodoDetail={getTodoDetail}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {error && <h2 className="error">Something went Wrong !!!</h2>}
    </div>
  );
};

export default TodoList;
