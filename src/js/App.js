import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/index.css';
import ContainerOrderPro from './components/ContainerOrderPro';
import DetailOrden from './components/DetailOrden';
import data from "./data";

const App = () => {


  const [ordenes, setOrdenes] = useState(data());
  return ( 
    <Router>
      <Switch>
      <Route exact path="/" component={() => <ContainerOrderPro ordenes={ordenes} />}/>
      <Route exact path="/orden/:id"
          render={(props) => {
            const getOrden = ordenes.filter(o => o.numero_orden === parseInt(props.match.params.id));
            return(
              <DetailOrden getOrden={getOrden[0]}/>
            )
            
          }
        }
        />
      </Switch>
    </Router>
   );
}
 
export default App;