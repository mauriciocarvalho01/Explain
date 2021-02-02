import { getSession } from 'next-auth/client';
import InsertUser from './insert';

export default async (req, res) => {
    const session = await getSession({ req });

    const insertIn = await InsertUser(session);

    if (insertIn) {
        res.send({
            status: true,
            user: session.user
        });
    } else {
        res.status(404).json({ error: "Insert error" })
    }
}