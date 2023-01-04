import { useState } from "react";
import Link from "next/link";

import AcountMenu from "./AcountMenu";
export const HelpCenterMenu=[
  {
    name:"About",
    to:"/About"
  },
  {
    name:"Contact Us",
    to:"/ContactUs"
  }, {
    name:"Sign Up",
    to:"/SignUp"
  }, {
    name:"LogIn",
    to:"/LogIn"
  },
  {
    name:"Subscription",
    to:"/Subscription"
  },
]
export const Discovermenu = [
  {
    name: " Collection ",
    to: "/Collection/",
  },
  {
    name: " Search ",
    to: "/Search",
  },
  {
    name: "Author Profile",
    to: "/AuthorProfile",
  },
  {
    name: "NFT Details",
    to: "/NFTDetails",
  },
  {
    name: "Account Setting",
    to: "/AccountSetting",
  },
  {
    name: "Upload NFT ",
    to: "/UploadNFT ",
  },
  {
    name: "Connect Wallet",
    to: "/ConnectWallet",
  },
  {
    name: "Blog",
    to: "/Blog",
  },
];

const Navbar = () => {
  const [Helpopen, setHelpOpen] = useState(false);
  const [Discover, setDiscover] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [acountMenu, setAcountMenut] = useState(false);





  return (
    <header className="container   font-inter" >
      <div className="flex py-6  mx-3 justify-between items-center">
  
      <Link href="/">
       <svg className="w-16 h-16" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><path d="M16.232 24.047c-0.15-0.034-0.295-0.081-0.441-0.124-0.037-0.011-0.074-0.022-0.11-0.033-0.143-0.044-0.284-0.090-0.425-0.139-0.019-0.007-0.039-0.014-0.058-0.021-0.126-0.045-0.251-0.091-0.375-0.139-0.035-0.014-0.070-0.027-0.105-0.041-0.136-0.054-0.271-0.11-0.405-0.168-0.027-0.012-0.054-0.024-0.081-0.036-0.115-0.052-0.228-0.105-0.341-0.159-0.033-0.016-0.065-0.031-0.099-0.047-0.089-0.043-0.177-0.090-0.264-0.134-0.059-0.031-0.118-0.060-0.176-0.092-0.107-0.058-0.212-0.117-0.317-0.178-0.035-0.020-0.071-0.038-0.107-0.059-0.139-0.081-0.277-0.166-0.412-0.252-0.037-0.024-0.074-0.050-0.111-0.074-0.099-0.063-0.197-0.128-0.293-0.195-0.032-0.021-0.063-0.045-0.094-0.066-0.093-0.066-0.186-0.132-0.277-0.2-0.042-0.031-0.082-0.062-0.123-0.093-0.084-0.064-0.168-0.129-0.25-0.196-0.037-0.030-0.075-0.060-0.112-0.090-0.105-0.087-0.209-0.173-0.312-0.263-0.011-0.009-0.023-0.018-0.034-0.028-0.111-0.097-0.22-0.197-0.328-0.298-0.031-0.030-0.062-0.059-0.092-0.088-0.080-0.076-0.158-0.153-0.235-0.231-0.031-0.031-0.062-0.061-0.092-0.092-0.098-0.101-0.194-0.203-0.289-0.306-0.005-0.005-0.010-0.010-0.014-0.015-0.1-0.109-0.197-0.221-0.293-0.334-0.026-0.031-0.051-0.060-0.077-0.091-0.071-0.086-0.142-0.173-0.211-0.261-0.026-0.031-0.052-0.064-0.077-0.096-0.083-0.108-0.164-0.215-0.243-0.324-2.197-2.996-2.986-7.129-1.23-10.523l-1.556 1.974c-1.994 2.866-1.746 6.595-0.223 9.64 0.036 0.073 0.074 0.145 0.112 0.217 0.024 0.045 0.046 0.092 0.071 0.137 0.014 0.027 0.030 0.053 0.044 0.079 0.026 0.049 0.053 0.095 0.079 0.142 0.047 0.083 0.096 0.166 0.145 0.249 0.027 0.045 0.055 0.091 0.083 0.136 0.055 0.089 0.111 0.176 0.169 0.264 0.024 0.037 0.047 0.075 0.072 0.111 0.080 0.118 0.161 0.236 0.244 0.353 0.002 0.003 0.005 0.006 0.007 0.009 0.013 0.018 0.028 0.037 0.041 0.056 0.072 0.1 0.147 0.199 0.223 0.296 0.028 0.036 0.056 0.072 0.084 0.107 0.067 0.085 0.136 0.169 0.206 0.253 0.026 0.031 0.052 0.063 0.079 0.094 0.094 0.11 0.189 0.22 0.287 0.328 0.002 0.002 0.004 0.004 0.006 0.005 0.004 0.005 0.008 0.008 0.011 0.013 0.095 0.104 0.193 0.206 0.291 0.307 0.031 0.032 0.062 0.063 0.093 0.094 0.076 0.077 0.154 0.153 0.233 0.228 0.032 0.030 0.063 0.061 0.095 0.091 0.105 0.099 0.211 0.196 0.319 0.291 0.002 0.001 0.003 0.003 0.005 0.004 0.018 0.016 0.038 0.032 0.056 0.047 0.095 0.082 0.192 0.164 0.29 0.245 0.040 0.032 0.080 0.064 0.12 0.096 0.080 0.064 0.16 0.127 0.241 0.189 0.043 0.033 0.086 0.066 0.129 0.098 0.089 0.066 0.18 0.131 0.271 0.194 0.033 0.024 0.065 0.047 0.099 0.070 0.009 0.006 0.018 0.013 0.027 0.019 0.086 0.060 0.175 0.116 0.263 0.174 0.038 0.025 0.075 0.051 0.114 0.076 0.136 0.086 0.273 0.171 0.412 0.253 0.038 0.022 0.076 0.043 0.114 0.064 0.102 0.059 0.205 0.117 0.309 0.174 0.056 0.030 0.114 0.059 0.171 0.088 0.073 0.038 0.147 0.078 0.221 0.115 0.017 0.009 0.035 0.017 0.051 0.025 0.030 0.014 0.060 0.028 0.091 0.044 0.116 0.055 0.233 0.11 0.351 0.163 0.025 0.011 0.049 0.022 0.074 0.033 0.135 0.059 0.271 0.116 0.409 0.17 0.033 0.014 0.066 0.026 0.1 0.039 0.127 0.049 0.256 0.098 0.386 0.143 0.016 0.006 0.032 0.012 0.049 0.017 0.142 0.050 0.286 0.096 0.43 0.141 0.034 0.010 0.069 0.021 0.104 0.031 0.147 0.044 0.293 0.097 0.445 0.125 9.643 1.759 12.444-5.795 12.444-5.795-2.352 3.065-6.528 3.873-10.485 2.974zM12.758 16.231c0.216 0.31 0.456 0.678 0.742 0.927 0.104 0.114 0.213 0.226 0.324 0.336 0.028 0.029 0.057 0.056 0.085 0.084 0.108 0.105 0.217 0.207 0.33 0.307 0.005 0.003 0.009 0.008 0.014 0.012 0.001 0.001 0.002 0.002 0.003 0.003 0.125 0.11 0.255 0.216 0.386 0.319 0.029 0.022 0.058 0.046 0.088 0.069 0.132 0.101 0.266 0.2 0.404 0.295 0.004 0.003 0.008 0.006 0.012 0.009 0.061 0.042 0.123 0.081 0.184 0.122 0.030 0.019 0.058 0.040 0.088 0.058 0.098 0.063 0.198 0.125 0.299 0.183 0.014 0.009 0.028 0.016 0.042 0.024 0.087 0.051 0.176 0.1 0.265 0.148 0.031 0.018 0.063 0.033 0.094 0.049 0.061 0.032 0.123 0.064 0.185 0.096 0.009 0.004 0.019 0.009 0.028 0.012 0.127 0.063 0.255 0.123 0.386 0.18 0.028 0.012 0.057 0.023 0.085 0.035 0.105 0.045 0.21 0.088 0.316 0.129 0.045 0.017 0.091 0.033 0.135 0.050 0.097 0.036 0.193 0.069 0.291 0.101 0.044 0.014 0.087 0.028 0.131 0.042 0.139 0.043 0.276 0.098 0.42 0.122 7.445 1.233 9.164-4.499 9.164-4.499-1.549 2.232-4.55 3.296-7.752 2.465-0.142-0.038-0.282-0.078-0.422-0.122-0.043-0.013-0.084-0.027-0.127-0.041-0.099-0.032-0.197-0.066-0.295-0.102-0.045-0.017-0.089-0.033-0.133-0.050-0.107-0.041-0.213-0.084-0.317-0.128-0.029-0.013-0.058-0.024-0.086-0.036-0.131-0.057-0.261-0.117-0.389-0.18-0.066-0.032-0.13-0.066-0.195-0.099-0.037-0.019-0.075-0.038-0.112-0.058-0.083-0.045-0.165-0.092-0.246-0.139-0.019-0.011-0.040-0.022-0.059-0.033-0.101-0.059-0.2-0.12-0.299-0.182-0.030-0.019-0.060-0.040-0.090-0.060-0.065-0.042-0.13-0.085-0.193-0.128-0.137-0.095-0.271-0.194-0.402-0.294-0.030-0.024-0.061-0.047-0.091-0.071-1.401-1.107-2.512-2.619-3.041-4.334-0.554-1.778-0.434-3.775 0.525-5.395l-1.178 1.663c-1.442 2.075-1.364 4.853-0.239 7.048 0.189 0.368 0.401 0.725 0.638 1.065zM20.606 13.664c0.061 0.023 0.123 0.043 0.185 0.064 0.027 0.008 0.054 0.018 0.082 0.026 0.088 0.027 0.175 0.060 0.265 0.076 4.111 0.794 5.226-2.11 5.523-2.537-0.977 1.406-2.618 1.744-4.632 1.255-0.159-0.039-0.334-0.096-0.488-0.151-0.197-0.070-0.39-0.15-0.579-0.24-0.358-0.172-0.699-0.38-1.015-0.619-1.802-1.367-2.922-3.976-1.746-6.101l-0.637 0.877c-0.85 1.251-0.933 2.805-0.344 4.186 0.622 1.467 1.897 2.617 3.384 3.163z"></path></svg>
        </Link>
        <div className="lg:flex hidden border-[1px] p-2 border-icons items-center h-10 rounded-3xl" >
      <input type="text" placeholder="Search NFT" className="outline-none text-icons bg-shadowLight"/>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="h-5 w-5"  xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
        </div>
        <button 
        className="lg:inline-block hidden"  
        onClick={() =>{
          setDiscover(true)
          setHelpOpen(false)
        }}>
          Discover
          </button>
        <button 
         className="lg:inline-block hidden" 
          onClick={() =>{
            setDiscover(false)
            setHelpOpen(true)
          }}>
        Help Center</button>
        <div>
        <svg onClick={()=>setAlert(true)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="w-8 h-8"  xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
        </div>
        <Link href="/ContactUs">
       <button className="lg:inline-block hidden ButtonQHarr rounded-full shadow-icons border-icons px-8 py-4 border   hover:bg-shadowLight bg-icons text-shadowLight hover:text-icons " > Connect</button>
        </Link>
      
       <img 
       onClick={()=>setAcountMenut(true)}
       alt="Profile" src="/assets/user-1.png" className="lg:mr-0 mr-8 w-16 h-16 rounded-full" ></img>
        
     
        </div>
        {acountMenu ? 
        <div>
     <svg
      onClick={()=>setAcountMenut(false)}
      className="w-8 h-8 absolute lg:left-[88%]  mt-2 md:left-[84%] left-[72%] z-50"
     xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor" ><path strokeLinecap="round"strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          <AcountMenu />
          </div>
         :
        <></>
        }
        {Alert ? 
        <div 
        onClick={()=>setAlert(false)}
        id="notificationBox" className="absolute lg:left-[45%] left-[20%] boxShadow  py-4 px-2 text-lg  w-[20rem] rounded-xl flex flex-col bg-shadowLight" >
          <h1 className="text-2xl font-bold mb-2 ">Notification</h1>
          <div className="bg-icons text-shadowLight flex justify-between p-2 rounded-lg">
       <img alt="Profile" src="/assets/user-1.png" className="lg:mr-0 mr-8 w-16 h-16 rounded-full" ></img>
<div>
  <p>Shoaib Akhter</p>
  <p>Measure action your user..</p>
  <p className="text-bgShadowDark">3 minutes ago</p>
</div>
          </div>
          </div> :
        <></>
        }
        {Discover ? 
        <ul className="boxShadow absolute left-[40%] top-[12%] py-4 px-2 text-lg  w-[15rem] rounded-xl flex flex-col bg-shadowLight" >
            {Discovermenu.map(({ name, to }, index) => (
              <Link key={index} href={to}>
                <a
                onClick={() =>{
      setDiscover(false)
      setHelpOpen(false)
    }} 
                  className="hover:bg-icons  hover:text-shadowLight DiscoverItem w-full rounded-md "

                >
                  {name}
                </a>
              </Link>
            ))}
          </ul> :
        <></>
        }
        {Helpopen ?  
          <ul className="boxShadow absolute left-[52%] top-[12%] py-4 px-2 text-lg  w-[15rem] rounded-xl flex flex-col bg-shadowLight" >
            {HelpCenterMenu.map(({ name, to }, index) => (
              <Link key={index} href={to}>
                <a
                onClick={() =>{
      setDiscover(false)
      setHelpOpen(false)
    }} 
                  className="hover:bg-icons  hover:text-shadowLight DiscoverItem w-full rounded-md "
              
                >
                  {name}
                </a>
              </Link>
            ))}
          </ul> :  <></>}
      </header>
 
  );
};

export default Navbar;
