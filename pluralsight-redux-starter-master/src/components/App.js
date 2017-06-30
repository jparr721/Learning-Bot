/**
 * This handles the App template and will be used to kind of "house" our components. It's sexy
 */
import React, {Component, PropTypes} from 'react';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {/** React router will pass child components as properties to this as props async **/}
        {this.props.children}
      </div>
    );
  }
}

//Proptype is required to handle child elements yaddah yaddah...
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
