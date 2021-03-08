
import { getSession } from 'next-auth/client';
import insertUser from '../user/insert'
import queryUser from '../user/get'

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const user = session.user.name;
    const email = session.user.email;
    const image = session.user.image;
    const first_name = user.split(' ')[0];

    const responseUSer = await queryUser(email);

    const isUser = responseUSer ? responseUSer.length : null;

    if (isUser === 0) {
      console.log(JSN.stringiify(session));
      insertUser(session);
    }

    const response = {
      status: 200,
      id: email,
      image: image,
      message: `Olá, ${first_name}. Bem vindo ao Explain!`
    }
    res.send(response);
  } else {
    res.send({ error: 'Faça Login' })
  }
}
