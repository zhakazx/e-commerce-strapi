import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, reprehenderit porro. Laudantium tempora, recusandae, alias magnam tenetur, neque tempore maxime adipisci ducimus sed error aliquid fugiat expedita architecto veritatis molestiae!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong !"
          : (loading
          ? "loading..."
          : data.map(item => (
          <Card item={item.attributes} key={item?.attributes.id} />
        )))}
      </div>
    </div>
  )
}

export default FeaturedProducts