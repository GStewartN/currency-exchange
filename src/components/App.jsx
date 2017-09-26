import React from 'react';
import { getComparison } from './../actions';
import getComparisonReducer from './../reducers/index';
import { connect } from 'react-redux'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { _firstCurrency, _secondCurrency } = this.refs;
    this.props.dispatch(getComparison(_firstCurrency.value, _secondCurrency.value));
    _firstCurrency.value = "";
    _secondCurrency.value = "";
  };

  render() {
    console.log(this.props);
    return(
      <div>
        <h1>Currency Exchange</h1>
        <form onSubmit={this.handleSubmit}>
          <select ref="_firstCurrency">
            <option value="AUD">Australia</option>
            <option value="GBP">Great Britain</option>
            <option value="USD">United States</option>
          </select>
          <select ref="_secondCurrency">
            <option value="AUD">Australia</option>
            <option value="GBP">Great Britain</option>
            <option value="USD">United States</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>
            {this.props.state.firstCurrency}  {this.props.state.firstRate}
            <br/>
            {this.props.state.secondCurrency}  {this.props.state.secondRate}
          </h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let info;
  if (!state.isFetching) {
    info = {
      firstRate: state.firstRate,
      secondRate: state.secondRate,
      firstCurrency: state.firstCurrency,
      secondCurrency: state.secondCurrency
    }
  }
  return {
    state: info
  }
}


export default connect(mapStateToProps)(App);
