import * as React from 'react';
import { Datagrid, TextField, List, useResourceContext, Title } from 'react-admin';

const CreatorCodes = (props) => {
  const resource = useResourceContext();

  return (
    <List {...props}>
      <Title title={resource} />
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="creatorCode" />
        <TextField source="returnCreator" />
        <TextField source="returnUser" />
        <TextField source="usage" />
      </Datagrid>
    </List>
  )
}

export default CreatorCodes
