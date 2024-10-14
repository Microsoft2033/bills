import Image from "next/image";
export  default function Dashboard(){
    return(
        <main>
            <p>user Dashboard</p>
            <p>propose a ui design</p>
            <p>build the ui</p>
            <p>propose possible changes</p>
            <Image width={480} height={250} src="/coff1.jpg" alt="screenshot"/>
        </main>
    )
}