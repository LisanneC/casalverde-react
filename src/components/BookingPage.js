import * as React from 'react';
import TextField from 'material-ui/TextField';

const BookingPage = ({edit, content}) => {
    return (
        <div className='bookingpage'>
        { edit ?
            <div className='form'>
                <TextField defaultValue={content.name} />
                <div>
                    <TextField defaultValue={content.stars} />
                </div>
                <div>
                    <TextField
                        defaultValue={content.review}
                        multiLine={true}
                    />
                </div>

            </div>
        :
            <div>
                 {content.name}
                <h1>
                    {content.stars}
                </h1>
                <div>
                    {content.review}
                </div>
            </div>
        }
        </div>
    )
}

export default BookingPage;
