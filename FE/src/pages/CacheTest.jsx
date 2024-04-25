import useSWR from "swr";
import TodoItem from "../components/TodoItem";
const url = "http://localhost:8080/api/todo";
const CacheTest = () => {
  const { data: todos, isLoading } = useSWR(url, {
    revalidateOnFocus: true,
  });
  
  if(isLoading){
    return <div>
        <h3>Loading.....</h3>
    </div>
  }

  return (
    <div className="todo-container">
      <h2>React SWR Cache Test</h2>
      {todos?.data?.map((todo) => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          title={todo.title}
          description={todo.description}
        />
      ))}
      
    </div>
  );
};

export default CacheTest;


  // const [todos,setTodos] = useState([]);
  // const fetchData  = async() => {
  //   const res = await fetch(url);
  //   const result = await res.json();
  //   setTodos(result);
  // } 
  // useEffect(() => {
  //   fetchData();
  // },[]);
