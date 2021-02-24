import { queryMysql } from '../config/mysql/mysql.db';

export default async function queryUser(email) {

    try {
        if (email) {
            return await queryMysql("SELECT * FROM  user_profile WHERE email = ?", email);

        } else {
            throw ("Algo errado aconteceu na query user_profile em getUser");
        }
    } catch (err) {
        return err;
    }
}
