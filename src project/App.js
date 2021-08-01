//import logo from "./logo.svg";
import "./App.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

// function Home() {
//   return <h2>Home</h2>;
// }

function App() {
  return (
    <div className="App border1">
      <Home />
      {/* <header className="App-header border1"></header> */}
    </div>

    // <Router>
    //   <div className="App">
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/admin">Admin</Link>
    //       </li>
    //     </ul>

    //     <Switch>
    //       <Route path="/admin">
    //         <Admin />
    //       </Route>
    //       <Route path="/" exact>
    //         <Home />
    //       </Route>
    //       <Route path="*" exact>
    //         <Others />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
