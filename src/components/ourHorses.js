import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

// bring in necessary modules to provide this component with state import
// {connect} from 'react-redux'; import {bindActionCreators} from 'redux';

class ourHorses extends Component {

    render() {
        return (
            <div>
                <div>
                    Our Horses!
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state){   return {   } }
export default ourHorses;
// export default connect(null, mapDispatchToProps)(LandingPage);