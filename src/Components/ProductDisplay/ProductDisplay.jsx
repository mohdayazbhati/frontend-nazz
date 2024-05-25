import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
     const {product} = props
     const {addToCart} = useContext(ShopContext);
     const {removeFromCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
            <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
       </div>
       <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon}alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                1. Elevate your wardrobe with our Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse, a versatile piece that effortlessly transitions from day to night. The flutter sleeves add a touch of femininity, while the peplum hem creates a flattering silhouette.
2. The overlap collar detail adds a modern twist to this classic striped blouse, making it a stylish choice for any occasion. Crafted from high-quality materials, this blouse is both comfortable and chic, perfect for pairing with your favorite jeans or trousers. Upgrade your look with this must-have piece today.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXl</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>Women , T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
       </div>
    </div>
  )
}

export default ProductDisplay
