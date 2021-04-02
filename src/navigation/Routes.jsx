import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "../containers/About";
import Auth from "../containers/Auth";
import Home from "../containers/Home";


export default function Routes() {
    return (
        <Router>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">

                            <Link to="/" class="navbar-item">
                                <h1 class="title">E Shop</h1>
                            </Link>
                            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}


                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">

                            </div>

                            <div class="navbar-end">
                                <Link to="/" class="navbar-item">Home</Link>
                                <Link to="/about" class="navbar-item">About</Link>
                                <div class="navbar-item">
                                    <div class="buttons">
                                        <Link to="/auth" class="button is-primary">
                                            <strong>Sign up</strong>
                                        </Link>
                                        <Link to="/auth" class="button is-light">
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <Switch>
                        <Route path="/auth">
                            <Auth />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>

                    </Switch>
                </div>

                <footer class="footer">
                    <div style={{ textAlign: 'center', backgroundColor: '#FFF', padding: '15px' }}>
                        <p>
                            <strong>Site</strong> by <a>Ramakrishnareddy</a>. Copyrights. All Rights Reserved. 2021.
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}
