import React from 'react'
import { searchList } from '../constants'
import styles, { layout } from '../style';
import '../search.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { googlemap } from '../assets';
import { logoSmall} from '../assets';
import Footer from './Footer';


const options = [
    'one', 'two', 'three'
];
const SearchCard = ({ image, name, price, location, amenities, gender, occupancy }) => (

    <div className='search-item'>
        <div className='image-container '>
            <img className="property-image lg:w-[300px]" src={image}></img>
        </div>
        <div className='property-detail'>

            <h3 className='property-name'><a href="/details">{name}</a></h3>
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

function _onSelect() {
    console.log("select");
}



const Search = () => {
    return (
        <div>
        <div className={`${styles.paddingX} my-10`}>

            <div className='header'>
                <div className='logoheader'>
                    <img src={logoSmall} className="w-[124px] h-[32px]" />
                </div>
                <div className='rightSection'>
                    <div className='area'>

                        <Dropdown controlClassName='propHeaderDrop' placeholderClassName="" options={options} onChange={_onSelect} value="" placeholder="Choose Area" />
                    </div>
                    <button type="" className='callbackButton'>Request Callback</button>

                </div>
            </div>

            <div className='flex'>
                <Dropdown controlClassName='dropdown' placeholderClassName="placeholder" options={options} onChange={_onSelect} value="Locality" placeholder="Select an option" />
                <Dropdown controlClassName='dropdown' placeholderClassName="placeholder" options={options} onChange={_onSelect} value="Budget" placeholder="Select an option" />
                <Dropdown controlClassName='dropdown' placeholderClassName="placeholder" options={options} onChange={_onSelect} value="Gender" placeholder="Select an option" />
                <Dropdown controlClassName='dropdown' placeholderClassName="placeholder" options={options} onChange={_onSelect} value="Occupancy" placeholder="Select an option" />
                <Dropdown controlClassName='dropdown' placeholderClassName="placeholder" options={options} onChange={_onSelect} value="Amenities" placeholder="Select an option" />

            </div>
            <div className='searchlistContainer'>
                <div className='sm-8'>
                    {searchList.map((property, index) => (
                        <SearchCard key={property.id} {...property} index={index} />
                    ))}
                </div>
                <div className='mapSection'>
                    <img src={googlemap} className='mapImg' />
                </div>
            </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Search