export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_REVIEWPAGE' :
        return [ ...payload ]
    default :
        return state;
  }
}
