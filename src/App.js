import logo from './logo.svg';
import './App.css';
//import Insert from './comp/insert';
import TodoList from './comp/todolist';

function App() {
  return (
  <div className="container">
   <div className="row">
     <div className="col-lg-5 mx-auto">
   <TodoList/>
     </div>
   </div>
  </div>
  );
}

export default App;
