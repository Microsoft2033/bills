"use client"

import React from "react";
import { db } from "@/components/config/firebase.config";
import { getDocs, collection, orderBy, where} from "firebase/firestore";
import { HistoryTab } from "@/components/HistoryTab"
import { useSession } from "next-auth/react";
export default function History() {
    const [loans, setloans] = React.useState([]);
    const {data:session}= useSession()
    React.useEffect(() => {
        const handleFetchLoans = async () => {
            const q = collection(db, "loans");
            const onsnap = await getDocs(q, where("user", "==", session?.user?.id),
                orderBy("timecreated","desc"))
            const compileResult = [];
            onsnap.docs.forEach(doc => {
                compileResult.push({
                    id: doc.id,
                    data: doc.data()
                });
                setloans(compileResult)
            })
        }
        session ? handleFetchLoans() : null
    }, []);
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-sky-100 via-sky-200 to-blue-300">
            <div className="w-[380px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">My loan History</h1>
                <div className="flex flex-col gap-4">
                    {/* <HistoryTab/> */}
                    {loans.map(loan => <HistoryTab
                        docId={loan.id}
                        amount={5000} rate={12.5} duration={30} type="personal" timestamp={loan.data.timecreated} key={loan} />)}

                </div>
            </div>
        </main>
    )
}