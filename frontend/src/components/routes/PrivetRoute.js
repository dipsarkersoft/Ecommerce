import  { React,useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contex/auth'
import Loading from './Loading'
import axios from 'axios'

const PrivetRoute = () => {

//contex..
const[auth,setAuth]=useAuth()

//state...
const[ok,setOk]=useState(false)

useEffect(()=>{
     const authCheck=async()=>{
          const{data}=await axios.get(`/auth-check`)
          if(data.ok){
              
               setOk(true)

          }
          else{
               setOk(false)
          }
     }

     if(auth?.token)authCheck()}
     ,[auth?.token]
)
return ok ?  <Outlet/>:<Loading /> ;
     
  

   
}



export default PrivetRoute
