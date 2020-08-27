import React from 'react';



const Header = () => {

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand font-weight-bolder text-success">E-Learning</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <h1 className="bg-secondary text-light">Welcome to E-Learning</h1>
        </div>
    );
};

export default Header;