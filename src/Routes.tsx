import Products from "pages/Products";
import PrivateRoute from "./components/PrivateRoute";
//import I18nInstance from "i18n";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import Cart from "pages/Cart";
import Home from "pages/Home";
import {Product as ProdAdm} from "pages/Admin/Product" ;
import Product from "pages/Product" ;
import {Admin} from "pages/Admin" ;
import CloseOrder from "pages/CloseOrder";
//import { GAInitializate } from "utils/functions/googleAnalytics";w

/* const Areas = lazy(
  () =>
    import(
      './pages/Areas'
    )
) */
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>carregando</div>}>
      <Routes>
          <Route path="/" element={<ProdAdm />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
