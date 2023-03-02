import { DataProvider, LegacyDataProvider, fetchUtils } from "react-admin";

import { HttpError } from "react-admin";
import axios from "./axiosService";
import { stringify } from "query-string";

export const apiUrl = "http://35.154.165.33:9000/api";
const httpClient = fetchUtils.fetchJson;

const getMany = (resource: any, id: any) => {
  let resourceUrl = resource + "/id";
  let data = {
    id: id,
  };
  const url = `${apiUrl}/${resourceUrl}`;
  return axios({
    method: "post",
    headers: {
      "x-access-token": localStorage.getItem("access_token"),
    },
    data,
    url,
  }).then((res) => {
    if (res?.data?.code == 1) {
      return {
        data: res.data.data,
      };
    } else {
      throw Error("SOmething Went Wrong! ");
    }
  });
};

// TypeScript users must reference the type `DataProvider`
export const dataProvider: DataProvider | LegacyDataProvider = {
  getList: (resource: any, params: any) => {
    const { data, khoj, url: filterUrl } = params.filter;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    let resourceUrl = resource + "/all";
    const url = khoj
      ? `${apiUrl}/${filterUrl}`
      : `${apiUrl}/${resourceUrl}?${stringify(query)}`;
    return axios({
      method: khoj ? "post" : "get",
      url,
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
      data: khoj ? data : undefined,
    }).then((res) => {
      if (res?.data?.code == 1) {
        return {
          data: res?.data?.data || [],
          total: res?.data?.data?.length || 0,
        };
      } else {
        throw Error("Something went Wrong !");
      }
    });
  },

  getOne: (resource: any, params: any) => getMany(resource, params.id),
  getMany: async (resource: any, params: any) => {
    const res = await Promise.allSettled(
      params.ids.map((id: number) => getMany(resource, id))
    ).then((res) => {
      return {
        data: res.map((r) => (r.status == "fulfilled" ? r.value.data : {})),
      };
    });
    return res;
  },

  getManyReference: (resource: any, params: any) => {
    console.log("getManyReference");
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        (headers.get("content-range") || "0").split("/").pop() || "0",
        10
      ),
    }));
  },

  update: (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}/update`;
    return axios({
      method: "post",
      url,
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
      data: {
        id: params.id,
        ...params.data,
      },
    }).then((res) => {
      if (res?.data?.code == 1) {
        return {
          data: {
            ...params.data,
            id: params.id,
          },
        };
      } else {
        throw Error("Something went Wrong !");
      }
    });
  },

  updateMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource: any, params: any) => {
    let resourceUrl = resource + "/add";
    let data = params.data;
    const url = `${apiUrl}/${resourceUrl}`;
    return axios({
      method: "post",
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
      data,
      url,
    }).then((res) => {
      if (res?.data?.code == 1) {
        return {
          data: {
            ...params.data,
          },
        };
      } else {
        throw Error("Error");
      }
    });
  },

  delete: (resource: any, params: any) => {
    // httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //   method: "DELETE",
    // }).then(({ json }) => ({ data: json })),
    const url = `${apiUrl}/${resource}/delete`;
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        data: {
          id: params.id,
        },
        headers: {
          "x-access-token": localStorage.getItem("access_token"),
        },
        url,
      }).then((res) => {
        if (res?.data?.code == 1) {
          return resolve({
            id: params.id,
            ...params,
          });
        } else {
          console.log("error");
          return reject(res?.data?.message || "Error");
          return reject(
            new HttpError(res?.data?.message || "Error", res.status, res)
          ); //new HttpError(res?.data?.message || "Error", 400, res?.data));
        }
      });
    });
  },

  deleteMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
