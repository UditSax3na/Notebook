'use client';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';
const HomePage=()=>{
    const { id } = useParams(); // used to get the parameter from the url
    console.log(Cookies.get('LoginToken'))
    return <>
        <div className="p-10">
            this is : {id}
        </div>
    </>
}
export default HomePage;