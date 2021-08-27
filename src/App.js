import styles from './App.css';
import "./components/NavBar";
import NavBar from "./components/NavBar"
import IconExampleDisabled from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import {ItemList} from "./components/itemList";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { LandingPage } from "./pages/LandingPages";
import { ItemDetails } from "./pages/ItemDetailContainer";



function App() {
  return <Router>
      <header>
          <Link to="/"><h1 className={styles.title}>Movies</h1>
          </Link>
          <NavBar />
          <ItemListContainer />
      </header>
      <main>
      <Switch>
        <Route exact path="/movies/:movieId">
            <ItemDetails />
            </Route>
        <Route path="/">
            <LandingPage /> 
            </Route>
      </Switch>
      </main>
</Router>;
}

export default App;
