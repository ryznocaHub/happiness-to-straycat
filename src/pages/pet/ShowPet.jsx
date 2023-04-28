import React, { useEffect, useState } from "react";
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Galleria } from 'primereact/galleria';
import HeaderCard from "@components/atom/headerCard";
import { getUserDetail } from "@api/api";

const Show = ({childData}) => {
  const [images, setImages] = useState([
    {
      alt: "Week 1",
      itemImageSrc: "/cat2.jpg"
    },
    {
      alt: "Week 2",
      itemImageSrc: "/cat.jpg"
    },
    {
      alt: "Week 3",
      itemImageSrc: "/cat3.jpg"
    },
    {
      alt: "Week 4",
      itemImageSrc: "/cat4.jpg"
    },
  ]);
  const dummyPet = [
      {
        id:1,
        name: "Mocha",
        gender: "Female",
        age: 2,
        fav_food: ["Pro Plan", "Kitchen Flavour"],
        payment_status: true,
      },
      {
        id:1,
        name: "Mocha",
        gender: "Female",
        age: 2,
        fav_food: ["Pro Plan"],
        payment_status: false,
      },
      {
        id:1,
        name: "Mocha",
        gender: "Female",
        age: 2,
        fav_food: ["Pro Plan"],
        payment_status: true,
      },
      {
        id:1,
        name: "Mocha",
        gender: "Female",
        age: 2,
        fav_food: ["Pro Plan"],
        payment_status: true,
      },
      {
        id:1,
        name: "Mocha",
        gender: "Female",
        age: 2,
        fav_food: ["Pro Plan", "Cat Choize"],
        payment_status: false,
      },
  ];
  const responsiveOptions = [
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
  ];

  const [ownerData, setOwnerData] = useState()
  useEffect(()=>{
    getOwnerDetail()
  },[])

  function getOwnerDetail () {
    getUserDetail(childData.owner_id).then(
      (response) => {
        setOwnerData(response.value)
      })
  }

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  }
  // <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  
  const thumbnailTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  }

  const caption = (item) => {
      return (
          <>
              <div className="text-xl mb-2 font-bold">{item.alt}</div>
          </>
      );
  }
    
  return (
    <>
      {/* <div className="header-page">Pet Detail</div> */}
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6 flex flex-col items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-[url('/cat.jpg')] bg-cover bg-no-repeat  bg-center"></div>
            <div className="mt-5 flex justify-center items-start w-56">
                <Link to={`edit/image/1`} style={{ fontSize: '1rem' }} className="px-3 py-2 bg-yellow-100 text-amber-500 border border-amber-500 rounded-full whitespace-nowrap">
                    <i className="pi pi-pencil mr-3"  style={{ fontSize: '1rem' }}></i>
                    <span>Change Image</span>
                </Link>
                <Link to={`edit/1`} style={{ fontSize: '1rem' }} className="ml-5 px-3 py-2 bg-yellow-100 text-amber-500 border border-amber-500 rounded-full whitespace-nowrap">
                    <i className="pi pi-pencil mr-3" style={{ fontSize: '1rem' }}></i>
                    <span>Change Info</span>
                </Link>
            </div>
        </div>
        <div className="col-span-6 ">
          <div className="mb-0 h-56 flex justify-center items-center bg-none">
            <Link style={{ fontSize: '2rem' }} className="ml-5 px-8 py-2 bg-teal-100 text-sky-500 border border-sky-500 rounded-xl font-bold">
                <i className="pi pi-play mr-3" style={{ fontSize: '2rem' }}></i>
                <span>Watch Live!</span>
            </Link>
          </div>
        </div>
        <div className="col-span-6 ">
          <HeaderCard text='Info'/>
          <div className="card grid grid-cols-12 gap-4">
              <div className=" font-bold text-4xl capitalize col-span-12">{childData.name}</div>
              <div className="col-span-8">
                  <div className="capitalize text-sm text-gray-400">gender</div>
                  <div className="capitalize font-bold mb-1">{childData.gender}</div>
                  <div className="capitalize text-sm text-gray-400">Age</div>
                  <div className="capitalize font-bold mb-1">{childData.age} years old</div>
                  <div className="capitalize text-sm text-gray-400">color</div>
                  <div className="capitalize font-bold mb-1">{childData.color}</div>
                  <div className="capitalize text-sm text-gray-400">Favorite food</div>
                  <div className="capitalize font-bold mb-1">{childData.fav_food?.map((food,idx) => {
                      if(idx == childData.fav_food.length -1){
                        return food
                      }
                      return `${food}, `
                    })}
                  </div>
              </div>
              <div className="col-span-4">
                  <div className="capitalize text-sm text-gray-400">type</div>
                  <div className="capitalize font-bold mb-1">{childData.type}</div>
                  <div className="capitalize text-sm text-gray-400">contraception</div>
                  <div className="capitalize font-bold mb-1">{childData.contraception ? 'Yes' : 'No'}</div>
                  <div className="capitalize text-sm text-gray-400">immunization</div>
                  <div className="capitalize font-bold mb-1">{childData.immunization?.map((immun,idx) => {
                      if(idx == childData.immunization.length -1){
                        return immun
                      }
                      return `${immun}, `
                    })}
                  </div>
                  <div className="capitalize text-sm text-gray-400">tag</div>
                  <div className="capitalize font-bold mb-1">{childData.tags?.map((tag,idx) => {
                      if(idx == childData.tags.length -1 ){
                        return tag
                      }
                      return `${tag}, `
                    })}
                  </div>
              </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <HeaderCard text='Owner'/>
          <div className="card grid grid-cols-12 gap-4">
              <div className=" font-bold text-4xl capitalize col-span-12">{ownerData && ownerData.name}</div>
              <div className="col-span-8">
                  <div className="capitalize text-sm text-gray-400">gender</div>
                  <div className="capitalize font-bold mb-1">{ownerData && ownerData.gender}</div>
                  <div className="capitalize text-sm text-gray-400">Age</div>
                  <div className="capitalize font-bold mb-1">{ownerData && ownerData.age} years old</div>
                  <div className="capitalize text-sm text-gray-400">email</div>
                  <div className="font-bold mb-1">{ownerData && ownerData.email}</div>
                  <div className="capitalize text-sm text-gray-400">full address</div>
                  <div className="capitalize font-bold mb-1">{ownerData && ownerData.address}</div>
              </div>
          </div>
        </div>
        <div className="col-span-6">
          <HeaderCard text='Gallery'/>
          <Galleria value={images} caption={caption} circular autoPlay transitionInterval={2000} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
        <div className="col-span-6">
          <div className="mb-8 text-3xl capitalize col-span-12 text-gray-500 underline decoration-blue-300 underline-offset-8 decoration-4">Payment History</div>
          <div className="card">
              <DataTable value={childData.payment} size="small" stripedRows showGridlines>
                  <Column field="start_date" header="Start Date" style={{ width: "25%" }}></Column>
                  <Column field="end_date" header="End Date" style={{ width: "25%" }}></Column>
                  <Column field="method" header="Payment Method"></Column>
                  <Column
                      field="status"
                      header="Payment Status"
                      style={{ width: "20%" }}
                  ></Column>
              </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
