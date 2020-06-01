import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/pages/About';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

type AppState = {
    headerHeight: number;
    footerHeight: number;
};

export default class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            headerHeight: 0,
            footerHeight: 0,
        };
    }

    componentDidMount = (): void => {
        this.setHeaderAndFooterHeight();
        window.addEventListener('resize', this.setHeaderAndFooterHeight.bind(this));
    };

    setHeaderAndFooterHeight = (): void => {
        const headerHeight = document.getElementById('header')?.clientHeight;
        if (headerHeight) this.setState({ headerHeight: headerHeight });
        const footerHeight = document.getElementById('footer')?.clientHeight;
        if (footerHeight) this.setState({ footerHeight: footerHeight });
    };

    render(): React.ReactElement {
        return (
            <BrowserRouter>
                <Header />
                <main>
                    <Switch>
                        <Route path='/about'>
                            <About
                                headerHeight={this.state.headerHeight}
                                footerHeight={this.state.footerHeight}
                            />
                        </Route>
                        <Route path='/resume'>Resume Page</Route>
                        <Route path='/contact'>Contact Page</Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        );
    }
}
