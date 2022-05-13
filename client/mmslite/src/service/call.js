import axios from 'axios'

export const login = async (user) => {
    try {
      const response = await axios.post('http://localhost:3001/api/user-login', { ...user });
      return response;
    } catch (error) {
      console.log(error)
    }
};

export const create = async (user) => {
  try {
    const response = await axios.post('http://localhost:3001/api/user', { ...user });
    
   return response;
  } catch (error) {
   
  }
};
export const resetPassword = async (user) => {
  try {
    const response = await axios.put('http://localhost:3001/api/edit-password', { ...user });
    return response;
  } catch (error) {
    console.log(error)
  }
};

export const getRoles = async() => {

  try{

    const response = await axios.get('http://localhost:3001/api/roles')
    return response

  }catch(error){
   console.log(error)
  }
}

export const getDistricts = async() => {

  try{

    const response = await axios.get('http://localhost:3001/api/districts')
    return response

  }catch(error){
   console.log(error)
  }
}



export const userByRole = async (username) => {
  
    try {
    
      const response = await axios.get(`http://localhost:3001/api/user-role/${username}`)
      return response;

    } catch (error) {
        console.log(error)
    }
};

export const Inquiries = async() =>{

  try {
    const response = await axios.get(`http://localhost:3001/api/inquiry`)
    return response;

  }catch(e){

    console.log(e)
  }
}

export const totalInquiry = async () =>{

  try{

    const response = await axios.get(`http://localhost:3001/api/totalinquiry`)
    let data = response.data[0].total
    return data;

  }catch(e){
    console.log(e)
  }
}


export const totalInvoice = async () =>{

  try{

    const response = await axios.get(`http://localhost:3001/api/totalinvoice`)
    let data = response.data[0].total
    return data;

  }catch(e){
    console.log(e)
  }
}

export const totalVendor = async () =>{

  try{

    const response = await axios.get(`http://localhost:3001/api/totalvendor`)
    let data = response.data[0].total
    return data;

  }catch(e){
    console.log(e)
  }
}

export const totalStall = async () =>{

  try{

    const response = await axios.get(`http://localhost:3001/api/totalstall`)
    let data = response.data[0].total
    return data;

  }catch(e){
    console.log(e)
  }
}

export const totalExpense = async(user ) =>{

  try{
   
    const response = await axios.post(`http://localhost:3001/api/vendor/totalexpense`, { username : user})
    let data = response.data[0]
    return data;

  }catch(e){
    console.log(e)
  }
}

export const invoiceStatus = async(user ) =>{

  try{
   
    const response = await axios.post(`http://localhost:3001/api/vendor/invoicestatus`, { username : user})
    let data = response.data[0]
    return data;

  }catch(e){
    console.log(e)
  }
}

export const invoiceReport  = async (user) =>{

  try{
    const response = await axios.post(`http://localhost:3001/api/vendor/invoice-report`, { username : user})
    let data = response.data[0]
    return data;
  }catch(e){

    console.log(e)
  }
}



export const stockReport  = async (user) =>{

  try{
    const response = await axios.post(`http://localhost:3001/api/vendor/product-stock`, { username : user})
    let data = response.data[0]
    return data;
  }catch(e){

    console.log(e)
  }
}

export const invoiceList  = async () =>{

  try{
    const response = await axios.get(`http://localhost:3001/api/admin/invoices`)
    
    return response;
  }catch(e){

    console.log(e)
  }
}

export const getMarkets = async() => {

  try{

    const response = await axios.get('http://localhost:3001/api/admin/markets')
    return response

  }catch(error){
   console.log(error)
  }
}

export const stalls  = async (stallName) =>{

  try{
    const response = await axios.post(`http://localhost:3001/api/admin/stalls`, { stall : stallName})
   
    return response;
  }catch(e){

    console.log(e)
  }
}

export const invoicePending  = async () =>{

  try{
    const response = await axios.get(`http://localhost:3001/api/admin/invoice-pending`)
    
    return response;
  }catch(e){

    console.log(e)
  }
}

export const viewInvoiceByNo  = async (invoiceNo) =>{

  try{
    const response = await axios.post(`http://localhost:3001/api/admin/invoices-id`, { invoice: invoiceNo})
    let data = response.data[0]
    return data;
  }catch(e){

    console.log(e)
  }
}

export const createInvoice = async (invoice) => {
  try {
    const response = await axios.post('http://localhost:3001/api/admin/create-invoice', { ...invoice });
    
   return response;
  } catch (error) {
   
  }
};

export const updateInvoiceStatus = async (invoice) =>{
 

  try {
    const response = await axios.put('http://localhost:3001/api/admin/update-invoice', { ...invoice });
    
   return response;
  } catch (error) {
   console.log(error)
  }
}

export const stallsInCayo = async() =>{

  try {
    const response = await axios.get(`http://localhost:3001/api/admin/stalls-cayo`)
    return response;

  }catch(e){

    console.log(e)
  }
}



export const viewStallByCode  = async (stallC) =>{

  try{
    const response = await axios.post(`http://localhost:3001/api/admin/stalls-code`, { stallCode : stallC})
    let data = response.data[0]
    return data;
  }catch(e){

    console.log(e)
  }
}


export const createStall = async (stall) => {
  try {
    const response = await axios.post('http://localhost:3001/api/admin/create-stall', stall, {headers: {
      'Content-Type': 'multipart/form-data'
    }});
    console.log(response)
   return response;
  } catch (error) {
   
  }
};