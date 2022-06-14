import React from 'react'
import img from '../../v0_124.jpeg'
class Landing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const img_style = {
            borderRadius : '70% 0px 70% 70%'
        }
       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <h1 className='mt-5 pt-5'>Marraige and Relationship <br/> Couching</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin consectetur justo quis euismod vehicula.
                            Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                        </p>
                        <button className='btn btn-primary rounded-5 px-4'>Contact now</button>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="container p-4">
                            <img className='img-fluid' src={img} style={img_style} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Landing;