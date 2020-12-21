import React from "react";
import { connect } from "react-redux";

import { addNewRecipe } from "../actions/recipeActions";

class List extends React.Component {
  state = {
    newRecipe: "", recStatus: false, newRecipeMat: ""
  };

  handleChanges = (e) => {
    this.setState({ newRecipe: e.target.value});
  };
  handleMatChanges = (e) => {
    this.setState({ newRecipeMat: e.target.value });
  };
  handleRecStatus = (e) =>{
    this.setState({recStatus: !this.state.recStatus})
    console.log('hi'+this.state.recStatus)


  };

  render() {
    return (
      <React.Fragment>

<div className="friends-list">
          {this.props.recipes.map((recipe, index) => (
            <>
                <div className="recipeCard">
                    <h2 key={index}>
                    {recipe.name}
                    {recipe.recStatus && <i className="fas fa-dragon" onClick={this.handleRecStatus} /> }
                    </h2>
                    <h3 >
                    {recipe.recipeMat}
                    </h3>
                </div>
            </>
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
            this.props.addNewRecipe(this.state);
            // this.props.addNewRecipe(this.state.newRecipe);
            // this.props.addNewRecipeMat(this.state.newRecipeMat);
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
