import * as React from 'react';
import TextField from 'material-ui/TextField';

const HomePage = ({edit, content, handleOnChange}) => {
    return (
        <div className='homepage'>
        { edit ?
            <div className='form'>
                <div>
                    <TextField id="title" defaultValue={content.heading} onChange={(e)=> handleOnChange(e, 'title')} placeholder='Heading' floatingLabelText='Heading'/>
                </div>
                <div>
                    <TextField
                        id="text"
                        onChange={(e)=> handleOnChange(e, 'text')}
                        defaultValue={content.text}
                        multiLine={true} rows={3} placeholder='Text' floatingLabelText='Text'
                    />
                </div>

            </div>
        :
            <div>
                <h2>
                    {content.heading}
                </h2>
                <div>
                    {content.text}
                </div>
            </div>
        }
        </div>
    )
}

export default HomePage;
