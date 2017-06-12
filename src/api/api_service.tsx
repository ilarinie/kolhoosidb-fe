export module ApiService {
    const apiUrl = 'https://kolhoosidb.herokuapp.com';

    const get = (path: string) => {
        let url = apiUrl + path;
    }

    const send = (method: string, path:string, data: any): Promise<any> => {
        let url = apiUrl + path;
        var headers = new Headers();
        headers.append('Authorization', localStorage.getItem('token') || "");

        let init: RequestInit  = {
            method: method,
            headers: headers,
            body: data,
            mode: 'cors',
            cache: 'default'
        };

        return fetch(url, init).then((response) => {
            let json = response.json();
            if (response.status >= 200 && data.status < 300){
                return json;
            } else {
                return json.then(Promise.reject.bind(Promise));
            }
        });
    };

    export const logIn = (username: string, password: string) => {
        return send('POST', '/user_token', {auth: {username: username, password: password}});
    };

}
