import GenToken from '@/lib/authtoken';
const { v4: uuidv4 } = require('uuid');
const db = require('better-sqlite3')('notebook.db');

// registration api
export async function POST(req) {
    const body = await req.json();
    try{
        const userid = uuidv4();
        const result = db.prepare('INSERT INTO users(email, user_id, name, username, password) VALUES (?,?,?,?,?)').run(body.email, userid, body.name, body.username,body.password)
        let token = GenToken();
        if (result['changes']===1){
            db.prepare('INSERT INTO authToken(userid, authToken) VALUES (?,?)').run(userid, token);
            return new Response(JSON.stringify({token : token, token: token}),{status:200,headers:{'Content-Type':'application/json'}});
        }
    }catch(e){
        return new Response(JSON.stringify({error: e},{status:200,headers: {'Content-type':'application/json'}}));
    }
}