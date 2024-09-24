import React from 'react'
import { PiMedalMilitaryBold } from "react-icons/pi";

export default function CardProgresso() {
    return (
        <>

            <div className="mb-4">
                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">




                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">





                            <span className="w-64 ml-2 text-black text-xl dark:text-white">
                                Seu progresso
                            </span>

                        </div>

                        <div className="flex items-center">
                            <button className="p-1 border border-gray-200 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>
                            </button>
                            <button className="text-gray-200">
                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex ml-2 items-center mb-6'>

                        <PiMedalMilitaryBold size={32} className='text-gray-200 mr-2' />
                        <span className="text-md font-bold text-gray-500 dark:text-white">
                            Nível: Iniciante
                        </span>
                    </div>
                    {/* <div className="flex items-center justify-between mb-4 space-x-12">
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    PROGRESS
                                                </span>
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    HIGH PRIORITY
                                                </span>
                                            </div> */}

                    {/* ATIVIDADES TOTAL */}
                    <div className="block m-auto mb-6">
                        <div>
                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                Total de atividades realizadas :
                                <span className="font-bold text-gray-700 dark:text-white">
                                    25
                                </span>
                                /50
                            </span>
                        </div>
                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                            <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                            </div>
                        </div>
                    </div>

                </div>

            </div>






        </>
    )
}
