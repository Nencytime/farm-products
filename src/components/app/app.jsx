import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import benefitList from "/src/mocks/benefitList";
import productList from "/src/mocks/productList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage benefits={benefitList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={productList} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
