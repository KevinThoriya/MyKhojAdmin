import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const SocialList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="com_id" reference="company" label="Company">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="wa" label="WhatsApp"/>
        <TextField source="fb" label="FaceBook"/>
        <TextField source="ig" label="InstaGram"/>
        <TextField source="li" label="LinkedIn"/>
        <TextField source="twi"label="Twitter" />
        <TextField source="tele" label="TeleGram"/>
        <TextField source="yt" label="YouTube" />
      </Datagrid>
    </List>
  );
};
