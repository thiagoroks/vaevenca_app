import React from 'react'
import { MdOutlineDirectionsRun } from "react-icons/md";
import { TbSwimming } from "react-icons/tb";

export default function CardAtividadesFeitas({ atividade, distancia, tempo }) {
    return (
        <>
            <div className="w-full">

                <div className="w-full">
                    <div className="mb-4">
                        <div className={atividade == 'Corrida' ? "w-full p-4 shadow-lg rounded-2xl bg-yellow-200" : "w-full p-4 shadow-lg rounded-2xl bg-blue-200"}>
                            <div className="flex items-center justify-between mb-6">



                                <div className="flex items-center">

                                    {
                                        atividade == 'Corrida' ?

                                            <MdOutlineDirectionsRun size={32} />

                                            :


                                            <TbSwimming size={32} />
                                    }

                                    <div className="flex flex-col">
                                        <span className="ml-2 font-bold text-gray-700 text-md">
                                            {atividade}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-500">
                                            Distância: {distancia}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-500">
                                            Tempo: {tempo}
                                        </span>
                                    </div>
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



                            {/* <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                DUE DATE : 18 JUN
                            </span> */}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
