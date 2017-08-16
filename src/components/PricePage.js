import * as React from 'react';
import TextField from 'material-ui/TextField';

const PricePage = ({edit, content}) => {
    return (
        <div className='pricepage'>
        { edit ?
            <div className='form'>
                <img src={content.image} />
                <div>
                    <TextField defaultValue={content.start_date} />
                </div>
                <div>
                    <TextField
                        defaultValue={content.end_date}
                        multiLine={true}
                    />
                </div>
                <div>
                    <TextField defaultValue={content.min_days} />
                </div>
                <div>
                    <TextField defaultValue={content.nightly_price} />
                </div>
                <div>
                    <TextField defaultValue={content.extra_price} />
                </div>
                <div>
                    <TextField defaultValue={content.saturdays_only} />
                </div>
                <div>
                    <TextField defaultValue={content.service_cost} />
                </div>
            </div>
        :
            <div>
                <img src={content.image} />
                    {content.start_date}
                <div>
                    {content.end_date}
                </div>
                <div>
                    {content.min_days}
                </div>
                <div>
                  €  {content.nightly_price}
                </div>
                <div>
                  €  {content.extra_price}
                </div>
                <div>
                  €  {content.saturdays_only}
                </div>
                <div>
                  €  {content.service_cost}
                </div>
            </div>
        }
        </div>
    )
}

export default PricePage;
