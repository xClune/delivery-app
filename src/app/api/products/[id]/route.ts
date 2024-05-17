
import { getAuthSession } from "../../../../utils/auth";
import prisma from "../../../../utils/connect";
import { NextResponse, NextRequest } from "next/server";

// Get single product

export const GET = async (req:NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    
    try {
        // search product model for product with id
        const product = await prisma.product.findUnique({
            where: {
                id:id
            },
        })
        return new NextResponse(JSON.stringify(product), { status: 200})
    } catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong"}), { status: 500})
    }
}

// Delete single product
export const DELETE = async (req:NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const session = await getAuthSession();

    if (session?.user.isAdmin) {
        try{
            const product = await prisma.product.delete({
                where: {
                    id:id
                }
            });
            return new NextResponse(JSON.stringify("Product has been deleted."), { status: 200})
        }
        catch(err){
            console.log(err)
            return new NextResponse(JSON.stringify({ message: "Something went wrong"}), { status: 500})
        }
    }
    
    try {
        // search product model for product with id
        const product = await prisma.product.findUnique({
            where: {
                id:id
            },
        })
        return new NextResponse(JSON.stringify(product), { status: 200})
    } catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong"}), { status: 500})
    }
    return new NextResponse(JSON.stringify({ message: "Not permitted"}), { status: 403})
}