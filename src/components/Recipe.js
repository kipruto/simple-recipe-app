import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "5a1e67c9e413253e80ebb42697738f0a";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const response = await request.json();
    this.setState({ activeRecipe: response.recipes[0] });
    console.log(this.state.activeRecipe);
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={this.state.activeRecipe.image_url}
              alt={this.state.activeRecipe.title}
            />
            <h3 className="active-recipe__title">
              {this.state.activeRecipe.title}
            </h3>
            <h4 className="active-recipe__publisher">
              Publisher:
              <span>{this.state.activeRecipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={this.state.activeRecipe.publisher_url}>
                  {this.state.activeRecipe.publisher_url}
                </a>
              </span>
            </p>
            <button className="recipe_buttons">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
