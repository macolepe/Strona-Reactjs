import React from 'react';

export default function LoginPage() {
    return (
        <div id='logowanie'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Logowanie</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Wprowadź email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" className="form-control" id="password" placeholder="Wprowadź hasło" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block mt-3">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
