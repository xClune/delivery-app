import { NextResponse, NextRequest } from "next/server";
import prisma from "@/../utils/connect";

// for this we need to use argument destructuring to get the searchParams from the URL
export const GET = async (req:NextRequest) => {

    // when the endpoint is used the URL is checked for the category
    const {searchParams} = new URL(req.url)
    const cat = searchParams.get('cat')


    try{
        // Fetch products from the database based on the category
        const products = await prisma.product.findMany({
            where: {
                // when fetched with category given, filter by category
                // else display only the featured products
                ...(cat ? { catSlug: cat } : { isFeatured: true }),
            },
        });
        // Return the categories
        return new NextResponse(JSON.stringify(products), { status : 200})
    }catch(e){
        console.log(e)
        // Return an error response if something went wrong
        return new NextResponse("Failed!"), { status : 500}
    }
}
