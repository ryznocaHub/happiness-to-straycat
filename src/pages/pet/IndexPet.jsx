import React, { useState } from "react";

import List from "./List";
import Show from "./ShowPet";
import FormSection from "./FormSection";
import { useLoaderData } from "react-router-dom";
import _ from "lodash";

export const IndexPet = () => {
  const data = useLoaderData()
  const [childData, setChildData] = useState()
  const [section, setSection] = useState('list')
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

  const indexChildData = (idChildData) => {
    const index = _.findIndex(data, {id: idChildData})
    console.log("will child",data[index])
    setChildData(data[index])
  }
  return (
    <>
      <div className="flex items-center justify-start mb-10">
        {
          section != 'list' ? (
              <div onClick={()=> setSection('list')} className="mr-5 flex items-center px-5 py-5 bg-blue-400 text-white rounded-xl font-bold cursor-pointer">
                <i className="pi pi-arrow-left" style={{ fontSize: '1rem' }}></i>
              </div>
            )
            : null
        }
        <div className="header-page">
          {
            section == 'list' ? 'HOME': 
            section == 'view' ? 'PET DETAIL' :
            section == 'edit' ? 'EDIT PET INFO' :
            section == 'create' ? 'ADD NEW PET' 
            : <div>Wrong Template</div>
          }
        </div>
      </div>
      <div className="grid">
        <div className="col-12 lg:col-6 xl:col-3">
          {
            section == 'list' ? <List childData={data} setSection={setSection} indexChildData={indexChildData} /> : 
            section == 'view' ? <Show childData={childData} /> :
            section == 'edit' || section == 'create' ? <FormSection childData={childData} section={section} /> 
            : <div>Wrong Template</div>
          }
        </div>
      </div>
    </>
  );
};
