
import prisma from "../../../../utils/connect";
import { NextResponse, NextRequest } from "next/server";


export const PUT = async (req:NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    
    try {

        const body = await req.json()

        // Update the order status using id to select the order and body to update the status, this being the form input from orders page
        await prisma.order.update({
            where: {
                id:id
            },
            data: {
                status: body
            }
        })
        return new NextResponse(JSON.stringify({ message: "Order updated successfully"}), { status: 200})
    } catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong"}), { status: 500})
    }
}