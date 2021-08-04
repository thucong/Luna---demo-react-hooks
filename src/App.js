import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import DisplayProduct from "./components/DisplayProduct";
import IndexProduct from "./components/IndexProduct";
import UpdateProduct from "./components/UpdateProduct";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <IndexProduct />
          </Route> 
          <Route path="/them" component={AddProduct} />
          <Route path="/sua" component={UpdateProduct} />
          <Route path="/chi-tiet" component={DisplayProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
