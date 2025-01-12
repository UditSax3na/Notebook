import { cookies } from 'next/headers';

// logout api
export async function POST(req) {
    const body = await req.json();
    const Cookies = await cookies();
    Cookies.set('LoginToken',`${body.id}`);
    const token = Cookies.get('LoginToken');
    // const token = Cookies.has('LoginToken');
    // console.log(token);
    console.log("this is the token :: ",token)
    // try{
    if (token){
        // Cookies.delete('LoginToken');
        return new Response(JSON.stringify({success: 1}),{status:200,headers:{'Content-Type':'application/json'}});
    }else{
        return new Response(JSON.stringify({success:0},{status:200,headers:{'Content-type':'application/json'}}));
    }
    // }catch{
    //     return new Response(JSON.stringify({error:e},{status:200,headers:{'Content-type':'application/json'}}));
    // } 
}