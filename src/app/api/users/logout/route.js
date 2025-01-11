import { cookies } from 'next/headers';
const db = require('better-sqlite3')('notebook.db');

// logout api
export async function DELETE(req) {
    const Cookies = await cookies();
    const token = Cookies.get('LoginToken');
    console.log(token);
    try{
        if (token){
            db.prepare('DELETE FROM authToken WHERE authtoken=?').run(token);
            Cookies.delete('LoginToken');
            return new Response(JSON.stringify({success: 1}),{status:200,headers:{'Content-Type':'application/json'}});
        }else{
            return new Response(JSON.stringify({success:0},{status:200,headers:{'Content-type':'application/json'}}));
        }
    }catch{
        return new Response(JSON.stringify({error:e},{status:200,headers:{'Content-type':'application/json'}}));
    } 
}