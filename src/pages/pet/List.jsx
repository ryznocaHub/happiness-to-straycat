import React from 'react'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Tag from "@components/Tag";
import { Link } from "react-router-dom";
import HeaderCard from '@components/atom/headerCard';
import { Button } from 'primereact/button';
const List = ({childData, setSection, indexChildData}) => {
    
    const ageBody = (dummyPet) => {
        return <div>{dummyPet.age} year</div>;
    };
    const statusBody = (dummyPet) => {
        return (
            <Tag
            label={dummyPet.payment_status ? "Paid Off" : "On Credit"}
            color={dummyPet.payment_status ? "green" : "red"}
            />
        );
    };
    const foodBody = (dummyPet) => {
        return (
            <div>
            {dummyPet.fav_food?.map((food, idx) => {
                if (idx === dummyPet.fav_food?.length - 1) return food;
                const text = food + ", ";
                return text;
            })}
            </div>
        );
    };
    const actionBody = (data) => {
        return <div className="flex">
            <div onClick={() => {indexChildData(data.id);setSection('edit')}} className="px-3 py-2 bg-yellow-100 text-amber-500 border border-amber-500 rounded-full cursor-pointer">
                <i className="pi pi-pencil" style={{ fontSize: '1rem' }}></i>
            </div>
            <div onClick={() => {indexChildData(data.id); setSection('view')}} className="ml-5 px-3 py-2 bg-teal-100 text-blue-500 border border-blue-500 rounded-full cursor-pointer">
                <i className="pi pi-eye" style={{ fontSize: '1rem' }}></i>
            </div>
        </div>;
    };
    
  return (
    <>
        <div className="card mb-0">
            <div className='flex justify-between items-center mb-8'>
                <HeaderCard text={'Pet List'}/>
                <div onClick={()=> setSection('create')} className="flex items-center px-7 py-4 bg-blue-400 text-white rounded-xl font-bold cursor-pointer">
                    New Pet
                </div>
            </div>
            <DataTable value={childData} stripedRows showGridlines>
                <Column field="name" header="Name"></Column>
                <Column field="gender" header="Gender"></Column>
                <Column field="age" header="Age" body={ageBody}></Column>
                <Column
                    field="fav_food"
                    header="Favorite Food"
                    body={foodBody}
                ></Column>
                <Column
                    header="Payment Status"
                    body={statusBody}
                    style={{ width: "10%" }}
                ></Column>
                <Column field="" header="" body={actionBody} style={{ width: "10%" }}></Column>
            </DataTable>
        </div>
    </>
  )
}

export default List