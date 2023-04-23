import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React from "react"
import ProductList from "./modules/ProductListing/ProductList"
import ProductDetails from "./modules/ProductListing/ProductDetails"
export default function ProductListContainer() {
  console.log("test")
  return (
    <Router>
      <Switch>
        <Route path="/productDetails" Component={ProductDetails} />
        <Route path="/" Component={ProductList} />
      </Switch>
    </Router>
  )
}
