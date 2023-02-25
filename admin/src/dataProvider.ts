import axios from "axios";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "http://35.154.165.33:9000/api";
const httpClient = fetchUtils.fetchJson;

// TypeScript users must reference the type `DataProvider`
export const dataProvider = {
  getList: (resource: any, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    let data = {};
    let resourceUrl = resource;
    if (resource == "country") {
      data = {
        name: "INDIA",
        countryCode: "IN",
        nationality: "INDIAN",
      };
      resourceUrl = "country/fetchall";
    } else if (resource == "category") {
      resourceUrl = "category/fetchall";
    } else if (resource == "sc") {
      resourceUrl = "sc/fetchall";
    } else if (resource == "catfield") {
      resourceUrl = "catfield/all";
    } else if (resource == "comsub") {
      resourceUrl = "comsub/all";
    } else if (resource == "des") {
      resourceUrl = "des/fetch";
    } else if (resource == "customer") {
      resourceUrl = "customer/all";
    } else if (resource == "package") {
      resourceUrl = "package/all";
    }
    const url = `${apiUrl}/${resourceUrl}?${stringify(query)}`;
    return axios({
      method: "post",
      url,
      headers: {
        "x-access-token": localStorage.getItem("access_token"),
      },
      data,
    }).then((res) => {
      if (res?.data?.code == 1) {
        return {
          data: res?.data?.data,
          total: res?.data?.data?.length,
        };
      } else {
        throw Error("Something went Wrong !");
      }
    });
  },

  getOne: (resource: any, params: any) => {
    let resourceUrl = resource;
    let data = {
      id: params.id,
    };
    if (resource == "package") {
      resourceUrl = "package/id";
    }
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
        return res.data.data;
      } else {
        throw Error("SOmething Went Wrong! ");
      }
    });
  },
  getMany: (resource: any, params: any) => {
    let resourceUrl = resource;
    let data = {
      id: params.ids[0],
    };
    if (resource == "package") {
      resourceUrl = "package/id";
    }
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
          data: [res.data.data],
        };
      } else {
        throw Error("SOmething Went Wrong! ");
      }
    });
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

  update: (resource: any, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource: any, params: any) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource: any, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};
