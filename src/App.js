import React,  {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

import Home from './pages/home';
import './App.css';

// import Dessert from './pages/admin/add-dessert';
// import Drink from './pages/admin/add-drink';
// import Extra from './pages/admin/add-extra';
import Pizza from './pages/admin/add-pizza';

import Catalog from './pages/catalog';
import Login from './pages/login';
import Payment from './pages/payment';
import Registration from './pages/registration';
import ShoppingCart from './pages/shopping-cart';
import NotFound from './pages/notFound';

import './App.css';

// const userInitialForm = Object.freeze({
//   username: "",
//   logged: false
// });

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}

function App() {

  // const [user, setUser] = useState(userInitialForm);

  useEffect(() => {
    // fetchDesserts();
    // fetchDrinks();
    // fetchExtras();
    fetchPizzas();
    // fetchI();
  }, []);

  // Récupération des pizzas
  // const fetchDesserts = () => {
  //   makeGetRequest('http://127.0.0.1:3000/api/v1/desserts')
  //   .then((data) => addDesserts(data))
  //   .catch((err) => console.log(err))
  // }

  // const fetchDrinks = () => {
  //   makeGetRequest('http://127.0.0.1:3000/api/v1/drinks')
  //   .then((data) => addDrinks(data))
  //   .catch((err) => console.log(err))
  // }

  // const fetchExtras = () => {
  //   makeGetRequest('http://127.0.0.1:3000/api/v1/extras')
  //   .then((data) => addExtras(data))
  //   .catch((err) => console.log(err))
  // }

  const fetchPizzas = () => {
    makeGetRequest('http://127.0.0.1:3000/api/v1/pizzas')
    .then((data) => addPizzas(data))
    .catch((err) => console.log(err))
  }

  // Création des var d'etat
  // const [desserts, addDesserts] = React.useState([]);
  // const [drinks, addDrinks] = React.useState([]);
  // const [extras, addExtras] = React.useState([]);
  const [pizzas, addPizzas] = React.useState([]);
  // const [reservation, addReservation] = React.useState([]);
  // const [I, addI] = React.useState([]);
  
  // const [userID, addUserId] = React.useState();

  // console.log(extras)

  return (
    <BrowserRouter>
    {/* <ButtonAppBar nbrR = {reservation} UserID = {UserID}/> */}
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/catalog">
          <Catalog pizzas={pizzas}/>
        </Route>
        
        <Route exact path="/login">
          <Login/>
        </Route>
        
        <Route exact path="/payment">
          <Payment/>
        </Route>
        
        <Route exact path="/registration">
          <Registration/>
        </Route>
        
        <Route exact path="/shopping-cart">
          <ShoppingCart/>
      </Route>
        
        {/* <Route exact path="/add-dessert">
          <Dessert/>
        </Route> */}
        
        {/* <Route exact path="/add-drink" component={Drink}/> */}
        
        {/* <Route exact path="/add-extra">
          <Extra/>
        </Route> */}
        
        <Route exact path="/add-pizza">
          <Pizza/>
        </Route>
        
        <Route path="/" component={NotFound}/>
      </Switch>
    </BrowserRouter>

  );

}

export default App;
