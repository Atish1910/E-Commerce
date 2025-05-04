import React from 'react';

// when we fetching data from api it took some time because of server call or network issue till that time we show this spinner
const Spinner = () => {
    return (
        <div className='vh-100 bg-light text-center'>
            <h1>Please Wait Data is loading</h1>
        </div>
    );
};

export default Spinner;