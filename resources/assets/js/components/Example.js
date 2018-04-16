/* eslint no-console:0 */

import React from 'react';
import ReactDOM from 'react-dom';

import createReactClass from 'create-react-class';
import Footer from './Footer';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import MainContent from './MainContent';
import Header from './Header';


const Test = createReactClass({


  render() {
    return (
		<div>
			<Header />
			<AsideLeft />
			<AsideRight />
			<MainContent />
			<Footer />
		</div>
	);
  },
});


ReactDOM.render(<Test />, document.getElementById('example'));
