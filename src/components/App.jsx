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
  };

  render() {
    console.log(this.props);
    return(
      <div>
        <h1>Currency Exchange</h1>
        <form onSubmit={this.handleSubmit}>
          <select ref="_firstCurrency">
            <option value="AUD">Australia</option>
            <option value="BRL">Brazil</option>
            <option value="BGN">Bulgaria</option>
            <option value="CAD">Canada</option>
            <option value="CNY">China</option>
            <option value="HRK">Croatia</option>
            <option value="CZK">Czech Republic</option>
            <option value="DKK">Denmark</option>
            <option value="GBP">Great Britain</option>
            <option value="HKD">Hong Kong</option>
            <option value="HUF">Hungary</option>
            <option value="INR">India</option>
            <option value="IDR">Indonesia</option>
            <option value="ILS">Israel</option>
            <option value="JPY">Japan</option>
            <option value="MYR">Malaysia</option>
            <option value="MXN">Mexico</option>
            <option value="NZD">New Zealand</option>
            <option value="NOK">Norway</option>
            <option value="PHP">Philippines</option>
            <option value="PLN">Poland</option>
            <option value="RON">Romania</option>
            <option value="RUB">Russia</option>
            <option value="SGD">Singapore</option>
            <option value="ZAR">South Africa</option>
            <option value="KRW">South Korea</option>
            <option value="SEK">Sweden</option>
            <option value="CHF">Switzerland</option>
            <option value="THB">Thailand</option>
            <option value="TRY">Turkey</option>
            <option value="USD">United States</option>
          </select>
          <select ref="_secondCurrency">
            <option value="AUD">Australia</option>
            <option value="BRL">Brazil</option>
            <option value="BGN">Bulgaria</option>
            <option value="CAD">Canada</option>
            <option value="CNY">China</option>
            <option value="HRK">Croatia</option>
            <option value="CZK">Czech Republic</option>
            <option value="DKK">Denmark</option>
            <option value="GBP">Great Britain</option>
            <option value="HKD">Hong Kong</option>
            <option value="HUF">Hungary</option>
            <option value="INR">India</option>
            <option value="IDR">Indonesia</option>
            <option value="ILS">Israel</option>
            <option value="JPY">Japan</option>
            <option value="MYR">Malaysia</option>
            <option value="MXN">Mexico</option>
            <option value="NZD">New Zealand</option>
            <option value="NOK">Norway</option>
            <option value="PHP">Philippines</option>
            <option value="PLN">Poland</option>
            <option value="RON">Romania</option>
            <option value="RUB">Russia</option>
            <option value="SGD">Singapore</option>
            <option value="ZAR">South Africa</option>
            <option value="KRW">South Korea</option>
            <option value="SEK">Sweden</option>
            <option value="CHF">Switzerland</option>
            <option value="THB">Thailand</option>
            <option value="TRY">Turkey</option>
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
