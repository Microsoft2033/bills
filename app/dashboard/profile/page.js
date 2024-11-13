"use server"
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";
import { AuthorizationCheck } from "@/components/config/authorization-check";

export default async function profile() {
    const session = await auth();
    return (
        <>    
        <AuthorizationCheck/>
        <main className="min-h-screen flex justify-center py-4 md:py-6 px-4 md:px-6 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 bg-gray-50 rounded-md p-2  md:pb-6">
                <div className="flex justify-center">
                    <Image width={80} height={80} src={session?.user?.image} alt="profile photo" className="rounded-full"/>
                </div>
                <p className=" py-3 border-b border-b-sky-200">{session?.user?.name}</p>
                <p className=" py-3 border-b border-b-sky-200">{session?.user?.email}</p>
                    <p className=" py-3 border-b border-b-sky-200"> customer ID:{session?.user?.id}</p>
                    <form action={async () => {
                        "use server"
                        await signOut()
                        redirect("/auth/signin")
                    }}>
                         <Button variant="contained" color="error" type="submit">log out</Button>

                    </form>
                <Link className="p-2 bg-blue-700 rounded-md text-lg text-white text-center" href="/dashboard/update-profile">update profile</Link>
            </div>
            </main>
        </>
    )
} 