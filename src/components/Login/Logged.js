import React, { useState, useEffect } from 'react';
import Link from 'next/link';



const Logged = (props) => {

    const {user} = props.user; 

    const image = user ?  user.image: null; 
    const message = user ? user.message: null; 
    const email = user ? user.email: null; 
    return (
        <div className="col-md-4">
            <div className="card card-profile">
                <div className="card-avatar">
                    <a href="/login">
                        <img className="img" src={image} />
                    </a>
                </div>
                <div className="card-body">
                    <h6 className="card-category text-gray">Perfil / Estudante</h6>
                    <h4 className="card-title">{message}</h4>
                    <p className="card-description">
                        {email}
    </p>               <Link href="/dashboard">
                        <a className="btn btn-primary btn-round">Expl.AI.n Painel</a>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Logged;

