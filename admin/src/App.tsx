import {
  Admin,
  Layout,
  ListGuesser,
  Resource,
  ThemeProvider,
} from "react-admin";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { CategoryList } from "./List/CategoryList";
import { ComSubList } from "./List/ComSubList";
import { CreateArea } from "./Create/CreateArea";
import { CreateCategory } from "./Create/CreateCategory";
import { CreateCity } from "./Create/CreateCity";
import { CreateCountry } from "./Create/CreateCountry";
import { CreatePinCode } from "./Create/CreatePinCode";
import { CreateState } from "./Create/CreateState";
import { CreateSubCategory } from "./Create/CreateSubCategory";
import { CustomerList } from "./List/CustomerList";
import { DesList } from "./List/DesList";
import { EditArea } from "./Edit/EditArea";
import { EditCategory } from "./Edit/EditCategory";
import { EditCity } from "./Edit/EditCity";
import { EditCountry } from "./Edit/EditCountry";
import { EditPinCode } from "./Edit/EditPinCode";
import { EditState } from "./Edit/EditState";
import { EditSubCategory } from "./Edit/EditSubCategory";
import { ListArea } from "./List/ListArea";
import { ListCity } from "./List/ListCity";
import { ListCountry } from "./List/ListCountry";
import { ListPinCode } from "./List/ListPinCode";
import { ListState } from "./List/ListState";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocationIcon from "@mui/icons-material/LocationCity";
import MyAppBar from "./AppBar";
import { MyMenu } from "./SideMenu";
import { PackageList } from "./List/PackageList";
import PhoneCallbackSharpIcon from "@mui/icons-material/PhoneCallbackSharp";
import { SubCategoryList } from "./List/SubCategoryList";
import UserIcon from "@mui/icons-material/People";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";
import { defaultTheme } from "react-admin";

const theme = {
  ...defaultTheme,
  sidebar: {
    width: 240, // The default value is 240
    closedWidth: 55, // The default value is 55
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          "&$disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Admin
        title="My Khoj"
        authProvider={authProvider}
        dataProvider={dataProvider}
        theme={theme}
        layout={(props) => (
          <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
        )}
        // appBar={MyAppBar}
      >
        <Resource
          name="country"
          list={ListCountry}
          create={CreateCountry}
          edit={EditCountry}
          icon={AdUnitsIcon}
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
          icon={LocalActivityIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "State",
          }}
        />
        <Resource
          name="city"
          list={ListCity}
          create={CreateCity}
          edit={EditCity}
          recordRepresentation={(record) => `${record.name}`}
          icon={LocationIcon}
          options={{
            label: "City",
          }}
        />
        <Resource
          name="pincode"
          list={ListPinCode}
          create={CreatePinCode}
          edit={EditPinCode}
          icon={LocalAirportIcon}
          recordRepresentation={(record) => `${record.code}`}
          options={{
            label: "Pincode",
          }}
        />
        <Resource
          name="area"
          list={ListArea}
          create={CreateArea}
          edit={EditArea}
          icon={AdUnitsIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Area",
          }}
        />
        <Resource
          name="category"
          list={CategoryList}
          create={CreateCategory}
          recordRepresentation={(record) => `${record.name}`}
          edit={EditCategory}
          icon={AccessTimeIcon}
          options={{
            label: "Category",
          }}
        />
        <Resource
          name="subCategory"
          recordRepresentation={(record) => `${record.name}`}
          list={SubCategoryList}
          create={CreateSubCategory}
          edit={EditSubCategory}
          icon={AccessibilityIcon}
          options={{
            label: "Sub Category",
          }}
        />
        <Resource
          name="catfield"
          list={ComSubList}
          icon={AdUnitsIcon}
          options={{
            label: "Category Fields",
          }}
        />
        <Resource
          name="comsub"
          list={ComSubList}
          icon={AdUnitsIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "ComSub Category",
          }}
        />
        <Resource
          name="des"
          list={DesList}
          icon={PhoneCallbackSharpIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Designation",
          }}
        />
        <Resource
          name="customer"
          list={CustomerList}
          recordRepresentation={(record) => `${record.name}`}
          icon={UserIcon}
          options={{
            label: "Customer",
          }}
        />
        <Resource
          name="package"
          list={PackageList}
          icon={AccessibilityIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Package",
          }}
        />
      </Admin>
    </ThemeProvider>
  );
};

export default App;
