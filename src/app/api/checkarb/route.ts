import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const name = request.nextUrl.searchParams.get("name")
    try {
        const searchDomain = await fetch(`https://api.prd.space.id/v1/getAddress?tld=arb1&domain=${name}.arb`)
        const data = await searchDomain.json();
        return new NextResponse(JSON.stringify({ data }), {
            status: 200,
        });
    } catch (err) {
        return new NextResponse(JSON.stringify({ error: 'failed to load data' }), {
            status: 500,
        });
    }
}