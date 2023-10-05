export default async function checkarb(name: string) {
    try {
        const searchDomain = await fetch(`/api/checkarb?name=${name}`);
        const data = await searchDomain.json();
        return data.data
    } catch (error) {
        console.log(error, "error")
    }
}
