import React from "react";
import { Switch, Route} from "react-router-dom";

import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import AdminProductos from "./page/productos/AdminProductos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";


export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/admin" exact component={AdminProductos}/>
       
			</Switch>
    </section>
  );
}
