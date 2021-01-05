import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe, editNewRecipe } from "../actions/recipeActions";
import CardAdd from "./CardAdd";
import CardEdit from "./CardEdit";
class List extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          newRecipe: "", recStatus: false, 
          newRecipeMat: "", editStatus: false, newRecipeDir:""
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
        handleh3 = (e) =>{
         if(this.state.recStatus){
            ( <input
              type="text"
              value={this.state.newRecipeMat}
              onChange={this.handleMatChanges}
              placeholder="Add new Recipe Materials"
              
               >
                  new Mat here
              </input>)
              this.props.editNewRecipe(this.state);
           }
        }
  
  render() {
    return (
      <React.Fragment>

{this.state.recStatus ?
                    (
                      <>

              <div className="friends-list">
                        {this.props.recipes.map((recipe, index) => (
                          <>
                           { // Make this as editCard Component instead 
                           
                           }
                              <CardEdit key={recipe.id} recipe={recipe}/>

                                  <h4 key={index.id}  onClick={this.handleRecStatus}>
                                    <i className="fas">
                                    Save 
                                  
                                    </i>
                                  </h4> 
                                  
                                  
                          </>
                      ))}
                      </div>

                       
                        </>
                    ):
                    (
                      <>

              <div className="friends-list">
                        {this.props.recipes.map((recipe, index) => (
                          <>
                              <div key={index.id} className="recipeCard">
                                  <h2 key={index.id}>
                                  {recipe.name}
                                  
                                  </h2>
                                  <h4 key={index.id}  onClick={this.handleRecStatus}>
                                  <i className="fas fa-dragon" >Edit</i>
                                  </h4> 
                                  
                                  <h3 key={index.id}>
                                    
                                  {recipe.recipeMat}
                                  </h3>
                                  <p key={index.id}>
                                      {recipe.recipeDir}
                                  </p>
                                  
                              </div>
                          </>
                      ))}
                      </div>

                       
                        </>
                    )
                      
                      }
                    


{/*         
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
        <input
          type="text"
          value={this.state.newRecipeDir}
          onChange={this.handleDirChanges}
          placeholder="Add new Recipe Directions"
        />
        <button
          onClick={() => {
            this.props.addNewRecipe(this.state);
            // this.props.addNewRecipe(this.state.newRecipe);
            // this.props.addNewRecipeMat(this.state.newRecipeMat);
          }}
        >
          Add recipe
        </button> */}
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

export default connect(mapStateToProps, { addNewRecipe, editRecipe, editNewRecipe })(List);
