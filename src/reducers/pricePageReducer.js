

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_PRICEPAGE' :
        return [ ...payload ]
    default :
        return state;
  }
}
