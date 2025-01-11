import "@/styles/login.css"
import { useRouter } from "next/navigation";

const Login = ({Validate, Logindata, setLogindata}) => {
  const router = useRouter();
  return (
    <>
    <div className='subcontainer'>
      <div className='detials'>
        <span className='text-center heading'>Login</span>
        <form className="form ml-7" method="POST" onSubmit={Validate}>
          <input type="text" className="input mt-4 mb-4 mx-4" id="email" name='userid' placeholder='Email' onKeyUp={(e)=>{setLogindata({...Logindata, email:e.target.value})}}/> 
          <input type="password" className="input mt-4 mb-4 mx-4" id="password" name='password' placeholder='password' onKeyUp={(t)=>{setLogindata({...Logindata, password:t.target.value})}}/>
          <span className='fp'>forget password?</span> 
          <button type='submit' className="btn text-lg mt-10 mb-12">login</button>
        </form>
      </div>
      <div className='btncon'>
        <span>don't have an account?</span>
        <button className='btn mt-3 text-lg' onClick={()=>{router.replace('/reg')}}>Signup</button>
      </div>
    </div>
    </>
  )
}
export default Login;