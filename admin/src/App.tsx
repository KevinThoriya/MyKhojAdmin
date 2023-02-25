import { Admin, ListGuesser, Resource } from "react-admin";

import { CategoryList } from "./List/CategoryList";
import { ComSubList } from "./List/ComSubList";
import { CreateCountry } from "./Create/CreateCountry";
import { CustomerList } from "./List/CustomerList";
import { DesList } from "./List/DesList";
import { EditCountry } from "./Edit/EditCountry";
import { PackageList } from "./List/PackageList";
import { SubCategoryList } from "./List/SubCategoryList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

const App = () => {
  return (
    <Admin title="My Khoj" authProvider={authProvider} dataProvider={dataProvider} >
      <Resource
        name="country"
        list={ListGuesser}
        create={CreateCountry}
        edit={EditCountry}
        options={{
          label: "Country",
        }}
      />
      <Resource
        name="category"
        list={CategoryList}
        options={{
          label: "Category",
        }}
      />
      <Resource
        name="sc"
        list={SubCategoryList}
        options={{
          label: "Sub Category",
        }}
      />
      <Resource
        name="catfield"
        list={ComSubList}
        options={{
          label: "Category Fields",
        }}
      />
      <Resource
        name="comsub"
        list={ComSubList}
        options={{
          label: "ComSub Category",
        }}
      />
      <Resource
        name="des"
        list={DesList}
        options={{
          label: "Designation",
        }}
      />
      <Resource
        name="customer"
        list={CustomerList}
        options={{
          label: "Customer",
        }}
      />
      <Resource
        name="package"
        list={PackageList}
        options={{
          label: "Package",
        }}
      />
    </Admin>
  );
};

export default App;
