import * as React from 'react';
import TextField from 'material-ui/TextField';

const PricePage = ({edit, content}) => {
    return (
        <div className='pricepage'>
        { edit ?
            <div className='form'>
                <img src={content.image} />
                <div>
                    <TextField defaultValue={content.start_date} placeholder='Start date' floatingLabelText='Start date '/>
                </div>
                <div>
                    <TextField
                        defaultValue={content.end_date}
                       placeholder='End date' floatingLabelText='End date'
                    />
                </div>
                <div>
                    <TextField defaultValue={content.min_days} placeholder='Minimum days' floatingLabelText='Minimum days'/>
                </div>
                <div>
                    <TextField defaultValue={content.nightly_price} placeholder='Nightly price' floatingLabelText='Nighty price'/>
                </div>
                <div>
                    <TextField defaultValue={content.extra_price} placeholder='Extra price' floatingLabelText='Extra price' />
                </div>
                <div>
                    <TextField defaultValue={content.saturdays_only} placeholder='Saturdays only' floatingLabelText='Saturdays only'/>
                </div>
                <div>
                    <TextField defaultValue={content.service_cost} placeholder='Service costs' floatingLabelText='Service costs'/>
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
