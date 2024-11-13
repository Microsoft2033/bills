"use server"
import { auth } from "@/auth";
import { AuthorizationCheck } from "@/components/config/authorization-check";
import { Borrow } from "./borrow";

export default async function page() {
    const session = await auth()

    return (
        <>
            <AuthorizationCheck />
            <Borrow userId ={session?.user?.id}/>
        </>
    )
    
}