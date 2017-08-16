
const homePageContent = {
    image: 'http://res.cloudinary.com/mojgan/image/upload/c_fill,g_center,h_400,w_1000/v1502721417/fomwicbdshjgicxbnwxd.jpg',
    title: 'Rust, natuurschoon, privacy in het hartje van het Chianti gebied in Toscane',
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
