import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as foodActions from '../../actions/foodActions';
/**
 * Fixed layout.
 * 
 * This page lets you add new foods to the list with a basic UI
 */
class PantryPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      food: { title: "" }
    };

    /**
      Some ES6 Binding so we have the proper instance of 'this' being referenced.
      If you remove this code you will see that the value of 'this' is being used by the change handler.
      Since it inherits from this without the below 2 lines it is getting its value from the caller, which in this case
      is also the change handler. It's not being bound to the instance of our component but rather the caller function itself
      To see this error in action, comment out the two lines below...

      It is possible to do this in the jsx code like this:
      <input 
          type="text"
          onChange={this.onFoodItemChange.bind(this)}
          value={this.state.food.title} />

      This impact performance because it causes a new function to be created
      on each key pressed which can slow down large scale code. Think abou tit...
     */
    this.onFoodItemChange = this.onFoodItemChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

/**
 * Handles the event when we change or add a food item to the list
 * @param {*} event - Pulls in the event we are emitting 
 */
  onFoodItemChange(event){
    //asigns the value of the event to the food variable 
    const food = this.state.food;
    //Sets this value to the title referenced by 'value' below
    food.title = event.target.value;
    //updates the state whenever a key is pressed on the input field while focused
    this.setState({food: food});
  }

  onClickSave() {
    //Must call the dispatch function to fire off a function for redux to handle
   this.props.actions.createFood(this.state.food);
  }

  courseRow(food, index) {
    return <div key={index}>{food.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Pantry</h1>
        {this.props.food.map(this.courseRow)}
        <h2>Add Food</h2>
        <input 
          type="text"
          onChange={this.onFoodItemChange}
          value={this.state.food.title} />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

PantryPage.propTypes = {
  food: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    //access the food data within the redux store under 'foods'
    food: state.foods
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Binds all the actions to the dispatch
    actions: bindActionCreators(foodActions, dispatch)
  };
}

//This looks confusing, but it just takes the results of the connect function and passes them to PantryPage
//This is basically how we connect to Redux
export default connect(mapStateToProps, mapDispatchToProps)(PantryPage);
