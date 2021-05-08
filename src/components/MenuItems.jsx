import React from 'react';

function MenuItems({ menuItems }) {
    return (
        <div className="row">
            {menuItems.map((item) => {
                const { title, price, category, image, desc } = item;
                return (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
                        <img src={image} alt={title} className="img-fluid" />
                        <h3 className="text-capitalize">{title}</h3>
                        <h6 className="text-danger">{category}</h6>
                        <p>{desc}</p>
                        <button type="button" className="btn btn-danger">
                            ${price}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default MenuItems;
