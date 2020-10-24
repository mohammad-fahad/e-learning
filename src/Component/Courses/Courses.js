import React, { useState } from 'react';
import CourseData from '../courseData/CourseData';
import Cart from '../Cart/Cart';




const Courses = () => {
    const [course, setCourse] = useState(CourseData);
    const [cart, setCart] = useState([]);

    const handleAdd = (cr) => {
        const newCart = [...cart, cr];
        setCart(newCart);

    }

    return (
        <div className="d-flex " style={{ margin: "110px 10px" }}>
            <div className="col-md-10 courseDiv">
                {
                    course.map(cour =>
                        <div key={cour.id} className="card mb-3" >
                            <div className="row ">
                                <div className="col-md-3 d-flex">
                                    <img src={cour.image} className="card-img" alt="Course Image" />




                                </div>
                                <div className="col-xl-9">
                                    <div className="card-body align-self-stretch">
                                        <h1 className=" text-info">{cour.title}</h1>
                                        <p className="card-text">{cour.body}</p>
                                        <h5>Price: ${cour.price}</h5>
                                        <button className="btn btn-success" onClick={() => handleAdd(cour)}>Enroll Now!</button>
                                    </div>
                                </div>

                            </div>


                        </div>)
                }
            </div>
            <div className="col-md-2">
                <Cart cart={cart}></Cart>
            </div>
        </div>);


};

export default Courses;



