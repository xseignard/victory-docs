import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class VictoryVoronoiTooltip extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{}}
      />
    );
  }
}

VictoryVoronoiTooltip.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default VictoryVoronoiTooltip;
