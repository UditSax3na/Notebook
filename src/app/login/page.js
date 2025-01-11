'use client'
import { useEffect, useState } from "react"
import Background from "@/components/Background"
import Login from "@/components/Login"
import { useRouter } from "next/navigation";
useRouter
const _Login=()=>{
  let router = useRouter();
  const [Logindata, setLogindata]= useState({
    email:"",
    password:""
  })
  const Validate = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('/api/users/login', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(Logindata), // Request payload
      })     
      let a = await response.json();
      if (!response.ok) {
        throw new Error('Verification failed');
      }else{
        router.push(`/${a.data.username}/pages/view`);
      }
    }catch(e){
      console.log(e.message);
    }
  }
  return <>
  <Background />
    <div className="element">
      <Login Validate={Validate} Logindata={Logindata} setLogindata={setLogindata}/>
    </div>
  </>
}
export default _Login;