import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBarMain from './navbarMain';

export default class Bootstrap extends Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            title: 'Laravel',
        };
    }
    
    /**
     * Render main component
     */
    render() {
        return (
            <div className="container-fluid">
                <NavBarMain />
                <div className="content">
                    <div className="title m-b-md">
                        {this.state.title}
                    </div>
                </div>
                <div className="row justify-content-center m-b-md">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-info text-default">Example Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="links">
                <a href="https://laravel.com/docs">Documentation</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        );
    }
}


