import React from 'react'
import './homePage.scss'
import SearchBar from '../../src/components/searchBar/SearchBar'

const homePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                    Find Real Estate & Get Your Dream Place
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Tenetur ratione dolorem eligendi vitae asperiores mollitia rerum 
                    magni aspernatur molestiae illum ipsa eum, earum molestias ipsum
                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h3>16+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="box">
                        <h3>200</h3>
                        <p>Award Gained</p>
                    </div>
                    <div className="box">
                        <h3>1200+</h3>
                        <p>Property Ready</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default homePage

