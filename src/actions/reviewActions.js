import API from '../api'

export const fetchReviews = () => {
  return (dispatch) => {
    const api = new API()
    api.find('reviews')
      .then((response) => {
        dispatch({
          type: 'LOAD_REVIEWPAGE',
          payload: response.body
        })
      })
      .catch((error) => {
        debugger // maybe show an error or redirect te sign in etc
      })
  }
}
