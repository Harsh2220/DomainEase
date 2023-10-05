export default async function checkbnb(name: string) {
    try {
        const searchDomain = await fetch(`/api/checkbnb?name=${name}`);
        const data = await searchDomain.json();
        return data.data
    } catch (error) {
        console.log(error, "error")
    }
}
