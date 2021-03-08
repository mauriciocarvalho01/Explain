import { queryMysql } from '../config/mysql/mysql.db';


export default async function insertUser(session) {

    if (session) {
        const { name, email, image } = session.user;
        const first_name = name.split(' ')[0];

        const user = [];

        user.push(name);
        user.push(email);
        user.push(image);

       const insert =  queryMysql("INSERT INTO user_profile (user_name,email,image) VALUES (?,?,?)", user); 

       return insert; 


    } else {
        return 404;
    }
}
