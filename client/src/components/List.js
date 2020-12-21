import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe } from "../actions/recipeActions";

class List extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          newRecipe: "", recStatus: false, newRecipeMat: ""
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
                   
                    {recipe.recStatus ?
                     <h4 key={index+1}>
                      ( <i className="fas fa-dragon" onClick={this.handleRecStatus} >Edit </i>)
                      </h4> :
                      <h5>
                        (<i className="fas fa-dragon"onClick={this.handleRecStatus} ></i>) 
                        </h5>}
                    
                    <h3 key={index+2}>
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
    recStatus: state.recipesReducer.recStatus
  };
};

export default connect(mapStateToProps, { addNewRecipe, editRecipe })(List);
