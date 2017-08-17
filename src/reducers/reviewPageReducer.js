
const reviewPageContent =
[{
  name:'Stefan',
  stars:'4',
  review: 'Really cool place. Too bad the wifi was bad',
},{
  name:'Anne',
  stars:'5',
  review:"It was the most impressive location I've ever been to.",
},{
  name: 'Kaatje',
  stars: '5',
  review: "It was the most impressive location I've ever been to.",
 }]

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_REVIEWPAGE' :
        return [Object.assign({}, payload)].concat(state);
    default :
        return state;
  }
}
