
const pricePageContent = {
  image: '',
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
