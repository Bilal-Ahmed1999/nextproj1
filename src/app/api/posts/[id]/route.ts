import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (request:any, {params}:any)=>{
    console.log(params);
    

    const {id} = params

    try{
        await connect();
         const post:any = await Post.findById(id);
         return new NextResponse(JSON.stringify(post), {status: 200})

    }catch(err){
        console.error("error",err)

        return new NextResponse("db Error", {status: 500})
    }

}