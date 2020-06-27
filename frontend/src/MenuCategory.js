import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput } from 'react-admin';

export const CatData = (props) => (
    <List {...props}>
        <Datagrid>
            
            
            <TextField source="catname" />
          
       
            
            <EditButton basePath="/menucategories" />
        </Datagrid>
    </List>
);

const CatTitle = ({ record }) => {
    return <span>Category {record ? `"${record.title}"` : ''}</span>;
};

export const CatEdit = (props) => (
    <Edit title={<CatTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="catname" />
         </SimpleForm>
    </Edit>
);

export const CreateCatItem = (props) => (
    <Create title="Add a Category" {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="catname" />
          </SimpleForm>
    </Create>
);
