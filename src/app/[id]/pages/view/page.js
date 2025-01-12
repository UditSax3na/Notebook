'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ViewPage = () => {
    const router = useRouter();
    const LogOut = async () => {
        try{
            const response = await fetch('/api/users/logout', {
              method: 'POST', // HTTP method
              headers: {
                'Content-Type': 'application/json', // Specify the content type
              },
            })     
            let a = await response.json();
            if (!response.ok) {
              throw new Error('LogOut failed');
            }else{
              router.push('/login');
            }
        }catch(e){
        console.log(e.message);
        }
    }
  return <>
    <div>
      view page
    </div>
    <button className='btn mt-3 text-lg' onClick={()=>{LogOut();}}>logout</button>
</>
}

export default ViewPage
