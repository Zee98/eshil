import React from 'react'
class ThirdSection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="container">
                        <h1 className='text-center mt-5'>The Perfect Solution to Your 
                        <br/> Business and Customers
                        </h1>
                        <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin consectetur justo quis euismod vehicula. <br/>
                            Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                        </p>
                    <div className="row my-5 ">
                        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
                            <div class="card shadow p-3 border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-outline-success">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
                            <div class="card p-3 shadow border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-outline-success">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 px-4">
                            <div class="card shadow p-3 border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-outline-success">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdSection;