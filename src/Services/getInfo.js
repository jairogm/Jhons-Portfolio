export const getInfo = () => {

    return fetch('https://api.github.com/users/jairogm')
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

