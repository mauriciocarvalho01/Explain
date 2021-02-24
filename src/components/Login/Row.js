import React, { useState } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/client';



const Row = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">
                            Entrar com uma conta Google
                                    </h4>
                        <p className="card-category">Os dados serão sincronizados com o Google Classroom</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row" >
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">E-mail</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="bmd-label-floating">Senha</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <button onClick={signIn} type="submit" className="btn btn-light pull-left">Conta google</button>
                                </div>
                                <div className="col-md-6">
                                    <button onClick={signIn} type="submit" className="btn btn-primary pull-right">Entrar</button>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Row;


