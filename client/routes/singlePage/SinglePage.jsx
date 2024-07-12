import React from 'react'
import './singlePage.scss'
import Slider from '../../src/components/slider/Slider'
import { singlePostData } from '../../src/lib/dummydata'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}  />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
              </div>
              <div className="user"></div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default SinglePage