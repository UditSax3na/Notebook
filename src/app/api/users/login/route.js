import GenToken from '@/lib/authtoken';
import { cookies } from 'next/headers';
const db = require('better-sqlite3')('notebook.db');

// login api
export async function POST(req) {
    const body = await req.json();
    try{
        const result = db.prepare(`SELECT * FROM users WHERE email=? and password=?`).get(body.email, body.password);
        if (result){
            const Cookies = await cookies();
            let token = GenToken();
            db.prepare('INSERT INTO authToken(userid, authToken) VALUES (?,?)').run(result['user_id'], token);
            Cookies.set('LoginToken', `${token}`, {
                expires: 1, // Expires in 1 day
                path: '/api/', // Available site-wide
                secure: true, // HTTPS only
                sameSite: 'Lax',
            });
            return new Response(JSON.stringify({token: token, data: result}),{status:200,headers:{'Content-Type':'application/json'}});
        }else{
            return new Response(JSON.stringify({error:'some issue'},{status:500,headers:{'Content-Type':'application/json'}}));
        }
    }catch(e){
        return new Response(JSON.stringify({error:e},{status:500,headers:{'Content-Type':'application/json'}}));
    }
}