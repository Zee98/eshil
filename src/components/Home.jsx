import React from 'react';
import Landing from './landingPage/firstSection';
import SecondSection from './landingPage/secondSection';
import ThirdSection from './landingPage/thirdSectioin';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <Landing></Landing>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            </>
        )
    }
}

export default Home;