import React from "react";
import api from "./api";
import ForecastList from "./ForecastList";

class ForecastListContainer extends React.Component {
  state = {
    loaded: false,
    forecasts: []
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.region !== nextProps.region ||
      nextState.loaded !== this.state.loaded
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.region !== prevProps.region) {
      this.getForecasts();
    }
  }

  async getForecasts() {
    this.setState({ loaded: false });
    let forecasts = await api.getForecasts(this.props.region.globalIdLocal);
    this.setState({ forecasts: forecasts, loaded: true });
  }

  render() {
    return (
      <ForecastList
        forecasts={this.state.forecasts}
        region={this.props.region}
      />
    );
  }
}

export default ForecastListContainer;
