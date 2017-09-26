import constants from './../constants/';
const { types } = constants;

const getComparisonReducer = (state = {}, action) => {
  let newState;
  let firstCurrCode;
  let secondCurrCode;
  switch (action.type) {
    case types.COMPARE_TWO:
      const { firstCurrency, secondCurrency } = action;
      newState = {
        isFetching: true,
        firstCurrency: firstCurrency,
        secondCurrency: secondCurrency
      };
      return newState;
    case types.RECEIVE_COMPARISON:
      newState = Object.assign({}, state, {
        isFetching: false,
        firstCurrency: action.firstCurrency,
        secondCurrency: action.secondCurrency,
        firstRate: action.rates[0],
        secondRate: action.rates[1]
      })
      return newState;
    default:
      return state;
  }
}

export default getComparisonReducer;
