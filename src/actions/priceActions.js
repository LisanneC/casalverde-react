import API from '../api'

export const fetchPrices = () => {
  return (dispatch) => {
    const api = new API()
    api.find('prices')
      .then((response) => {
        dispatch({
          type: 'LOAD_PRICEPAGE',
          payload: response.body
        })
      })
      .catch((error) => {
        debugger // maybe show an error or redirect te sign in etc
      })
  }
}
