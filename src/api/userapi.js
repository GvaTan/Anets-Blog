import axios from 'axios'
axios.defaults.baseURL = '/api';

let getSession=()=>{
  return axios.get("api_getSession");
}
let login=(usermail,userpassword)=>{

  return axios.get("user_login2?usermail="+usermail+"&password="+userpassword);
}


//获得商品
let getShops=(keyword,payType,classifyId,classifyA,userId,shopId,start,size)=>{

  return axios.get("shop_getShops?keyword="+keyword+"&payType="+payType+"&classifyId="+classifyId+"&classifyA="+classifyA+"&userId="+userId+"&shopId="+shopId+"&start="+start+"&size="+size);
}


//获得私有商品
let getPrivateShops=()=>{

  return axios.get("shop_privateWallpaper");
}


export {getSession,login,getShops,getPrivateShops}
