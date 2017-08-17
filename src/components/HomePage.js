import * as React from 'react';
import TextField from 'material-ui/TextField';

const HomePage = ({edit, content, handleOnChange}) => {
    return (
        <div className='homepage'>
        { edit ?
            <div className='form'>
                <img src={content.image} />
                <div>
                    <TextField id="title" defaultValue={content.title} onChange={(e)=> handleOnChange(e, 'title')} />
                </div>
                <div>
                    <TextField
                        id="text"
                        onChange={(e)=> handleOnChange(e, 'text')}
                        defaultValue={content.text}
                        multiLine={true}
                    />
                </div>

            </div>
        :
            <div>
                <img src={content.image} />
                <h1>
                    {content.title}
                </h1>
                <div>
                    {content.text}
                </div>
            </div>
        }
        </div>
    )
}

export default HomePage;
