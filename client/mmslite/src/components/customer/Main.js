import * as React from 'react';
import Route from './route'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Main = ()=>{

    return(

      <div>
        <Header/>
            <h1>Main</h1>
            <Route/>
        <Footer/>
      </div>
    );

};

export default Main;