import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import ShowPost from './Components/ShowPost/ShowPost';

function App() {
  return (
    <div>
          <Router>
               <Switch>
                     <Route path="/home">
                         <Home></Home>
                     </Route>
                       <Route path="/about/:postId">
                           <ShowPost></ShowPost>
                       </Route>
                      <Route exact path="/">
                            <Home></Home>
                      </Route>
                      <Route path="*">
                          <NotMatch></NotMatch>
                      </Route>
               </Switch>
          </Router>
    </div>
  );
}

export default App;
