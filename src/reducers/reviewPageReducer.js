
const reviewPageContent = {
  name:'Stefan',
  stars:'4',
  review: 'Really cool place. Too bad the wifi was bad'
}

const initialState = reviewPageContent

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_REVIEWPAGE' :
        return [Object.assign({}, payload)].concat(state);
    default :
        return state;
  }
}
