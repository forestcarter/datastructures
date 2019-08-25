import React from "react";
import { Route, Switch } from "react-router-dom";
import SLL from './components/linkedList/SLL'
import BST from './components/binarySearchTree/BST'
import Home from './components/home/Home'

import NotFound from "./components/NotFound";

export default () =>
  <Switch>
	<Route path="/" exact component={Home}/>
	<Route path="/SLL" exact component={SLL}/>
	<Route path="/BST" exact component={BST}/>

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;