import {queryMysql} from '../config/mysql/mysql.db';

export default async function InsertUser(session) {

    try {
        if (session) {

            const user = [];
            user.push(session.user.name);
            user.push(session.user.email);
            user.push(session.user.image);

            const res = await queryMysql('INSERT INTO user_profile (user_name,email,image) VALUES (?,?,?)', user);
            
            return true; 
        } else {
            throw (false);
        }

    } catch (e) {
        return e;
    }
}