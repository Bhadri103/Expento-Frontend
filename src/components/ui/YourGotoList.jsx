import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import Tatasalt from '../../images/yourgotoitems/tata-salt.jpg'
import '../../styles/home.css'
const YourGotoList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Tata Salt', weight: '1 kg', price: 30, offPrice: 28, image: Tatasalt },
        { id: 2, name: 'Fortune Sunflower Oil', weight: '1 L', price: 170, offPrice: 160, image: 'https://cdn.shopaccino.com/edible-smart/products/fortune-sunflower-oil-374636_m.jpg?v=530' },
        { id: 3, name: 'Aashirvaad Atta', weight: '5 kg', price: 300, offPrice: 280, image: 'https://m.media-amazon.com/images/I/71p1ZlnTKXL._AC_UF1000,1000_QL80_.jpg' },
        { id: 4, name: 'Nestlé Everyday Dairy Whitener', weight: '500 g', price: 210, offPrice: 195, image: 'https://m.media-amazon.com/images/I/71qhf77htmL.jpg' },
        { id: 5, name: 'Red Label Tea', weight: '250 g', price: 120, offPrice: 110, image: 'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-03-12/Brooke_Bond_Tea_Leaf_-_Red_Label_Tea_250gm.jpg' },
        { id: 6, name: 'Amul Butter', weight: '500 g', price: 270, offPrice: 260, image: 'https://chefspecial.in/wp-content/uploads/2024/05/AMUL-BUTTER-8GM.png' },
        { id: 7, name: 'Parle-G Biscuits', weight: '800 g', price: 80, offPrice: 75, image: 'https://m.media-amazon.com/images/I/91eC2O5IN5L.jpg' },
        { id: 8, name: 'Kellogg’s Corn Flakes', weight: '1 kg', price: 420, offPrice: 400, image: 'https://www.quickpantry.in/cdn/shop/files/Kelloggs_Corn_Flakes.webp?v=1737307755&width=1000' },
        { id: 9, name: 'Bru Instant Coffee', weight: '200 g', price: 320, offPrice: 300, image: 'https://m.media-amazon.com/images/I/61CLD2ttBgL.jpg' },
        { id: 10, name: 'Maggi Noodles Pack', weight: '560 g', price: 96, offPrice: 90, image: 'https://www.quickpantry.in/cdn/shop/products/maggi-masala-instant-noodles-70-g-quick-pantry_500x500.jpg?v=1710537948' },
        { id: 11, name: 'Haldiram’s Namkeen', weight: '400 g', price: 150, offPrice: 140, image: 'https://grocia.in/wp-content/uploads/2022/01/Haldirams-Namkeen-Punjabi-Tadaka-220-gm.png' },
        { id: 12, name: 'Bournvita Health Drink', weight: '1 kg', price: 450, offPrice: 430, image: 'https://m.media-amazon.com/images/I/61oRJDWrXRL.jpg' },
        { id: 13, name: 'Dabur Honey', weight: '1 kg', price: 400, offPrice: 380, image: 'https://m.media-amazon.com/images/I/71UjuhDDeFL.jpg' },
        { id: 14, name: 'Britannia Cheese Slices', weight: '200 g', price: 140, offPrice: 130, image: 'https://m.media-amazon.com/images/I/61j61KoZYIL._AC_UF1000,1000_QL80_.jpg' },
        { id: 15, name: 'Tropicana Orange Juice', weight: '1 L', price: 120, offPrice: 115, image: 'https://m.media-amazon.com/images/I/71c3L5Q6gCL.jpg' },
        { id: 16, name: 'Sunfeast Dark Fantasy', weight: '300 g', price: 180, offPrice: 170, image: 'https://m.media-amazon.com/images/I/71U6Dn3aeQL.jpg' },
        { id: 17, name: 'Lays Chips (Classic Salted)', weight: '52 g', price: 20, offPrice: 18, image: 'https://www.quickpantry.in/cdn/shop/products/lay-s-chile-limon-potato-chips-32-g-quick-pantry.jpg?v=1710539171&width=900' },
        { id: 18, name: 'Patanjali Ghee', weight: '1 L', price: 590, offPrice: 570, image: 'https://m.media-amazon.com/images/I/61vZ2hzD+gL.jpg' },
        { id: 19, name: 'Nescafé Classic Coffee', weight: '100 g', price: 299, offPrice: 285, image: 'https://m.media-amazon.com/images/I/71CEjr6Rj2L.jpg' },
        { id: 20, name: 'Good Day Butter Cookies', weight: '600 g', price: 150, offPrice: 140, image: 'https://m.media-amazon.com/images/I/61DCuMSaVLL._AC_UF1000,1000_QL80_.jpg' },
    ]);


    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; // Number of products per page
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(true); // Expand on click
    };
    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [searchTerm, products]);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


    // Track expansion per product
    const [expandedProducts, setExpandedProducts] = useState({});

    const toggleExpand = (id) => {
        setExpandedProducts(prevState => ({
            ...prevState,
            [id]: !prevState[id] // Toggle the specific product
        }));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="yourGoToItems">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 d-flex justify-content-between align-items-center">

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="form-control"
                        />

                    </div>

                    {currentProducts.map(product => (
                 <div className="col-lg-3 col-sm-6 col-12" key={product.id}>
                            <div className="yourGotocardMain">
                                <div className="offerStar d-flex justify-content-center align-items-center">
                                    <p>5% Off</p>
                                </div>
                                <div
                                    className="yourgotoimgTop d-flex justify-content-center"
                                    style={{
                                        backgroundImage: `url(${product.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '200px',
                                        borderRadius: '10px'
                                    }}
                                >
                                </div>

                                <div className="yourgotoimgBottom">
                                    <p className='prodName mb-0' 
                                        onClick={() => toggleExpand(product.id)} 
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {expandedProducts[product.id] 
                                            ? product.name 
                                            : product.name.length > 10 
                                                ? product.name.substring(0, 10) + '...' 
                                                : product.name}
                                    </p>
                                    <p className="kg mb-0">{product.weight}</p>
                                    <div className="row mb-0">
                                        <div className="col-6">
                                            <p className="price mb-0"><strike>{product.price}</strike></p>
                                            <p className="off-price">{product.offPrice}</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn plusIconBtn">
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            {totalPages > 1 && (
                                <div className="col-12 mt-3 justify-content-end">
                                    <div className="pagination justify-content-end">
                                        <button
                                            className="btn btn-outline-secondary"
                                            disabled={currentPage === 1}
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            Previous
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <button
                                                key={i + 1}
                                                className={`btn ${currentPage === i + 1
                                                    ? "btn-primary"
                                                    : "btn-outline-secondary"
                                                    } mx-1`}
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                        <button
                                            className="btn btn-outline-secondary"
                                            disabled={currentPage === totalPages}
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourGotoList;