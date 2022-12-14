import React from 'react'
import {stats} from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={ `${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row mx-1 my-3 bg-gray-200 rounded-[10px]`}>
        <img src={stat.icon} className="px-2"/>
        <h4 className=' font-semibold font-xl text-[30px] xs:leading-[53px] leading-[43px] text-dark'>{stat.value}</h4>
        <p className=' font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase'>{stat.title}</p>
      </div>
      )}
    </section>
  )
}

export default Stats