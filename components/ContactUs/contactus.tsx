'use client'
import Image from 'next/image'
 
export default function Page() {

    const handleInputChange = (): void => {
             console.log("clicked")
          };
  return (

    <div className="min-h-screen flex p-6  bg-white  shadow-lg shadow-[#919b99] w-[1150px] mr-auto mb-[300px] ml-[100px]  rounded "
        > 
   <div className="text-center py-12 pb-4 ml-20 w-full max-w-xs">
        <h1 className="text-left text-[41px] font-bold text-[#00B188] "> Get In touch</h1>
        <h1>We are here for you! How can we help?</h1>        
         <form className = "mb-2 ml-3 mt-4 justfify-left text-left">
            
         <div className = "mt-[10px]"><label className="" htmlFor="Name">Name: </label> <br/>
            <input
            className ="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border border-black-300 rounded w-[310px] h-10 "
             type="text"
             id="Name"
             placeholder=""
             
             onChange={handleInputChange}
           /> 
           <br/>
           </div>
         
           <div className = "mt-[10px]">
           <label htmlFor="Email" >Email: </label>
         <br/>
          
           <input
             className ="focus:outline-[#00B188] border-[#00B188] focus:shadow-outline border border-black-300 rounded w-[310px] h-10 mt-[10px] "
             type="Email"
             id="Email"
             placeholder=""
             onChange={handleInputChange}
           /> <br/>
           

           </div>
        
           
           <div className = "mt-[10px]">
            <label htmlFor="Message">Message: </label> <br/>           
            <textarea 
            id='Message'
            className="w-full p-4 border resize-y focus:outline-[#00B188] border-[#00B188] rounded mt-[10px]" 
            rows={2} 
            placeholder="Enter your text here...">
            </textarea><br/>
           </div>
           

           <button 
            className="font-poppins  font-bold ml-3 px-5 py-3 w-[300px] bg-[#22B286] text-white rounded-full hover:bg-[#1b945b] transition-colors mt-[40px] "
           type="submit">Submit</button>
         </form>

        

        
   </div>
   
   <div className="relative w-full max-w-lg mt-20 ml-[200px]">
        <Image
            src="/images/contactUs.png" 
            alt="External Image"
            width={400}
            height={300}
            className="mx-auto "
            />
          <div className="mt-6 ml-[100px] space-y-2">
  {/* Address Section */}
  <a 
  href="http://maps.app.goo.gl/9rRaCtewwvDsJZ646"
  target = "_blank">
        <div className="flex items-start space-x-2">
          <Image
            src="/images/location.png"
            alt="location icon"
            width={25}
            height={30}
            className=""
            />
          <h3 className="text-gray-700">
            4 Kilo Addis Ababa, Ethiopia
          </h3>
    </div>
    </a>

  {/* Phone Section */}
  <a href="tel:+1234567890" className="block"><div className="flex items-center space-x-2">
   <Image
      src="/images/call.png"
      alt="call icon"
      width={25}
      height={30}
      className=""
    />
    <h3 className="text-gray-700">+251938594992</h3>
   
  </div>
  </a>
  

  {/* Email Section */}
  <a href="mailto:contactus@hummflytech.com"> <div className="flex items-center space-yspace-x-2">
    <Image
      src="/images/mail.png"
      alt="mail icon"
      width={30}
      height={30}
      className=""
    />
    <h3 className="text-gray-700">contact@hummflytech.com</h3>
  </div></a>
 
  </div>
</div>
        
   </div>

  )
}



