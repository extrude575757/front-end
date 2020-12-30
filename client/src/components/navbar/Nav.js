import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe } from "../../actions/recipeActions";

class Nav extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          newRecipe: "", recStatus: false, newRecipeMat: "", editStatus: false, newRecipeDir:""
        };
  }
        handleChanges = (e) => {
          this.setState({ newRecipe: e.target.value});
        };
        handleMatChanges = (e) => {
          this.setState({ newRecipeMat: e.target.value });
        };
        handleDirChanges = (e) =>{
          this.setState({newRecipeDir: e.target.value})
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
        <nav> 
          {
                  
        // Get the recipe names
          this.props.recipes.map((recipe, index) => (
            <>
                <div className="recipeCard">
                    <h2 key={index.id}>
                    {recipe.name}
                    
                    </h2>

                </div>
            </>
        ))}
        </nav>
        </div>

        
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

export default connect(mapStateToProps, { addNewRecipe, editRecipe })(Nav);
