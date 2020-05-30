import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default (props: any): React.ReactElement => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/about">About Page</Route>
                    <Route path="/resume">Resume Page</Route>
                    <Route path="/contact">Contact Page</Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
};
