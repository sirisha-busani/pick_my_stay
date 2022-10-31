import React from 'react'
import styles from '../style'
import { arrowRight } from '../assets'

const ProductCard = ({icon, title, content, index}) => (
    <div>
    <div className={`flex flex-row p-2 pt-0 pb-4 rounded-[20px] relative group`}>
      <img src={icon} className={`rounded-[10px]`}/>
      <div className='absolute top-[20%] left-10 w-[50%]'><p className={styles.paragraph}>{title}</p>
      <div className='w-[40px] h-[40px] rounded-[50%] bg-white flex justify-center'>
      <img src={arrowRight} className="w-[50%]"/></div>
      </div>
      

      <div className='absolute top-[1/2] opacity-0 h-0 group-hover:opacity-100 group-hover:h-full w-[100%]'>
        <span className="bg-dark text-white">{content}</span>
    </div>
    </div>
    </div>
  )

export default ProductCard