import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';

const Logged = () => {

    const [session, loading] = useSession();

    return (
        <div className="col-md-4">
            <div className="card card-profile">
                <div className="card-avatar">
                    <a href="/login">
                        <img className="img" src={session.user.image} />
                    </a>
                </div>
                <div className="card-body">
                    <h6 className="card-category text-gray">Perfil / Estudante</h6>
                    <h4 className="card-title">{session.user.name}</h4>
                    <p className="card-description">
                        Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã.
                        <br></br>
                        Albert Einstein
    </p>               <Link href="/dashboard">
                        <a className="btn btn-primary btn-round">Expl.AI.n</a>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Logged;

