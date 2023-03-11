import React from 'react';
import Header from './../Header';
import Footer from './../Footer';
import '../../change.css';

const Box1={
    marginTop:"40px",
    marginBottom:"40px",
    padding:"50px",
    fontSize:"18px"
};
const Box2={
    marginTop:"30px",
    marginBottom:"30px",
    textAlign:"center",
    padding:"10px"
};
function About()
{
    return (
        <div className='container-fluid' >
            <Header/>
            <div>
                <div className="container-lg border text-dark box1" style={Box1}>
                    <p>
                    The website is made with the idea of being able to browse through multiple research grants with ease. 
                    <br />
                    <br/>
                    Lorem LoremLorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci sit, obcaecati beatae laudantium culpa distinctio aliquid
                    praesentium rerum quas debitis natus facere harum delectus! Perspiciatis, quo?
                    Fugiat iste assumenda ex.
                    </p>
                    </div>
                </div>
                <div className="container-lg border text-dark box2" style={Box2}>
                    <h3>Those who contributed to the project</h3>
                    <p>Yashwant Tilak Akuthota</p>
                </div>
            <Footer / >
        </div>
    );
}
export default About;