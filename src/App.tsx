import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/Context";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prev) => {
  //     return prev.concat(newTodo);
  //   });
  // };
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prev) => {
  //     return prev.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
