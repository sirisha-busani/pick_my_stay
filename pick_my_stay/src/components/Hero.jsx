import styles,{layout} from '../style';
import {discount , robot} from '../assets'; 
import GetStarted from './GetStarted'
import { productCard } from '../constants';
import ProductCard from './ProductCard';
import Banner from './Banner';

const Hero = () =>  (
  <section id="home" className={`flex md:flex-row flex-col`}>
  <div className={`${styles.flexJustifyStart} xl:px-0 w-[70%]`}>
  
    <Banner/>

    
  </div>
  <div className='w-[30%]'>
  <div className={`${layout.sectionImg} flex-col`}>
        {productCard.map((product,index)=>(
          <ProductCard key={product.id} {...product} index={index}/>
        ))}
      </div>
  </div>
 
  
</section>
  )

export default Hero