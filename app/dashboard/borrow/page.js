"use client"
import {useState,useEffect} from "react";
import { TextField } from "@mui/material";
const duration = [
    { id: "7", days:7 },
{ id: "30", days: 30 },
{ id: "90", days: 90 },
];
export default function borrow() {
    const [clickedRate, setClickedRate] = useState(undefined);
    const [rate, setrate] = useState(0);
    const [amount, setamount] = useState(undefined);
    const [payback, setpayback] = useState(undefined);
    const [loadDate,setloadDate] = useState(0);
    
    useEffect(() => {
        if (amount >= 1) {
            const Interest = (rate * amount) / 100;
            setpayback(amount + Interest)
            
        }
    }, [amount, rate]
    );
    
    //  console.log(amount);
    
    
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 px-4 md:px-6 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 bg-gray-50 rounded-md p-2  md:pb-6">
                <blockquote className="border-b border-gray-200 pb-3">
                    <span className="font-thin text-lg text-blue-700">Get an Instant Loan</span>
                </blockquote>
                <form>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-grey-600 text-xs">How much Do you want to borrow?</label>
                        <TextField
                            id="amount"
                            type="number"
                            variaant="oulined"
                            placeholder="loan amount"
                            value={amount}
                            onChange={(text)=>setamount(Number(text.target.value))}
                        />
                    </div>
                </form>
                <div className="border-dash border border-blue-500 p-4 rounded-md">
                    <p className="tetx-blue-700 text-sm mb-3">choose loan duration</p>
                    <ul className="grid grid-cols-3 gap-2 ">
                        {
                            duration.map(item=><li
                                key={item.id}
                                onClick={() => {
                                    setClickedRate(item.id);
                                    if (item.days === 7) {
                                        setrate(15.5)
                                    }
                                    else if (item.days === 30) {
                                        setrate(12)
                                    }
                                    else if (item.days === 90) {
                                        setrate(9.5)
                                    }
                                    
                            
                                    
                                    if (item.days === 7) {
                                        setloadDate(7)
                                    }
                                    else if (item.days === 30) {
                                        setloadDate(30)
                                    }
                                    else if (item.days === 90) {
                                        setloadDate(90)
                                    }
                                }}
                                
                                className={'h-16 bg-blue-700 text-white text-md  uppercase rounded-md justify-center flex items-center'}>{item.days} Days</li>)
                        }
                        
                      
                    </ul>
                </div>
                <div className=" border-dash border border-blue-500 p-4 rounded-md">
                    <p className="text-gray-800">Interest rate for {loadDate}days</p>
                    <p className="text-6xl text-blue-600"> { rate}%</p>
                </div>
                <div className="flex flex-col gap-3 bg-gradient-to-b from-blue-600 to to-blue-800 border-dash border border-blue-500 p-4 rounded-md">
                    <p className="text-blue-50">you will pay back</p>
                    <p className="text-4xl text-white"> ₦{ payback}</p>
                </div>
                <div>
<button className="p-2 rounded-md bg-blue-500 text-white text-xl uppercase">Get loan</button>
                </div>
            </div>

        </main>
    )
}