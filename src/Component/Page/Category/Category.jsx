import React from 'react';

const Category = ({ chef }) => {
    const { id, name } = chef;
    return (
        <div className="col">
            <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;