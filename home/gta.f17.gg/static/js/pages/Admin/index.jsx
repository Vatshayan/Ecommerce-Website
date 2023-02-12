import React from "react";
import "./Admin.scss";
import { Admin, Resource } from 'react-admin';
import Dashboard from './share/dashboard'
import { QueryClient } from 'react-query';
import CreatorCode from "./CreatorCode"
import authProvider from "./auth/provider"
import CreatorCodeEdit from "./CreatorCode/Edit"
import restProvider from 'ra-data-simple-rest'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      structuralSharing: false,
    },
    mutations: {
      retryDelay: 10000,
    },
  },
});

const AdminPage = () => {
  return (
    <Admin queryClient={queryClient} dataProvider={restProvider(process.env.REACT_APP_SERVER_PAYMENT_URL)} authProvider={authProvider} basename="/admin" dashboard={Dashboard}>
      <Resource name="creator-codes" list={CreatorCode} edit={CreatorCodeEdit}/>
    </Admin>
  );
};

export default AdminPage;
