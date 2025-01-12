'use client';
import Cookies from 'js-cookie';
import { useParams } from 'next/navigation';
const HomePage=()=>{
    const { id } = useParams(); // used to get the parameter from the url
    let a = Cookies.get('LoginToken');
    return <>
        <div className="p-10">
            this is : {id},
            and this is the cookies : {a}
        </div>
    </>
}
export default HomePage;