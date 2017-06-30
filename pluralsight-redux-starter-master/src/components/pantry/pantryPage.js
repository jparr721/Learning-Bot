import React, {PropTypes, Component} from 'react';
/**
 * The current layout is trash. It's just an example
 */
class PantryPage extends Component {
  render() {

    return(
      <div>
        <div className="row">
          <h1>Pantry</h1>
            <h2>Meats</h2>
            <div className="panel panel-success">
              <div className="panel-heading">Ground Beef</div>
              <div className="panel-body">
                Time until expiration: 2 weeks
              </div>
            </div>
            <div className="panel panel-warning">
              <div className="panel-heading">Roast Beef</div>
              <div className="panel-body">
                Time until expiration: 4 days
              </div>
            </div>
            <div className="panel panel-danger">
              <div className="panel-heading">Chicken</div>
              <div className="panel-body">
                Time until expiration: 1 day
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default PantryPage;
