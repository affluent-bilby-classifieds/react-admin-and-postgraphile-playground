import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput } from 'react-admin';

export const MenuData = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="title" />
            <TextField source="category" />
            <TextField source="price" />
            <TextField source="desc1" />
            <TextField source="image" />
            
            
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
           
            <TextInput source="category" />
            <TextInput source="price" />
            <TextInput disabledsource="image" />
            <TextInput source="desc1" />
            
            
        </SimpleForm>
    </Edit>
);

export const CreateMenuItem = (props) => (
    <Create title="Add a Menu Item" {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            
            <TextInput source="title" />
           
            <TextInput source="category" />
            <TextInput source="price" />
          {/*   <TextInput disabledsource="image" /> */}
            <TextInput source="desc1" />
        </SimpleForm>
    </Create>
);
