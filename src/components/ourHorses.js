import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';
// import {Link} from 'react-router';

// bring in necessary modules to provide this component with state import
// {connect} from 'react-redux'; import {bindActionCreators} from 'redux';

class ourHorses extends Component {


    render() {
        return (
            <div>
                <div className="horse-container">
                    <div className="jumbotron horse-header">
                        <div className="container">
                            <h1>Our Horses</h1>
                            <p>They are cool</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 horse-description">
                                <h1>Here is horse 1</h1>
                            </div>
                            <div className="col-xs-6">
                                <img src="https://www.scienceabc.com/wp-content/uploads/2016/05/horse-running.jpg" className="img-fluid horse-image"  />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

// function mapStateToProps(state){   return {   } }
export default ourHorses;
// export default connect(null, mapDispatchToProps)(LandingPage);