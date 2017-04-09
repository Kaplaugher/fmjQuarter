import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';

// bring in necessary modules to provide this component with state import
// {connect} from 'react-redux'; import {bindActionCreators} from 'redux';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <div className="page-container text-center">
                    <div className="jumbotron horse-header">
                        <div className="container">
                            <h1>Hello Horse People!</h1>
                            <p>This is a farm, we have horses</p>
                            <p>
                                <Link to="/ourHorses" className="btn btn-primary">
                                    Check em out yall
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Welcome to FMJ Farms</h1>
                                <h3>The best farm ever yo</h3>
                            </div>
                            <div className="col-xs-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in elit vel
                                    urna rhoncus commodo. Vestibulum mauris massa, rutrum in ultrices at, volutpat
                                    vitae nibh. Nunc id est aliquet, molestie nisi ac, convallis mauris. Donec
                                    luctus erat a porttitor molestie. Aliquam justo sem, faucibus a purus quis,
                                    semper venenatis nisi. Pellentesque at ornare arcu, sed convallis erat.
                                </p>

                            </div>
                            <div className="col-xs-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in elit vel
                                    urna rhoncus commodo. Vestibulum mauris massa, rutrum in ultrices at, volutpat
                                    vitae nibh. Nunc id est aliquet, molestie nisi ac, convallis mauris. Donec
                                    luctus erat a porttitor molestie. Aliquam justo sem, faucibus a purus quis,
                                    semper venenatis nisi. Pellentesque at ornare arcu, sed convallis erat.
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6"></div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

// function mapStateToProps(state){   return {   } }
export default LandingPage;
// export default connect(null, mapDispatchToProps)(LandingPage);