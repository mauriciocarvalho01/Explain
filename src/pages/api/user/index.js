import { getSession } from 'next-auth/client'; 
import queryUser from './get';


export default async (req, res) => {

  const session = await getSession({ req });

  if (session) {
    const email = session.user.email;

    const responseUSer = await queryUser(email);

    const user = responseUSer ? responseUSer[0] : null;

    const response = {
      status: 200,
      user: user
    }
    res.send(response);
  } else {
    res.send({ error: 'Faça Login' })
  }
}

