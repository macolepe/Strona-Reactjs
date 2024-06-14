import React, { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    const users = [
        { id: 1, email: 'test1@test.pl', password: '123', name: 'test1' },
        { id: 2, email: 'test2@test.pl', password: '456', name: 'test2' },
        { id: 3, email: 'test3@test.pl', password: '789', name: 'test3' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setLoggedInUser(user);
            setEmail('');
            setPassword('');
            setError('');
        } else {
            setError('Nieprawidłowy email lub hasło. Spróbuj ponownie.');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <div id='logowanie'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Logowanie</h1>
                    {loggedInUser ? (
                        <div className="text-center">
                            <h4>Zalogowany jako: {loggedInUser.name}</h4>
                            <button onClick={handleLogout} className="btn btn-danger btn-block mt-3">
                                Wyloguj się
                            </button>
                        </div>
                    ) : (
                        <>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Wprowadź email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Hasło</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Wprowadź hasło"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block mt-3">
                                        Zaloguj się
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
