import {Provider} from 'react-redux';
import store from '../assets/index';
import Home from '../screen/home';
import Admin from '../screen/admin';
import Details from '../screen/details';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function  Souter(){
    return(
        <div>
             <Provider store={store}>
             <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/admin' component= {Admin} />
        <Route exact path='/details' component={Details}/>
      </Router>
             </Provider>
        </div>
    )
}

export default Souter;