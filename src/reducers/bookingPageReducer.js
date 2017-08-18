
export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_BOOKINGPAGE' :
        return [ ...payload ]
    default :
        return state;
  }
}
