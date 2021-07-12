import './App.css';
import Header from './components/Header'
import ProductsContainer from './components/ProductsContainer'
import ProductDetails from './components/ProductDetails'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
function App() {
  return <>
  <Router>
    <Header/>
    <Switch>
      <Route path='/' exact>
        <ProductsContainer/>
      </Route>
      <Route path='/product_details/:id' exact>
        <ProductDetails/>
      </Route>
      <Route >
        Not Found
      </Route>
    </Switch>

  </Router>
  
  </>
}

export default App;
