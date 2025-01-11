import "@/styles/signup.css";
import { useRouter } from "next/navigation";

const Registration = (props) => {
  const router = useRouter();
  return (
    <div className='subcontainer'>
      <div className="btncon">
      <span>have an account?</span>
      <button className='btn mt-3 text-lg' onClick={()=>{router.replace('/login')}} >login</button>
      </div>
      <div className='detials'>
        <span className='text-center heading'>Sign up</span>
        <form className='form ml-7'>
        <input className="input mt-4 mb-4 mx-4" type="text"  id="name" name="name" placeholder="Name"/>
        <input className="input mt-4 mb-4 mx-4" type="email"  id="email" name="email" placeholder="Email"/>
        <input className="input mt-4 mb-4 mx-4" type="password" id="password" name="password" placeholder='password'/>
        <input className="input mt-4 mb-4 mx-4" type="password" id="repassword" name="repassword" placeholder='password'/>
        <button className='btn text-lg mt-10' type="submit" >Sign up</button>
        </form>
      </div>
    </div>
  )
}

// 
export default Registration;
