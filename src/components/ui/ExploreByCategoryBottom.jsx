import React from 'react';
import '../../styles/exploreby-category-bottom.css';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import cardTopVector from "../../images/products/card-top-vector.png";
import batteries from '../../images/explorebycategory/batteries.jpg'
import craft from '../../images/explorebycategory/craft.jpg'
import earbuds from '../../images/explorebycategory/earbuds.jpg'
import mobile from '../../images/explorebycategory/mobile.jpeg'
import speaker from '../../images/explorebycategory/speaker.jpg'
import kitchen from '../../images/explorebycategory/kitchen.jpg'
// Dummy data for now (later replace with API data)
const products = [
    {
        id: 1,
        name: "Speakers",
        img: speaker,

    },
    {
        id: 2,
        name: "Batteries",
        img: batteries,

    },
    {
        id: 3,
        name: "Crafts",
        img: craft,

    },
    {
        id: 4,
        name: "Kitchen Applicances",
        img: kitchen,

    },
    {
        id: 5,
        name: "Earbuds",
        img: earbuds,

    },
    {
        id: 6,
        name: "Mobile Phones",
        img: mobile,

    },


];

const ExploreByCategoryBottom = () => {
    return (
        <section className='similar-products mt-5'>
            <div className="container px-0">
                <h3 className='mb-2 section-heading'>Explore By Categories</h3>
                <div className="exploreby-card-outer  ">

                    {products.map((product) => (

                        <div className="card-cat-outer d-flex justify-content-center align-items-center flex-wrap" key={product.id}>
                            {/* <div className="category-cards">


                            </div> */}
                            <div
                                className="category-cards"
                                style={{
                                    backgroundImage: `url(${product.img})`, 
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: "150px",
                                    height: "150px", // Adjust height as needed
                                }}
                            >
                            </div>

                            <div className="cat-title">
                                <p className='text-center m-0'><b>{product.name}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreByCategoryBottom;
