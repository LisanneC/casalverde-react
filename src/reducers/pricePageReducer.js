
const pricePageContent = {
  image: '',
  start_date: '2017-01-01',
  end_date: '2017-03-31',
  min_days: 3,
  nightly_price: 214.14,
  extra_price: 20,
  saturdays_only: false,
  service_cost: 500
}

const initialState = pricePageContent

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_PRICEPAGE' :
        return [Object.assign({}, payload)].concat(state);
    default :
        return state;
  }
}
