export default function AboutUs () {
    return (
        <div className="h-full bg-black">

        <div className="px-3 md:px-8 lg:px-16 text-white">
            <h1 className="text-4xl text-white font-bold text-center my-6 py-4">About Us</h1>
            <h2 className="text-2xl text-white font-bold text-center py-4">Welcome to Bills.com</h2>
            <p className="leading-8 flex justify-center items-center mx-4">At Bills.com, we are dedicated to transforming your visions into reality. Founded in 2012 by a passionate team of experts, we specialize in [briefly mention the services offered, e.g., digital marketing, consulting, design, etc.]. Our mission is to deliver innovative solutions tailored to meet the unique needs of our clients, empowering them to thrive in a competitive landscape.</p>
            <div>
            <h2 className="text-4xl text-white font-bold text-center my-4 py-2">Our Vission</h2>

            <p className="leading-8 flex justify-center items-center mx-4">We believe in a world where every business, regardless of size, can access the tools and expertise needed to succeed. Our vision is to be a trusted partner, guiding you through challenges and helping you seize opportunities.</p> 
            </div>

            <div>
            <h2 className="text-4xl text-white font-bold text-center my-4 py-2">Our Values</h2>
            <ul className=" ">
                <li>
                <span className="font-bold">Integrity:</span> We operate with transparency and honesty, building lasting relationships with our clients.
                </li>
                <li>
                <span className="font-bold">Innovation:</span> Our team is committed to staying ahead of industry trends, ensuring we provide cutting-edge solutions.</li>
                <li>
                <span className="font-bold">Collaboration:</span> We value teamwork and foster a culture of collaboration, both within our team and with our clients.</li>
                <li>
                <span className="font-bold">Excellence:</span> We strive for excellence in everything we do, from the services we provide to the relationships we build.</li>
            </ul>
            </div>
            <div className="m-8 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 md:mx-[20%] mx-[20%] lg:mx-[10%]">
               <div className="bg-gray-400 p-4 rounded-2xl w-fit h-70vh p-4 m-2">
                <h2 className="text-2xl font-bold flex justify-center ">LOANS</h2>
                <p className="text-2xl font-bold text-center">loan Amount:</p><br/>
                <p className="text-2xl font-bold text-center">5000000</p>

               </div>
               <div className="bg-gray-400 p-4 rounded-2xl w-fit h-70vh p-4 m-2">
                <h2 className="text-2xl font-bold flex justify-center ">LOANS</h2>
                <p className="text-2xl font-bold text-center">loan Amount:</p><br/>
                <p className="text-2xl font-bold text-center">5000000</p>

               </div>
               <div className="bg-gray-400 p-4 rounded-2xl w-fit h-70vh p-4 m-2">
                <h2 className="text-2xl font-bold flex justify-center ">LOANS</h2>
                <p className="text-2xl font-bold text-center">loan Amount:</p><br/>
                <p className="text-2xl font-bold text-center">5000000</p>

               </div>
               <div className="bg-gray-400 p-4 rounded-2xl w-fit h-70vh p-4 m-2">
                <h2 className="text-2xl font-bold flex justify-center ">LOANS</h2>
                <p className="text-2xl font-bold text-center">loan Amount:</p><br/>
                <p className="text-2xl font-bold text-center">5000000</p>

               </div>
            </div>
            <div className="p-3 m-4">
                <h2 className="text-2xl font-bold text-center m-4 p-2">TESTIMONIALS</h2>
               <div className="lg:flex md:grid md:grid-cols-1 sm:block ">
                <div className="m-4">
                <div className="w-[80%] h-[fit] p-2 rounded-full bg-gradient-to-r from-blue-800 via-pink-300 via-orange-400 to-green-400 mx-auto">
                    <img className="rounded-full" src="https://innovative-market.com/temp/custom/11.jpg"></img>
                </div>
                    <h2 className="text-xl p-2 font-bold m-1 ">Sarah Rodriguez</h2>
                    <p className="">bills has transformed the way I manage my finances. Thanks to their expert guidance, I've seen significant growth in my portfolio. Their personalized approach and attention to detail are truly commendable</p>
                </div>
                
                <div className="m-4">
                <div className="w-[80%] h-[fit] p-2 rounded-full bg-gradient-to-r from-blue-800 via-pink-300 via-orange-400 to-green-400 mx-auto">
                    <img className="rounded-full" src="https://innovative-market.com/temp/custom/12.jpg"></img>
                </div>
                    <h2 className="text-xl p-2 font-bold m-1">Sarah Rodriguez</h2>
                    <p className="">I've been a client of Bills for several years now, and I couldn't be happier. Their team is knowledgeable, responsive, and always looking out for my best interests. I highly recommend them to anyone looking to secure their financial future.</p>
                </div>
                
                <div className="m-4">
                <div className="w-[80%] h-[fit] p-2 rounded-full bg-gradient-to-r from-blue-800 via-pink-300 via-orange-400 to-green-400 mx-auto">
                    <img className="rounded-full w-[fit] h-[fit]" src="https://innovative-market.com/temp/custom/13.jpg"></img>
                </div>
                    <h2 className="text-xl p-2 font-bold m-1">Sarah Rodriguez</h2>
                    <p className="">Choosing Bills was one of the best decisions I've made for my financial goals. Their investment strategies are well-researched and tailored to my needs, giving me confidence in my financial future</p>
                </div>
            </div>    
        </div>
            </div>
        </div>

    )
}