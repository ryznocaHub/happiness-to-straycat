import setupAxios from "@api/setupAxios";
import { MasterLayout } from "@layouts/MasterLayout";
import Login from "@pages/auth/Login";
import { Pet } from "@pages/index";
import axios from "axios";
import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";


setupAxios(axios)

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <MasterLayout/>
        }
      >
        <Route
          path="pet"
        >
          <Route
            path=""
            element={Pet.Index}
            // loader={async () => {
            //   const data = await getAllArticle({limit:5,offset:0,search:''})
            //   return await data.data.value
            // }}
          />
          
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to={'/pet'} />} />
    </>
  )
);
