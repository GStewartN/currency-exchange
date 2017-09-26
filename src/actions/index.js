import * as types from './../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export const requestComparison = (firstCurrency, secondCurrency) => ({
  type: types.COMPARE_TWO,
  firstCurrency,
  secondCurrency
});

export const receiveComparison = (firstCurrency, secondCurrency, rates) => ({
  type: types.RECEIVE_COMPARISON,
  firstCurrency,
  secondCurrency,
  rates
})

export function getComparison(firstCurrency, secondCurrency, dispatch) {
  return function(dispatch) {
    dispatch(requestComparison(firstCurrency, secondCurrency));
    return fetch('http://api.fixer.io/latest?symbols=' + firstCurrency + ',' + secondCurrency).then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      if (json.rates) {
        let rates = [];
        for (var key in json.rates) {
          if (json.rates.hasOwnProperty(key)) {
          rates.push(json.rates[key]);
          }
        }
        dispatch(receiveComparison(firstCurrency, secondCurrency, rates));
        return rates;
      } else {
        console.log("We couldn't find the conversion")
      }
    })
  }
}
