"use server"
import {connection, dataModel } from "@/actions/connectDB"

export default async function action(str: string) {
 try{
    await connection;
    const email = new dataModel({
      email:str 
    }
    )
    await email.save()
    return true 
 }
 catch(err){
    return false
 }
}