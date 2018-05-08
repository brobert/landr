import React, {Component} from 'react';


class AuthDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.authUser = props.authUser;
    }



    render() {
        return (
            <li className="dropdown profile">
                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="meta">
                        <span className="avatar"><img src="/image/avatar/user.png" className="img-circle" alt="" /></span>
                        <span className="text hidden-xs hidden-sm pl5">{this.authUser.get('name')}</span>
                    </span>
                </a>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="/account/edit"><span className="icon"><i className="ico-user-plus2"></i></span> My Accounts</a></li>
                    <li><a href="/help"><span className="icon"><i className="ico-question"></i></span> Help</a></li>
                    <li className="divider"></li>
                    <li>
                        <a href="/logout" onClick={(event) => {event.preventDefault();document.getElementById('logout-form').submit();}}>
                            Logout
                        </a>

                        <form id="logout-form" action="/logout" method="POST">
                            <input type="hidden" name="_token" value="LxkFF2KqPrQSoQAFYnzZuBrW1CQdEQuFf2ttfUAg" />
                        </form>
                    </li>
                </ul>
            </li>
        );
    }
}

export default AuthDropdown;