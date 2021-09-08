import { Route, Switch } from "react-router-dom";
import Home from './views/pages/Home'
import Clientes from './views/pages/Clientes'
import Produtos from './views/pages/Produtos'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/clientes/" component={Clientes}/>
          <Route exact path="/produtos/" component={Produtos}/>
      </Switch>
    </div>
  );
}

export default App;
