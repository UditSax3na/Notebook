const { v4: uuidv4 } = require('uuid');
const GenToken=()=>{
    const a = uuidv4();
    return a;
}
export default GenToken;