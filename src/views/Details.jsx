import React, { useEffect, useState } from 'react'
import '../styles/details.css';
import styles from '../style';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { googleMap } from '../assets';
import { useParams } from 'react-router-dom';

function Details() {
    const [data, setData] = useState([]);
    const {facilityCode} = useParams();
    console.log("On routeParams $$$$" + facilityCode)
    useEffect(() => {
        fetch(`https://pickmystayapi.azurewebsites.net/api/WebsiteAPI/GetPropertyData?ClientID=100005&UserName=Admin&FacilityCode=${facilityCode}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    if (!data.listOfAmenities) {
        return null
    }
    return (
        <div>
            <div className="container">
                <Header></Header>
                <div>
                    <div>
                        <h1 className='text-secondary text-3xl font-semibold'> {data.propertyObject.facilityName}</h1>

                        <p className='text-darkGrey mb-3 font-semibold'>One of the best hostel in Ameerpet</p>
                        <p>{data.propertyObject.title}</p>

                        <div className='flex flex-row'>
                        <img className="rounded-xl w-2/3 mr-6" src="https://crisprgreentrack.s3.us-east-2.amazonaws.com/PMS/FacilityImages/PMS1000Image1.jpg" />
                        <img className='rounded-xl w-1/3' src={googleMap}/>
                        </div>
                        <p className='text-darkGrey mt-4 font-medium'>Starts from</p>
                        <h2 className='my-3 font-bold text-2xl'>{data.propertyObject.rentMonthly}/mo*</h2>
                        <p className='text-darkGrey font-medium'>*Denotes starting price exclusive of GST. Prices may vary with room occupancy and attributes.</p>
                    </div>
                    <div className='my-3 text-sm'>
                        <h3 className="w-full text-secondary font-semibold mb-2">Available Occupancies</h3>
                        <div className='tabsSection'>
                            {data.listOfUnitTypes.map((item, i) =>
                                <div className='mr-6'><div className="">{item.unitType}</div><div class="font-bold"> {item.unitRent}</div></div>)}
                        </div>
                    </div>
                    <div className='my-3 text-sm'>
                        <h3 className="w-full text-secondary font-semibold mb-2">Amenities</h3>
                        <div className='tabsSection'>
                            {data.listOfAmenities.map((item, i) => <div className={styles.tabs}>{item.amenityName}</div>)}
                        </div>
                    </div>
                    <div className='my-3 text-sm'>
                        <h3 className="w-full text-secondary text-md font-semibold mb-2">Services</h3>
                        <div className='tabsSection'>
                            {data.listOfServices.map((item, i) => <div className={styles.tabs}>{item.serviceName}</div>)}
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>

        </div>
    )
}

export default Details