
const pricePageContent = {
  image: 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/20245738_1659440647439494_8868274881203201897_n.jpg?oh=e09cca0e6248645991d4642c3f685d6d&oe=5A19CA45',
  title:'Hoogseizoen: ',
  text: 'Periode: zaterdag 24 juni t/m zaterdag 2 september. Basisprijs: €2999,- voor acht personen.'
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
