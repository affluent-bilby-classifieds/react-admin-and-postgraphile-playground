import React, { useEffect, useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Admin, Resource } from 'react-admin'
import { useApolloClient } from '@apollo/react-hooks'
import pgDataProvider from 'ra-postgraphile'
import { ContactList, ContactEdit, ContactCreate } from './Contacts'
import { MenuData, MenuEdit, CreateMenuItem } from './Menu'
import { CatData, CatEdit, CreateCatItem } from './MenuCategory'
import ApolloClient from './Apollo';
/* import { HttpError } from 'react-admin'; */

const ReactAdminWrapper = () => {
    const [dataProvider, setDataProvider] = useState(null);
    const client = useApolloClient();

    useEffect(() => {
        (async () => {
            const dataProvider = await pgDataProvider(client);
            setDataProvider(() => dataProvider);
        })()
    }, [client]);

    return (
        dataProvider && (
            <Admin dataProvider={dataProvider}>
                <Resource
                    name="contacts"
                    list={ContactList}
                    edit={ContactEdit}
                    create={ContactCreate}
                />

                <Resource 
                     name="menu"
                     list={MenuData}
                     edit={MenuEdit}
                     create={CreateMenuItem} 
                 
                />

              <Resource 
                     name="menucategories"
                     list={CatData}
                     edit={CatEdit}
                     create={CreateCatItem} 
                 
                />




            </Admin>
        )

        

     

    );
}

const App = () => {
    return (
        <ApolloProvider client={ApolloClient}>
            <ReactAdminWrapper />
        </ApolloProvider>
    );
}

export default App;
