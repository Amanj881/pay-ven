import './App.css';
// import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AdminRoute from './admin/routes'
import UserRoute from './user/routes'


function App() {
  return (
    <>
    <UserRoute />
    </>
  );
}

export default App;
