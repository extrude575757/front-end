import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe } from "../actions/recipeActions";

class List extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          newRecipe: "", recStatus: false, newRecipeMat: "", editStatus: false
        };
  }
        handleChanges = (e) => {
          this.setState({ newRecipe: e.target.value});
        };
        handleMatChanges = (e) => {
          this.setState({ newRecipeMat: e.target.value });
        };
        handleRecStatus = (e) =>{
          this.props.editRecipe();
          this.setState({recStatus: !this.state.recStatus})
          this.setState({editStatus: !this.state.editStatus})
          console.log('status '+this.state.recStatus)
      
      
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
                    
                    </h2>
                   
                    {this.state.recStatus ?
                    (
                       <h4 key={index+1}  onClick={this.handleRecStatus}>
                      <i className="fas">
                      Edit
                      </i>
                      </h4> 
                    ):
                      (
                        <h4 key={index+2} onClick={this.handleRecStatus}>
                        <i className="fas fa-dragon" ></i> 
                        </h4>
                      )}
                    
                    <h3 key={index+3}>
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
    recipes: state.recipesReducer.recipes,
    editStatus: state.recipesReducer.recStatus
  };
};

export default connect(mapStateToProps, { addNewRecipe, editRecipe })(List);
