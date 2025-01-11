'use client'
import { useRouter } from "next/navigation";

const _PageNotFound=()=>{
    const router = useRouter();
    return <>
        <div className="subcontainer">
            page not found
        </div>
        <button className='btn mt-3 text-lg' onClick={()=>{router.push('/login')}}>Login</button>
    </>;
}
export default _PageNotFound;