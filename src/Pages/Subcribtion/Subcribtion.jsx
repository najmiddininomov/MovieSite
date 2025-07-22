import React from 'react'
import './Subcribtion.scss'
import Plan from '../../Components/plan/Plan'
import Prem from '../../Components/Prem/Prem'
import middle from '../../Assets/images/Container (3).png'
const Subcribtion = () => {
  return (
    <div className='Subcribtion'>
        <div className="container">
        <Plan/>
        <img src={middle} alt="" />
        <Prem/>
        </div>
    </div>
  )
}

export default Subcribtion