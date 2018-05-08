import React from 'react';

class MainContent extends React.Component {
    
    render() {
        console.info('--------------- MainContent::RENDER');
        return (
            <section id="main" role="main">
                <div className="container-fluid">
                    MainContent
                </div>

                <a href="#" className="totop animation" data-toggle="waypoints totop" data-showanim="bounceIn" data-hideanim="bounceOut" data-offset="80%"><i className="ico-angle-up"></i></a>
            </section>
        );
    }
}

export default MainContent;