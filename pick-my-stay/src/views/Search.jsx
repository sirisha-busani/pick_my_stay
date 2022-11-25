import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../style';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { Property } from '../model/Property';

function Search() {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
 // const {id,name} = useParams();
 

  const listOfProperties = [
    {
      "fid": "1",
      "facilityCode": "PMS1000",
      "facilityName": "Sai Hostels",
      "title": "",
      "details": "",
      "cityCode": "Hyd",
      "locationCode": "AMPT",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "rentMonthly": "5000",
      "advanceMonths": "1",
      "rentIncludeGST": "True",
      "unitTypes": "Double , Single , Triple",
      "occupancy": "10",
      "available": "5",
      "gender": "Male,Female",
      "mapUrl": "https://www.google.com/maps/@17.4370299,78.4410784,15z",
      "longitude": "",
      "latitude": "",
      "listOfAmenities": [
        {
          "amenityCode": "AB",
          "amenityName": "Attached Balcony"
        },
        {
          "amenityCode": "SW",
          "amenityName": "Shared Washroom"
        },
        {
          "amenityCode": "AW",
          "amenityName": "Attached Washroom"
        },
        {
          "amenityCode": "SS",
          "amenityName": "Storage Shelf"
        },
        {
          "amenityCode": "W",
          "amenityName": "Window"
        }
      ],
    },
    {
      "fid": "2",
      "facilityCode": "PMS1001",
      "facilityName": "OYO Rooms",
      "title": "",
      "details": "",
      "cityCode": "Hyd",
      "locationCode": "AMPT",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "rentMonthly": "6000",
      "advanceMonths": "1",
      "rentIncludeGST": "True",
      "unitTypes": "Double , Single",
      "occupancy": "10",
      "available": "5",
      "gender": "Female",
      "mapUrl": "https://www.google.com/maps/@17.4370299,78.4410784,15z",
      "longitude": "",
      "latitude": "",
      "listOfAmenities": [
        {
          "amenityCode": "AB",
          "amenityName": "Attached Balcony"
        },
        {
          "amenityCode": "SW",
          "amenityName": "Shared Washroom"
        },
        {
          "amenityCode": "AW",
          "amenityName": "Attached Washroom"
        },
        {
          "amenityCode": "SS",
          "amenityName": "Storage Shelf"
        },
        {
          "amenityCode": "W",
          "amenityName": "Window"
        }
      ],
    }

  ]


  //useEffect(() => {
    // axios
    //   .post('http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfProperties', {
    //     "clientID": "100005",
    //     "userName": "Admin",
    //     "location": "AMPT",
    //     "amountStartRange": 0,
    //     "amountEndRange": 0
    //   },{
        
    //       Accept: "application/json",
    //       "Content-Type": "application/json;charset=UTF-8",
    //       "Access-Control-Allow-Origin": "true"
    //     })
    //   .then((response) => {
    //     console.log(response);
    //   });
  //   var p=new Property();
  //   p.clientID = "12334"
  //   p.amountEndRange = 0
  //   p.amountStartRange =0
  //   p.location="AMPT"
  //   p.userName = "Admin"
  //   fetch('http://pmsapis.crisprsys.net/api/WebsiteAPI/GetListOfProperties', {
  //     method: 'POST',
  //     // headers: {
  //     //   'Content-type': 'application/json; charset=UTF-8',
  //     // },
  //     //mode: 'no-cors', 
  //     body: p,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setOptions(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  return (
    <div>
      <div className="container">
        <Header></Header>
        <div>
          {listOfProperties.map((item, i) =>
            <div class="flex justify-start mb-6 md:w-2/3">
              <div class="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-72 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://media-cdn.tripadvisor.com/media/photo-s/05/ff/f4/15/world-square-hostel.jpg" alt="" />
                <div className="p-6 flex flex-col justify-start w-full">
                  <h5 className="text-gray-900 text-xl font-medium mb-1" onClick={() => {
                    /* 1. Navigate to the Details route with params */
                    navigate(`/details/${item.facilityCode}`);
                  }}>{item.facilityName}</h5>
                  {/* <p className="text-gray-600 text-xs mb-2">{item.facilityCode}</p> */}
                  <div className='occupancy-header text-sm flex flex-row'>
                    <div>
                      {item.gender}
                    </div>
                    <div className='mx-5'>|</div>
                    <div className=''>{item.unitTypes}</div>
                  </div>
                  <p className="text-gray-600 text-xs mt-2 font-semibold">Amenities</p>
                  <div className='occupancy-header text-xs flex flex-wrap'>{item.listOfAmenities.map((amenity) =>
                    <div>
                      <div className={styles.tabs}>{amenity.amenityName}</div>
                    </div>
                  )}</div>
                  <div className='flex space-x-10'>
                    <div className='flex flex-col'>
                      <p className="text-gray-600 text-xs font-semibold">Starts from</p>
                      <h5 className='"text-gray-900 font-bold'>{item.rentMonthly}/mo*</h5>
                    </div>
                    <div className='flex flex-col'>
                      <p className="text-gray-600 text-xs font-semibold">Available</p>
                      <h5 className='"text-gray-900 font-bold'>{item.available}</h5>
                    </div>
                  </div>
                  {/* <p class="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p> */}

                </div>
              </div>
            </div>)}

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Search