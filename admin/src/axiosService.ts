import axios, { AxiosResponse } from "axios";
const access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJLcmF0b3MwOSIsImRfaWQiOjEsImZuYW1lIjoiS3VuZGFuIiwibG5hbWUiOiJZYWRhdiIsImdlbmRlciI6Ik1BTEUiLCJkb2IiOiIxOTk4LTEyLTA5VDAwOjAwOjAwLjAwMFoiLCJtb2JpbGUiOiI3MjI4OTg4MDMyIiwiYWx0ZXJuYXRlMSI6bnVsbCwiYWx0ZXJuYXRlMiI6bnVsbCwiZW1haWwiOiJrdW5kYW55YWRhdjQxQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJHaGFyIiwicGFzc3dvcmQiOiI4MWRjOWJkYjUyZDA0ZGMyMDAzNmRiZDgzMTNlZDA1NSIsInN0YXR1cyI6MCwibW9kaWZpZWRfYnkiOm51bGwsIm1vZGlmaWVkX2F0IjoiMjAyMy0wMi0yMFQwMDowMDowMC4wMDBaIiwiZGVzaWduYXRpb24iOiJBRE1JTiIsImlhdCI6MTY3Nzc2NDMzNywiZXhwIjoxNjc3NzY3OTM3fQ.A077GvfQH2qWj9ax3g7Bab8Exfv91JX0r858Uaz1-LQ';
const refresh = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJLcmF0b3MwOSIsImRfaWQiOjEsImZuYW1lIjoiS3VuZGFuIiwibG5hbWUiOiJZYWRhdiIsImdlbmRlciI6Ik1BTEUiLCJkb2IiOiIxOTk4LTEyLTA5VDAwOjAwOjAwLjAwMFoiLCJtb2JpbGUiOiI3MjI4OTg4MDMyIiwiYWx0ZXJuYXRlMSI6bnVsbCwiYWx0ZXJuYXRlMiI6bnVsbCwiZW1haWwiOiJrdW5kYW55YWRhdjQxQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJHaGFyIiwicGFzc3dvcmQiOiI4MWRjOWJkYjUyZDA0ZGMyMDAzNmRiZDgzMTNlZDA1NSIsInN0YXR1cyI6MCwibW9kaWZpZWRfYnkiOm51bGwsIm1vZGlmaWVkX2F0IjoiMjAyMy0wMi0yMFQwMDowMDowMC4wMDBaIiwiZGVzaWduYXRpb24iOiJBRE1JTiIsImlhdCI6MTY3Nzc2NDMzN30.dCMj56C4Hw7y3BGSUffjglCRoUAH-q1w-N5yVLEeYMo';
const fetchClient = () => {
  const defaultOptions = {
    baseURL: "",
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("asd,");

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  const responseIntercepter = (response: AxiosResponse) => {
    return response;
  };

  instance.interceptors.response.use(responseIntercepter, (err) => {
    if (!err) return;
    
    const expectedErrors =
      err.response && err.response.status >= 400 && err.response.status < 500;
    if (!expectedErrors) {
      console.log(err, "err");
      return;
    } else {
      if (err.response.status === 401) {
        return false;
        return instance({
          method: "post",
          url: "http://35.154.165.33:9000/api/refresh/access",
          data: {
            token: 'refresh' //localStorage.getItem("refresh_token"),
          },
          headers: {
            "x-access-token":refresh // localStorage.getItem("access_token"),
          },
        }).then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          window.location = new Location();
        });
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("userId");
        // const navigate = useNavigate();
        // navigate("/login");
      }
      return Promise.reject(err);
    }
  });

  return instance;
};

export default fetchClient();
