import React from 'react'
import CardAtividadesFeitas from './CardAtividadesFeitas'


export default function Card() {

    const treino = [
        {
            nome: 'Corrida',
            distancia: '3.200m',
            tempo: '19m12s',
        },
        {
            nome: 'Natação',
            distancia: '50m',
            tempo: '1m20s',
        }

    ]


    return (
        <>
            <div className="mb-4">
                <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">






                    <div>
                        <span className="inline-block text-xl text-gray-500 dark:text-gray-100 mb-4">
                            Atividades realizadas hoje

                        </span>
                    </div>

                    {/* CARD ATIVIDADES DO DIA - SUBCARD */}

                    {
                        treino.map(item => <CardAtividadesFeitas atividade={item.nome} distancia={item.distancia} tempo={item.tempo} />)
                    }



                </div>
            </div>
        </>
    )
}
