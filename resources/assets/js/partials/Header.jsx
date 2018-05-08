import React from 'react';
import AuthDropdown from './../components/auth_dropdown';
class Header extends React.Component {

    /**
     * constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
        };
    }

    /**
     * render
     */
    render() {
        return (
            <header id="header" className="navbar">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        <span className="logo-figure"></span>
                        <span className="logo-text"></span>
                    </a>
                </div>
                <div className="navbar-toolbar clearfix">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="hidden-xs hidden-sm">
                            <a href="javascript:void(0);" className="sidebar-minimize" data-toggle="minimize" title="Minimize sidebar">
                                <span className="meta">
                                    <span className="icon"></span>
                                </span>
                            </a>
                        </li>
                        <li className="navbar-main hidden-lg hidden-md hidden-sm">
                            <a href="javascript:void(0);" data-toggle="sidebar" data-direction="ltr" rel="tooltip" title="Menu sidebar">
                                <span className="meta">
                                    <span className="icon"><i className="ico-paragraph-justify3"></i></span>
                                </span>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">First item</a></li>
                                <li><a href="#">Second item</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Third item</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="navbar-form navbar-left dropdown" id="dropdown-form">
                        <form action="" role="search">
                            <div className="has-icon">
                                <input type="text" className="form-control" placeholder="Search application..." />
                                <i className="ico-search form-control-icon"></i>
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <AuthDropdown authUser={this.props.authUser}/>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;