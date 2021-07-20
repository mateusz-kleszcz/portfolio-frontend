import { useState } from 'react';

const SignInForm = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleSignIn = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        setEmailError('')
        setPasswordError('')

        try {
            const res = await fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await res.json()
            if (data.errors) {
                setEmailError(data.errors.email)
                setPasswordError(data.errors.password)
            }
            if (data.user) {
                console.log('user logged')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)

    return (
        <form onSubmit={handleSignIn}>
            <h2>Sign in</h2>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <div className="error email">{emailError}</div>
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            <div className="error password">{passwordError}</div>
            <button>Sign in</button>
        </form>
    );
};

export default SignInForm;