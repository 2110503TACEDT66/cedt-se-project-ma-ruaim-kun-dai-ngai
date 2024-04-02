

export default async function getCamps() {
    // await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds`, {next: {tags:['camps']}})
    if (!response.ok) {
        throw new Error("Failed to fetch campground")

    }
    
    return await response.json()
}