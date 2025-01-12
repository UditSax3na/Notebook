import { cookies } from 'next/headers';
const db = require('better-sqlite3')('notebook.db');

// logout api
export async function POST(req) {
    const Cookies = await cookies();
    const token = Cookies.get('LoginToken');
    
    try{
        if (token){
            Cookies.delete('LoginToken');
            db.prepare('DELETE FROM authToken WHERE authtoken=?').run(token.value);
            return new Response(JSON.stringify({success: 1}),{status:200,headers:{'Content-Type':'application/json'}});
        }else{
            return new Response(JSON.stringify({success:0},{status:200,headers:{'Content-type':'application/json'}}));
        }
    }catch{
        return new Response(JSON.stringify({error:e},{status:200,headers:{'Content-type':'application/json'}}));
    } 
}