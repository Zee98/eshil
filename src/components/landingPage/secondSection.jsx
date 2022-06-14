import React from 'react'
import img from '../../v0_220.jpeg'
class SecondSection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const img_style = {
            borderRadius : '0px 70% 70% 70%'
        }
       
        return (
            <div style={{backgroundColor:'#F7FFF6'}}>
                <div className="container p-5" >
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                            <div className="container p-4">
                                <img className='img-fluid' src={img} style={img_style} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <h1 className='mt-5'>We offer the best services</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Proin consectetur justo quis euismod vehicula.
                                Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                            </p>
                            <ul>
                                <li className='m-2 '>Web designing</li>
                                <li className='m-2 '>Web developement</li>
                                <li className='m-2 '>Mobile application developement</li>
                                <li className='m-2 '>Digital marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondSection;