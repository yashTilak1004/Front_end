import React from 'react';
import Sampledata from '../components/sample.json'

const AboutUs = () => {
    //console.log(Sampledata)
    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                </tr>
            </thead>
            <tbody>
            {
                Sampledata.map( (record) => {
                    let id=record.id;
                    let city =record.name;
                    let la = record.lati ;
                    let lon = record.lon;
                    return (<tr key={id}>
                        <td>{id}</td>
                        <td>{city}</td>
                        <td>{la}</td>
                        <td>{lon}</td>
                        </tr>);
                })
            }

            </tbody></table>
            
        </div>
    );
};
export default AboutUs;