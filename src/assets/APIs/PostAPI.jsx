

export async function GetAllPosts( username ){
    try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/${username}/post
`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        })

        if (!response.ok) {
            throw new Error("Error in getAllContacts response: " + response.status)
        }

        const jsonData = await response.json()
        return jsonData

    } catch (error) {
        console.error("Error while fetching posts", error)
    }
}

