import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, BooleanInput, BooleanField } from 'react-admin';
import { AutocompleteInput } from 'react-admin';

export const MenuData = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="title" />
            <TextField source="category_id" />
            <TextField source="price" />
            <TextField source="desc1" />
            {/* <TextField source="image" /> */}
            <BooleanField label="enabled" source="isenabled" />
            
            <EditButton basePath="/menu" />
        </Datagrid>
    </List>
);

const MenuTitle = ({ record }) => {
    return <span>Menu {record ? `"${record.title}"` : ''}</span>;
};

export const MenuEdit = (props) => (
    <Edit title={<MenuTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            
            <TextInput source="title" />

{/* //These are currently hardcoded see: https://marmelab.com/react-admin/Inputs.html
//We want to grab the values from the database instead */}

    <AutocompleteInput source="category_id" choices={[
    { id: '1', name: 'Burgers' },
    { id: '2', name: 'Wraps' },
   
]} />
            {/* <TextInput source="category_id" /> */}
            <TextInput source="price" />
            <TextInput disabledsource="image" />
            <TextInput source="desc1" />
            <BooleanInput label="Enabled" source="isenabled" />
            
        </SimpleForm>
    </Edit>
);

export const CreateMenuItem = (props) => (
    <Create title="Add a Menu Item" {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            
            <TextInput source="title" />
           
            <AutocompleteInput source="category_id" choices={[
    { id: '1', name: 'Burgers' },
    { id: '2', name: 'Wraps' },
   
]} />

            {/* <TextInput source="category_id" /> */}
            <TextInput source="price" />
          {/*   <TextInput disabledsource="image" /> */}
            <TextInput source="desc1" />
        </SimpleForm>
    </Create>
);
