import * as React from "react";

import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  Form,
  FormDataConsumer,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useAugmentedForm,
} from "react-admin";

export const CreateCity = (props: any) => {
  const {
    form: { getValues, trigger, control, watch, setValue, resetField, reset },
  } = useAugmentedForm(props);
  const StateRef = React.useRef();
  console.log(getValues("country_id"));
  // watch();

  React.useEffect(() => {
    setValue("country_id", 2);
  }, []);

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <FormDataConsumer>
          {({ formData, scopedFormData, ...rest }) => (
            <>
              {JSON.stringify(formData)}
              <ReferenceInput
                source="country_id"
                reference="country"
                label="Country"
                validate={[required()]}
                key={formData.country_id}
                onChange={(e) => {
                  setValue("st_id", "");
                  reset("st_id");
                }}
                fullWidth
              >
                <SelectInput
                  label="Country"
                  validate={[required()]}
                  fullWidth
                  onChange={(e) => {
                    resetField("st_id");
                    console.log(StateRef);
                  }}
                />
              </ReferenceInput>

              <ReferenceInput
                source="st_id"
                reference="state"
                label="State"
                validate={[required()]}
                key={formData.st_id}
                fullWidth
                ref={StateRef}
                filter={{
                  khoj: true,
                  url: "state/country",
                  data: { co_id: formData.country_id },
                }}
              >
                <AutocompleteInput
                  disabled={!formData.country_id}
                  key={getValues("country_id")}
                  label="State"
                  validate={[required()]}
                  fullWidth
                />
              </ReferenceInput>
            </>
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};
