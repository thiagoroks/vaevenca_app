import React from 'react'
import Tri9Logo from '../assets/images/tri9_logo.png'
import profileUser from '../assets/images/profile_user.jpg'
import Card from '../components/Card'
import CardProgresso from '../components/CardProgresso'
import CardTreinos from '../components/CardTreinos'
import NavBar from '../components/NavBar'


export default function Dashboard() {
    return (
        <>
            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="flex items-start justify-between">
                    <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
                        <div className="h-full bg-white rounded-2xl dark:bg-gray-700">



                            {/* LOGO SIDE BAR */}
                            <div className="flex items-center justify-center pt-6">

                                <img src={Tri9Logo} style={{ width: '192px', height: '90px' }}>
                                </img>

                            </div>






                            {/* NAVBAR */}
                            <nav className="mt-6">
                                <NavBar />
                            </nav>




                        </div>





                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">


                        {/* HEADER BAR */}
                        <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
                            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                                <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                                    <div className="container relative left-0 z-50 flex w-3/4 h-auto">
                                        <div className="relative flex items-center w-full h-full lg:w-64 group">
                                            <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                                <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                                </path>
                                            </svg>
                                            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                                            <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src={profileUser} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* FIM HEADER BAR */}


                        <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">



                                <div className="w-full sm:w-1/2 xl:w-1/3">

                                    {/* CARD 1 */}
                                    <CardProgresso />








                                    <div className="mb-4">

                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">

                                        {/* CARD DE ATIVIDADES REALIZADAS HOJE */}


                                        <Card />

                                        {/* CARD TASKS */}





                                    </div>
                                    <div className="mb-4 sm:ml-4 xl:mr-4">

                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 xl:w-1/3">






                                    <div className="mb-4">
                                        <CardTreinos />




                                    </div>







                                    <div className="mb-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
