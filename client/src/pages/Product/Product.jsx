import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"
import './Product.scss'

const Product = () => {
  const id = useParams().id;
  const uploadUrl = import.meta.env.VITE_UPLOAD_URL
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(0)
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );
  console.log(data)
  
  console.log("uploadUrl: " + uploadUrl)
  console.log("imgUrl: " + data?.attributes?.img2?.data?.attributes?.url)
  console.log("image: " + uploadUrl + data?.attributes?.img2?.data?.attributes?.url)

  return (
    <div className="product">
    {loading ? (
      "loading"
    ) : (
      <>
        <div className="left">
          <div className="images">
            <img
              src={
                uploadUrl +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img")}
            />
            <img
              src={
                uploadUrl +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              onClick={(e) => setSelectedImg("img2")}
            />
          </div>
          <div className="mainImg">
            <img
              src={
                uploadUrl +
                data?.attributes[selectedImg]?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">${data?.attributes?.price}</span>
          <p>{data?.attributes?.desc}</p>
          <div className="quantity">
            <button
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
              }
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default Product