import { NextResponse } from "next/server";
import prisma from "@/../utils/connect";

export const GET = async () => {
    try{
        // Fetch all the categories from the database (findMany() is a Prisma method to fetch all records from a table)
        const categories = await prisma.category.findMany()
        // Return the categories
        return new NextResponse(JSON.stringify(categories), { status : 200})
    }catch(e){
        console.log(e)
        // Return an error response if something went wrong
        return new NextResponse("Something went wrong!"), { status : 500}
    }
}
