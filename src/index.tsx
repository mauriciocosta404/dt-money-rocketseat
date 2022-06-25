import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer,Model} from 'miragejs';
import App from './App';
import { meetsContrastGuidelines } from 'polished';

createServer({

  models:{
    transaction:Model
  },

  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return this.schema.all('transaction');
    });

    this.post('/transactions',(schema, request)=>{

      const data=JSON.parse(request?.requestBody);

      return schema.create('transaction',data);
    });

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);