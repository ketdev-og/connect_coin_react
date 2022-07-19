import React from 'react'
import { StyledActions } from './StyledActions'

const Actions = () => {
  return (
    <StyledActions className="head_details my-36">
        <div className="hd_title text-center">
          <span className="text-2xl font-semibold">Buy and Sell Cryptocurrency</span>
        </div>
        <div className="hd_contents grid grid-cols-4 py-8 px-8 mt-4">
          <div>
            <p>2.3B USD</p>
            <p>Yearly Trading Volume</p>
          </div>
          <div>
            <p>8M</p>
            <p>Users</p>
          </div>
          <div>
            <p>190+</p>
            <p>Countries</p>
          </div>
          <div>
            <p>150+</p>
            <p>Payment Methods & Currencies</p>
          </div>
        </div>
      </StyledActions>
  )
}

export default Actions