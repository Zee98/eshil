import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer className="" style={{backgroundColor:'#F7FFF6'}}>
                <div className="container pt-5">
                    <div className="row mt-5">
                        <div className="col">
                            <h5>this is the company text.</h5>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p><a href="#">link first</a></p> 
                                    <p><a href="#">link first</a></p> 
                                    <p><a href="#">link first</a></p> 
                                </div>
                                <div className="col">
                                    <p><a href="#">link first</a></p> 
                                    <p><a href="#">link first</a></p> 
                                    <p><a href="#">link first</a></p> 
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p>contact us here..</p>
                            <a href="#" className='display-6 mx-3'>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className='display-6 mx-3'>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className='display-6 mx-3'>
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className='display-6 mx-3'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row m-5">
                        <p className='text-center'>All rights reserved. Designed by Eshil.</p>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;
