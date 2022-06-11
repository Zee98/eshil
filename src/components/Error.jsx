import React from 'react';

class Error extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <h1 className='text-danger text-center'>Page not found.</h1>
        )
    }
}

export default Error;