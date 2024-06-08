
import { getAuthSession } from "../../../utils/auth";
import prisma from  "../../../utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
        // if user is admin, return all orders
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      // else filter orders by those matching email of user
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};


// CREATE NEW ORDER
export const POST = async (req:NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();
      // check session has user
      if (session.user) {
        // use the data from the body to create a new order
        const order = await prisma.order.create({
          data: body,
        });
        // return the order as a response
        return new NextResponse(JSON.stringify(order), { status: 201 });
      }
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
}

