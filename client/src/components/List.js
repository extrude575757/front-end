import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, addNewRecipeMat } from "../actions/recipeActions";

class List extends React.Component {
  state = {
    newRecipe: "", newRecipeMat: ""
  };

  handleChanges = (e) => {
    this.setState({ newRecipe: e.target.value});
  };
  handleMatChanges = (e) => {
    this.setState({ newRecipeMat: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.recipes.map((recipe, index) => (
            <h4 key={index}>
              {recipe.name}
              {recipe.recStatus && <i className="fas fa-dragon" />}
              {recipe.recipeMat}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newRecipe}
          onChange={this.handleChanges}
          placeholder="Add new Recipe Title"
        />
        <input
          type="text"
          value={this.state.newRecipeMat}
          onChange={this.handleMatChanges}
          placeholder="Add new Recipe Materials"
        />
        <button
          onClick={() => {
            this.props.addNewRecipe(this.state.newRecipe);
            this.props.addNewRecipeMat(this.state.newRecipeMat);
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

export default connect(mapStateToProps, { addNewRecipe, addNewRecipeMat })(List);
