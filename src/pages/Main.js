import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { Card } from '../components/Card'

export const Main = ({ setData }) => {
  const history = useHistory()

  const handleBuy = (title) => {
    const hardcoded = {
      person_id: 4,
      mobile_phone: '77077887796',
      product: title,
    }

    axios
      .post('/application/apply-application', hardcoded)
      .then((r) => {
        if (r.status === 200) {
          setData(r.data)
          history.push('/questionary')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Shop market</h2>
      <div
        style={{
          width: '60%',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          margin: '40px auto',
        }}
      >
        {products.map((product) => (
          <Card key={product.title} product={product} handleClick={handleBuy} />
        ))}
      </div>
    </div>
  )
}

const products = [
  {
    title: 'Iphone 12 mini',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    src: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201014082220380043/201106080014357680.png@webp',
  },
  {
    title: 'Iphone 12',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    src: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/210421075103588110/210421160012563685.png@webp',
  },
  {
    title: 'Iphone 12 pro',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
    src: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201014082226884292/201106080017629294.png@webp',
  },
]
