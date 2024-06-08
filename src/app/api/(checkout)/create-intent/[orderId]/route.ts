import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../../utils/connect";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request:NextRequest,
    {params}: {params: {orderId: string}}
    ) {
    // get order id from params
    const { orderId } = params;

    // find order by id in database using prisma
    const order = await prisma.order.findUnique({
        where : {
            id:orderId
        },
    });

    if (order) {
        // if order found create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 100 * 100,
            currency: "usd",
            automatic_payment_methods: {
              enabled: true,
            },
          });

        // update order with intent id using prisma
        await prisma.order.update({
            where: {
                id: orderId
            },
            data : { intent_id: paymentIntent.id},
        })
        
        // return client secret
        return new NextResponse(
            JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            { status: 200 }
          );
          
    } 
    return new NextResponse(
        JSON.stringify({ message:"Order not found!" }),
        { status: 404 }
      );
}