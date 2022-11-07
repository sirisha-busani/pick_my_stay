import React from 'react'
import { searchList } from '../constants'
import styles, { layout } from '../style';
import '../search.css';

const SearchCard = ({ image, name, price, location, amenities, gender, occupancy }) => (

    <div className='search-item'>
        <div className='image-container '>
            <img className="property-image lg:w-[300px]" src={image}></img>
        </div>
        <div className='property-detail'>

            <h3 className='property-name'>{name}</h3>
            <div className='property-location'>{location}</div>
            <div className='occupancy-header'>
                <div className='gender'>
                    {gender}
                </div>
                <div className='seperator'>|</div>
                <div className='occupancy-details'>{occupancy}</div>
            </div>
            <div className='amenities-block'><div className='amenities-title'>Amenities</div>
                <div className='amenities'>{amenities.map((property, index) => (
                    <div className='amenity'>{property}</div>))}</div>
            </div>
            <div className='price-block'>
                <div className='starts-from'>
                    <div className='starts-from-label'>Starts from</div>
                    <div className='starts-from-price'>{price}</div>
                </div>
            </div>
        </div>
    </div>
)

const Search = () => {
    return (
        <div className={`${styles.paddingX}`}>
            {searchList.map((property, index) => (
                <SearchCard key={property.id} {...property} index={index} />
            ))}
        </div>

    )
}

export default Search