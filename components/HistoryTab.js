"use client"
import { useContext } from "react";
import { AppContext } from "./config/context.config";
import { useRouter } from "next/navigation";
import { timeStamoToDate } from "@/utils/timestamp-to-date";

export function HistoryTab({ docId, amount, rate, duration, date, type, timestamp }) {
    const { setLoanDocId } = useContext(AppContext);
    const router = useRouter();
    return (
        <div
            onClick={() => {
                setLoanDocId(docId);
                router.push("/dashboard/loan_details")
            }}
            
            className="flex flex-col border border-blue-100 rounded-md p-3 cursor-pointer">
                        <ul className="flex justify-between border-b border-blue-100 pb-2">
                            <li className="font-bold text-2xl text-gray-700">N{amount}</li>
                <li className="text-xs text-blue-500">{rate}%</li>
                        </ul>
                        <ul className="pt-2 flex justify-between items-center">
                            <li className="text-sm text-gray-700">{duration} Days</li>
                            <li className="text-sm text-gray-700">{timeStamoToDate(timestamp)}</li>
                            <li className="text-sm text-gray-700">{type}</li>
                        </ul>
                    </div>
    )
}