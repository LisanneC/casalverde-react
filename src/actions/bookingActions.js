import API from '../api'

export const fetchBookings = () => {
  return (dispatch) => {
    const api = new API()
    api.find('bookings')
      .then((response) => {
        dispatch({
          type: 'LOAD_BOOKINGPAGE',
          payload: response.body
        })
      })
      .catch((error) => {
        debugger // maybe show an error or redirect te sign in etc
      })
  }
}
