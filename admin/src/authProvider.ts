import axios from "axios";

const apiUrl = "http://35.154.165.33:9000/api/";

export const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }: any) => {
    return axios({
      method: "post",
      url: `${apiUrl}/admin/login`,
      headers: {
        "x-access-token": "login",
      },
      data: {
        username,
        password,
      },
    }).then((res) => {
       if(res?.data?.code == 1 ) {
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
       } else {
        throw Error(res?.data?.message || 'Something Went Wrong')
       }
    });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: any) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("access_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("access_token")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
