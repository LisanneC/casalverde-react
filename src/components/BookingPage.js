import * as React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import SelectTitle from './SelectTitle';

const BookingPage = ({edit, content}) => {
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
                <div> {content.title}</div><br/>
                <div>{content.first_name}</div><br/>
                <div>{content.last_name}</div><br/>
                <div>{content.phone}</div><br/>
                <div>{content.email}</div><br/>
                <div>{content.street_name} {content.street_number}</div><br/>
                <div>{content.city}</div><br/>
                <div>{content.zip_code}</div><br/>
                <div>{content.people}</div><br/>
                <div> € {content.total_price}</div><br/>
                <div>{content.confirmed}</div><br/>
                <div>{content.paid}</div><br/>
                <div>
                  <DatePicker />
                </div>

            </div>
        }
        </div>
    )
}

export default BookingPage;
