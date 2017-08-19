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

export const saveBooking = (booking) => {
  return (dispatch) => {
    const api = new API()
    api.update('bookings', booking.id, booking)
      .then((response) => {
        fetchBookings()(dispatch);
      })
      .catch((error) => {
        debugger // maybe show an error or redirect te sign in etc
      })
  }
}


export const deleteBooking = (id) => {
  return (dispatch) => {
    const api = new API()
    api.destroy('bookings', id)
      .then((response) => {
        fetchBookings()(dispatch);
      })
      .catch((error) => {
        debugger // maybe show an error or redirect te sign in etc
      })
  }
}
