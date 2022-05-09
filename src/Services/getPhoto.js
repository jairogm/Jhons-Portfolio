export const getPhoto = () => {

    return fetch('https://api.github.com/users/jairogm')
        .then(res => res.json())
        .then(data => data.avatar_url)
        .catch(err => console.log(err))
}

