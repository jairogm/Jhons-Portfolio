import { useEffect, useState } from "react"
import axios from "axios"
export function UseSpotify() {
    const [data, setData] = useState({})

    

    const currentPlayingURL = "https://api.spotify.com/v1/me/player/currently-playing"

    useEffect(() => {

        axios.get(currentPlayingURL, {
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer BQC9TN-0uO6PAXoDjMOe39iDhU0C7T7e0ffVOiysIR6pKqA5dSQ0-UhsLZh0JPxnLoXblpmb7gJuf64lHiEB31yL-F9sgQoxMLWLxSV13JJcGzhdAt8hQNs_ofyxpvEWnIXSg51XH1NUeQDrhZDxYMnKoIbi' 
            }
        })
        .then(response=>{
            setData(response.data.item)
        })

    }, [])

    let song = {
        "name": data.name,
    } 

    return { song }
}
