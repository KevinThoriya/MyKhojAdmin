import { Admin, ListGuesser, Resource } from "react-admin";

import { CategoryList } from "./List/CategoryList";
import { ComSubList } from "./List/ComSubList";
import { CreateCountry } from "./Create/CreateCountry";
import { CreateState } from "./Create/CreateState";
import { CustomerList } from "./List/CustomerList";
import { DesList } from "./List/DesList";
import { EditCountry } from "./Edit/EditCountry";
import { EditState } from "./Edit/EditState";
import { ListCountry } from './List/ListCountry';
import { ListState } from "./List/ListState";
import { PackageList } from "./List/PackageList";
import { SubCategoryList } from "./List/SubCategoryList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

const App = () => {
  return (
    <Admin
      title="My Khoj"
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="country"
        list={ListCountry}
        create={CreateCountry}
        edit={EditCountry}
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "Country",
        }}
      />
      <Resource
        name="state"
        list={ListState}
        create={CreateState}
        edit={EditState}
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "State",
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
        name="subCategory"
        recordRepresentation={(record) => `${record.name}`}
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
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "ComSub Category",
        }}
      />
      <Resource
        name="des"
        list={DesList}
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "Designation",
        }}
      />
      <Resource
        name="customer"
        list={CustomerList}
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "Customer",
        }}
      />
      <Resource
        name="package"
        list={PackageList}
        recordRepresentation={(record) => `${record.name}`}
        options={{
          label: "Package",
        }}
      />
    </Admin>
  );
};

export default App;
