import { useAuthStore } from "@stores/authStore";


export default function setupAxios(axios) {
  // setup axios interceptors request
  axios.interceptors.request.use(
    (request) => {
      const token = useAuthStore.getState().token;

      if (token) {
        request.headers.Authorization = token;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // setup axios interceptors response
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {

      if (
        (error.response.status === 401 ||
          error.response.statusText === "Unauthorized")
      ) {
      }
      return error.response;
    }
  );
}
