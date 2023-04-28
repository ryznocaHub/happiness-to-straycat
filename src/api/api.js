import Domain from "@utils/constanta";
import { get, post } from "./HttpRequest";
import { petList } from "./dummy/petList";
import { ownerDetail } from "./dummy/ownerDetail";

export const login = async (body) => {
  return await post(`${Domain}/api/auth/login`, body);
};

export const register = async (body) => {
  return await post(`${Domain}/api/auth/register`, body);
};

// =====================================   PET   ===============================================

export const getPetList = async () => {
  return petList;
  // return await get(`${Domain}/api/pet/list`);
};

export const getUserDetail = async ({owner_id}) => {
  console.log("ya")
  return ownerDetail
    // return await get(`${Domain}/api/pet/list`);
}
