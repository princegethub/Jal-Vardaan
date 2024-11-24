import React from 'react'
import emeporment from "../../assets/image.png";
import location from "../../assets/location.png";
import waterquality from "../../assets/water quality.png";
export default function Archivement() {
    return (
        <>

            <div className='flex item-center justify-center flex-col items-center gap-12 '>


                <p className=" text-[30px] font-mulish text-[#406B95] font-bold mb-4" >What We Have Done </p>


                <div className="flex justify-center items-center gap-24 ">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src={emeporment} alt="" className="h-[2rem]"/>
                        <h4 className='text-[2rem] font-bold'>10Cr Plus</h4>
                        <p className='text-[#989898]'>HOUSEHOLDS EMPOWERED</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                    <img src={location} alt="" className="h-[2rem]"/>

                        <h4 className='font-bold text-[2rem]'>25Cr Plus</h4>
                        <p className='text-[#989898]'>STATES AND COUNTING</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                    <img src={waterquality} alt="" className="h-[2rem]"/>

                        <h4 className='font-bold text-[2rem]'>80%</h4>
                        <p className='text-[#989898]'>QUALITY WATER</p>
                    </div>
                </div>

            </div>


        </>
    )
}
