import { getPetList } from "@api/api";
import setupAxios from "@api/setupAxios";
import { MasterLayout } from "@layouts/MasterLayout";
import Login from "@pages/auth/Login";
import { Register } from "@pages/auth/register";
import { IndexPet, User } from "@pages/index";
import { useAuthStore } from "@stores/authStore";
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
          index
          path="pet"
          loader={async () => {
            const data = await getPetList()
            return data.value
          }}
          element={<IndexPet/>}
        />
        <Route
          index
          path="profile"
          element={<User/>}
        />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to={'/pet'} />} />
    </>
  )
);
