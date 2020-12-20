import React from "react";
import { connect } from "react-redux";

import { addNewRecipe } from "../actions/recipeActions";

class List extends React.Component {
  state = {
    newRecipe: ""
  };

  handleChanges = (e) => {
    this.setState({ newRecipe: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.recipes.map((recipe, index) => (
            <h4 key={index}>
              {recipe.name}
              {recipe.recStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newRecipe}
          onChange={this.handleChanges}
          placeholder="Add new Recipe"
        />
        <button
          onClick={() => {
            this.props.addNewRecipe(this.state.newRecipe);
          }}
        >
          Add recipe
        </button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipesReducer.recipes
  };
};

export default connect(mapStateToProps, { addNewRecipe })(List);
