
const homePageContent = {

    heading: 'Rust, natuurschoon, privacy in het hartje van het Chianti gebied in Toscane',
    text: 'Onze villa, gelegen op loopafstand van Tregole in het beroemde wijngebied van de Chianti Classico'
}

const initialState = homePageContent;

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_HOMEPAGE' :
        return Object.assign({}, state, payload);
    default :
        return state;
  }
}
