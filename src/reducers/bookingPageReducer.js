
const bookingPageContent = {
    check_in: '2017-07-31',
    check_out: '2017-08-07',
    first_name: 'Katinka',
    last_name: 'Hesselink',
    title: 'Ms.',
    phone: '210-166-5358',
    email: 'Mail@something.com',
    street_name: 'SomeStreet',
    street_number: '34',
    city: 'Groningen',
    zip_code: '2213TK',
    people: 4,
    total_price: 2345.45,
    confirmed: false,
    paid: false
}

const initialState = bookingPageContent;

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case 'LOAD_BOOKINGPAGE' :
        return [Object.assign({}, payload)].concat(state);
    default :
        return state;
  }
}
