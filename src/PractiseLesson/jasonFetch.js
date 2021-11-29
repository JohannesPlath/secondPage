import fetch from 'cross-fetch';

fetch("https://jsonplaceholder.typicode.com/users", { method:"get"})
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
    .catch(err => {
        console.log(error)
    })
fetch('//api.github.com/users/lquixada')
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.error(err);
    });

