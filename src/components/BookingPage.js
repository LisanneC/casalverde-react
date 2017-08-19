import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import SelectTitle from './SelectTitle';
import Confirmed from './Confirmed'
import DeleteBooking from './DeleteBooking'


const BookingPage = ({edit, content}) => {
  console.log(content)
    return (
        <div className='bookingpage'>
        { edit ?
            <div className='form'>
                {content.map((item, i) => {
                    return (
                        <div key={i}>
                            <div><SelectTitle defaultValue={item.title}/></div>
                            <TextField defaultValue={item.first_name} placeholder='First name' floatingLabelText='First name'/>
                            <TextField defaultValue={item.last_name} placeholder='Last name' floatingLabelText='Last name'/>
                            <div>
                                <TextField defaultValue={item.phone} placeholder='Phone number' floatingLabelText='Phone number'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.email} placeholder='email' floatingLabelText='email'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.street_name} placeholder='Street' floatingLabelText='Street'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.street_number} placeholder='House number' floatingLabelText='House number'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.city} placeholder='City' floatingLabelText='City'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.zip_code} placeholder='Zip code' floatingLabelText='Zip code'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.people} placeholder='People' floatingLabelText='People'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.total_price} placeholder='Total price' floatingLabelText='Total price'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.confirmed} placeholder='Confirmed' floatingLabelText='Confirmed'/>
                            </div>
                            <div>
                                <TextField defaultValue={item.paid} placeholder='Paid' floatingLabelText='Paid'/>
                            </div>
                            <div>
                            <DatePicker />
                            </div>
                        </div>
                    )
                })}

            </div>
        :
            <div className='form'>
            <div>
              {content.map((item, i) => {
                return (
                <div key={i}>
                <div>{item.check_in}</div>
                <div>{item.check_out}</div>
                <div>{item.title}</div>
                <div>{item.first_name}</div>
                <div>{item.last_name}</div>
                <div>{item.phone}</div>
                <div>{item.email}</div>
                <div>{item.street_name}</div> <div> {item.street_number}</div>
                <div>{item.city}</div>
                <div>{item.zip_code}</div>
                <div>{item.people}</div>
                <div> € {item.total_price}</div>
                <div><Confirmed booking={item} />{item.confirmed}</div>
                <div><DeleteBooking booking={item} />{item.deleted}</div>
                <div>{item.paid}</div>
                <div>
                  <DatePicker />
                </div>
                </div>
                )
              })}
            </div>
          </div>
        }
        </div>
    )
}

export default BookingPage;
