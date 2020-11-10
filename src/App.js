import './App.css';
// import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import AdminRoute from './admin/routes'
import UserRoute from './user/routes'


function App() {
  return (
    <>
{  /*  <AdminRoute />
    */}    <UserRoute />
    </>
  );
}

export default App;
