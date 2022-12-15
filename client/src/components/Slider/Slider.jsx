import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import './Slider.scss'

const Slider = () => {

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cstinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cstinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cstinysrgb&w=1600",
  ]

  return (
    <div className="slider">
        <div className="container">
            <img src={data[0]} alt="image0.jpeg" />
            <img src={data[1]} alt="image1.jpeg" />
            <img src={data[2]} alt="image2.jpeg" />
        </div>
        <div className="icons">
            <div className="icon">
                <WestOutlinedIcon />
            </div>
            <div className="icon">
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider