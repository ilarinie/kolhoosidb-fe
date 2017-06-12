import * as React from 'react';


export class LoginForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = (event: any) => {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <label>
                        Username
                        <input name="username" type="text" />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}
