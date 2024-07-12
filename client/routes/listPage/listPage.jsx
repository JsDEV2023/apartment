import React from 'react'
import Filter from '../../src/components/filter/filter'
import './listPage.scss'
import { listData } from '../../src/lib/dummydata'
import Card from '../../src/components/card/Card'
import Map from '../../src/components/map/Map'

const listPage = () => {

  const data = listData
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item => {
            return (
              <Card key={item.id} item={item}/>
            )
          })}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default listPage