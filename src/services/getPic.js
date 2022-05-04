//Getting profile pioc from Github
const PIC_URL = 'https://api.github.com/users/jairogm'

export default function getPic() {
  return fetch(PIC_URL)
  .then(res => res.json())
  .then(response => response.avatar_url)
}
