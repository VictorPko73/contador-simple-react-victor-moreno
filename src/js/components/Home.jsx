import React from "react";
import SimpleCounter from "./simpleCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	
	return (
		<div className="container ">
			<div className="row">
            <div className="counterTarget col-sm-12 mx-auto" >
					<h1>SIMPLE COUNTER</h1>
				
					<h2 className="fs-1">⏱️</h2>
				<div className="col-sm-12 mx-auto">
					<SimpleCounter/>
					
				</div>
				
			</div>
			</div>
		</div>
			

		
	);
};

export default Home;