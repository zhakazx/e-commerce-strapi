import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  const uploadUrl = import.meta.env.VITE_UPLOAD_URL
    return (
    <Link className="link" to={`/product/${item?.id}`}>
        <div className="card">
            <div className="image">
                {item?.isNew && <span>New Season</span>}
                <img src={uploadUrl + item?.img?.data?.attributes?.url} alt="" className="mainImg" />
                <img src={uploadUrl + item?.img2?.data?.attributes?.url} alt="" className="secondImg" />
            </div>
            <h2>{item?.title}</h2>
            <div className="prices">
                <h3>${item?.oldPrice || item?.price + 20 }</h3>
                <h3>${item?.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card