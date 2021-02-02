import { getSession } from 'next-auth/client';

export default async (req, res) => {
    const session = await getSession({ req });

    console.log(JSON.stringify(session)); 
    const user = session.user.name; 
    const username = user.split(' ')[0]; 

    if (session) {
        res.send({ content: `Olá, ${username}. Bem vindo ao Explain!` })
    } else {
        res.status(404).json({ error: "Faça Login" }); 
    }
}