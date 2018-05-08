
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './partials/Footer';
import AsideLeft from './partials/AsideLeft';
import AsideRight from './partials/AsideRight';
import MainContent from './partials/MainContent';
import Header from './partials/Header';

import AuthUser from './models/auth_user';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
        };
        this.authUser = new AuthUser();
    }

    componentDidMount() {
        console.info('AuthDropdown::componentDidMount', this.model);


        this.authUser.fetch({
            success: (response) => {
                this.setState({ready: true});
            },
            error: (err) => {
                console.info('MODEL::FETCH::ERR: ', err);
            }
        });
    }

    /**
     * render
     */
    render() {

        console.info('Main::render::READY: ', this.state.ready);
        if (!this.state.ready) {
            return null;
        }
        console.info('Main::render::READY::TRUE: ', this.state.ready);
        return (
            <div>
                <Header authUser={this.authUser}/>
                <AsideLeft />
                <AsideRight />
                <MainContent />
                <Footer />
            </div>
        );
    };
}

ReactDOM.render(<Main />, document.getElementById('app-container'));
