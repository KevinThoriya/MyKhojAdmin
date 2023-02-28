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
import { CompanyList } from "./List/CompanyList";
import { CompanyLocationList } from "./List/CompanyLocationList";
import { CompanySubCategoryList } from "./List/CompanySubCategoryList";
import { CreateArea } from "./Create/CreateArea";
import { CreateCategory } from "./Create/CreateCategory";
import { CreateCategoryField } from "./Create/CreatCategoryField";
import { CreateCity } from "./Create/CreateCity";
import { CreateCompany } from "./Create/CreateCompany";
import { CreateCompanyLocation } from "./Create/CreateCompanyLocation";
import { CreateCompanySubCategory } from "./Create/CreateCompanySubCategory";
import { CreateCountry } from "./Create/CreateCountry";
import { CreateCustomer } from "./Create/CreateCustomer";
import { CreateDesignation } from "./Create/CreateDesignation";
import { CreatePackage } from "./Create/CreatePackage";
import { CreatePinCode } from "./Create/CreatePinCode";
import { CreateSocial } from "./Create/CreateSocial";
import { CreateState } from "./Create/CreateState";
import { CreateSubCategory } from "./Create/CreateSubCategory";
import { CustomerList } from "./List/CustomerList";
import { DesList } from "./List/DesList";
import { EditArea } from "./Edit/EditArea";
import { EditCategory } from "./Edit/EditCategory";
import { EditCategoryField } from "./Edit/EditCategoryField";
import { EditCity } from "./Edit/EditCity";
import { EditCompany } from "./Edit/EditCompany";
import { EditCompanyLocation } from "./Edit/EditCompanyLocation";
import { EditCompanySubCategory } from "./Edit/EditCompanySubCategory";
import { EditCountry } from "./Edit/EditCountry";
import { EditCustomer } from "./Edit/EditCustomer";
import { EditDesignation } from "./Edit/EditDesignation";
import { EditPackage } from "./Edit/EditPackage";
import { EditPinCode } from "./Edit/EditPinCode";
import { EditSocial } from "./Edit/EditSocial";
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
import { PackageTypeList } from "./List/PackageTypeList";
import PhoneCallbackSharpIcon from "@mui/icons-material/PhoneCallbackSharp";
import { SocialList } from "./List/SocialList";
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
          name="categoryField"
          list={ComSubList}
          create={CreateCategoryField}
          edit={EditCategoryField}
          icon={AdUnitsIcon}
          options={{
            label: "Category Fields",
          }}
        />
        <Resource
          name="designation"
          list={DesList}
          create={CreateDesignation}
          edit={EditDesignation}
          icon={PhoneCallbackSharpIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Designation",
          }}
        />
        <Resource
          name="packageType"
          list={PackageTypeList}
          icon={PhoneCallbackSharpIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Package Type",
          }}
        />
        <Resource
          name="package"
          list={PackageList}
          create={CreatePackage}
          edit={EditPackage}
          icon={AccessibilityIcon}
          recordRepresentation={(record) => `${record.name}`}
          options={{
            label: "Package",
          }}
        />
        <Resource
          name="customer"
          list={CustomerList}
          create={CreateCustomer}
          edit={EditCustomer}
          recordRepresentation={(record) => `${record.fname} ${record.lname}`}
          icon={UserIcon}
          options={{
            label: "Customer",
          }}
        />
        <Resource
          name="company"
          list={CompanyList}
          create={CreateCompany}
          edit={EditCompany}
          recordRepresentation={(record) => `${record.name}`}
          icon={UserIcon}
          options={{
            label: "Company",
          }}
        />
        <Resource
          name="social"
          list={SocialList}
          create={CreateSocial}
          edit={EditSocial}
          recordRepresentation={(record) => `${record.name}`}
          icon={UserIcon}
          options={{
            label: "Social",
          }}
        />
        <Resource
          name="location"
          list={CompanyLocationList}
          create={CreateCompanyLocation}
          edit={EditCompanyLocation}
          recordRepresentation={(record) => `${record.name}`}
          icon={UserIcon}
          options={{
            label: "Location",
          }}
        />
        <Resource
          name="comSubCat"
          list={CompanySubCategoryList}
          create={CreateCompanySubCategory}
          edit={EditCompanySubCategory}
          recordRepresentation={(record) => `${record.com_id}-${record.sc_id}`}
          icon={UserIcon}
          options={{
            label: "Company Sub Category",
          }}
        />
      </Admin>
    </ThemeProvider>
  );
};

export default App;
