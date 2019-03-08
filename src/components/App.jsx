import React, { Component } from "react";
import PageWrapper from './PageWrapper.jsx';
import NavBar from './NavBar.jsx';
import MainPage from './MainPage.jsx';

import '../styles/App.scss';

class App extends Component {
    render() {
        return (
            <PageWrapper>
              <NavBar/>
              <MainPage/>
            </PageWrapper>
        );
    }
}

export default App;
