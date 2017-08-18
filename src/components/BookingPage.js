import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import SelectTitle from './SelectTitle';

const BookingPage = ({edit, content}) => {
  console.log(content)
    return (
        <div className='bookingpage'>
        { edit ?
            <div className='form'>
              <div><SelectTitle defaultValue={content.title}/></div>
                <TextField defaultValue={content.first_name} placeholder='First name' floatingLabelText='First name'/>
                <TextField defaultValue={content.last_name} placeholder='Last name' floatingLabelText='Last name'/>
                <div>
                    <TextField defaultValue={content.phone} placeholder='Phone number' floatingLabelText='Phone number'/>
                </div>
                <div>
                    <TextField defaultValue={content.email} placeholder='email' floatingLabelText='email'/>
                </div>
                <div>
                    <TextField defaultValue={content.street_name} placeholder='Street' floatingLabelText='Street'/>
                </div>
                <div>
                    <TextField defaultValue={content.street_number} placeholder='House number' floatingLabelText='House number'/>
                </div>
                <div>
                    <TextField defaultValue={content.city} placeholder='City' floatingLabelText='City'/>
                </div>
                <div>
                    <TextField defaultValue={content.zip_code} placeholder='Zip code' floatingLabelText='Zip code'/>
                </div>
                <div>
                    <TextField defaultValue={content.people} placeholder='People' floatingLabelText='People'/>
                </div>
                <div>
                    <TextField defaultValue={content.total_price} placeholder='Total price' floatingLabelText='Total price'/>
                </div>
                <div>
                    <TextField defaultValue={content.confirmed} placeholder='Confirmed' floatingLabelText='Confirmed'/>
                </div>
                <div>
                    <TextField defaultValue={content.paid} placeholder='Paid' floatingLabelText='Paid'/>
                </div>
                <div>
                  <DatePicker />
                </div>

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
                <div>{item.confirmed}</div>
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
