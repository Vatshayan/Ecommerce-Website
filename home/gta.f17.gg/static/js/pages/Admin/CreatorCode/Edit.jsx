import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditPage = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="creatorCode" disabled />
      <TextInput source="returnCreator" />
      <TextInput source="returnUser" />
      <TextInput source="usage" />
    </SimpleForm>
  </Edit> 
)

export default EditPage
