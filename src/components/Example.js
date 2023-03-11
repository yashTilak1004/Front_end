import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../change.css';
const pad={
    marginTop:"10px",
    marginBottom:"10px",
    color:"white",
    border:"solid"
};
const box={
    marginTop:"10px",
    marginBottom:"10px",
    color:"black",
    fontSize:"18px",
    border:"solid",
    backgroundColor:"lightgrey"
}
function Example()
{
    return (
        <div className="container-fluid">
            <Header/>
            <div className="card bg-secondary" style={pad}>
                <div className="card-body">
                    <h5 className="card-title">IIT H research grant</h5>
                    <p className="card-text">Artificial Intelligence</p>
                </div>
            </div>

            <div className="container-fluid " style={box}>
                <h4>Grant Provided:17000000</h4>
                In order to better understand the performance, features, and limitations of cloud networking, the reader needs to understand the underlying switch fabric technology. In this chapter, we review several basic switch fabric architectures including shared bus, shared memory, crossbars, and output-queued designs. Next, we describe several multistage switch fabric topologies including ring, mesh, star, and clos/fat-tree configurations. For these topologies, we investigate sources of congestion along with several methods to deal with congestion such as load balancing, buffering, flow control, and traffic management. Finally, we provide examples of several switch chip architectures in use today along with the advantages and disadvantages of each.
                Theory is a set of interrelated concepts, definitions, and propositions that explains, predicts, and models relationships and outcomes. Formal theoretical cyber security research is the deliberate approach to developing these concepts, definitions, and propositions for cyber security. A key feature of a good theory is that it is testable, i.e., a theory should inform a hypothesis and this hypothesis can then be used to design and conduct experiments to test its validity. This chapter defines the terms and concepts of theory before describing a process to develop a strong theory. The challenges in developing cyber security science theory are outlined. The exploration of concepts through examples in research in cyber security is then discussed before ending the chapter by outlining the suitable presentation of theory research.
            </div>
            <h4 >University Name:Indian Institute of Technology-Hyderabad</h4>

            <div className="container-fluid" style={box}>
                <div>
                    Indian Institute of Technology Hyderabad (IITH) is a premier institute of science and technology established in 2008. IITH has been consistently ranked in the top 10 institutes in India for Engineering according to NIRF making it one of the most coveted schools for science and technology in the country.

                    IITH offers undergraduate programs in all the classical engineering disciplines, applied sciences, design, as well as several modern interdisciplinary areas. Students are given a flexibility to explore a broad set of areas, and potentially pursue a minor or double major in a discipline that is not their own. Students who wish to seek a deeper understanding of their own discipline are strongly encouraged to get involved in cutting-edge research with the help of a faculty to mentor them, and earn an Honors in their own field.
                 </div>
            </div>

            <div className='container-fluid'>
            <div className="row">
                <div className="col-3  " style={box}>
                    <p>Prerequisites</p>
                    M-Tech in CSE
                </div>

                <div className="col-3 offset-6">
                    <button className="btn btn-secondary" type="submit" style={{marginTop:"10px",marginBottom:"20px"}}>Download Page</button>
                </div>
                </div>
            
            <Footer/>
        </div>
        </div>
    )
}
export default Example;