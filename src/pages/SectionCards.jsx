import React from 'react'
import MotionCards from './MotionCards'

function SectionCards() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mt-[-18%] max-[1300px]:hidden' >
                <path fill="#ffffff" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,208C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <section className="text-black bg-white body-font mt-[-6rem] max-[1000px]:mt-[1rem]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-800 rounded overflow-hidden">
                            <div className="w-24 h-full bg-[rgb(255,192,203)]"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-[2rem]">
                            <h1 className="sm:w-2/5 text-black font-medium title-font text-[40px] mb-[-4rem] sm:mb-0 max-[1000px]:text-[22px]">
                                UN POCO DE NOSOTROS
                            </h1>

                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-[30rem] overflow-hidden">
                                <img alt="content" className="object-cover object-center h-auto w-full" src="../src/img/imgProducts.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Divisas</h2>
                            <p className="text-base leading-relaxed mt-2">
                                Ser reconocidos como una empresa líder en la producción y venta de cheesecake, destacando por nuestra gran calidad, sabor inigualable y compromiso con la satisfacción del cliente.
                                Expandir nuestra presencia a nivel nacional, llevando la dulzura y la alegría de los cheesecakes a cada persona y hogar guatemalteco.
                            </p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">
                                NUESTRAR VISION

                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-[30rem] overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="../src/img/imgFresas.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Transferencias</h2>
                            <p className="text-base leading-relaxed mt-2">
                                Somos NC DELICAS, dedicados a deleitar a los clientes con los cheesecakes más deliciosos y frescos, elaborados con
                                ingredientes de la más alta calidad. Comprometidos a ofrecer un servicio exclusivo, creando una experiencia memorable para cada cliente.
                            </p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">
                                NUESTRA MISION

                            </a>
                        </div>

                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-[30rem] overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="../src/img/imgFresasConIn.jpg" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-white mt-5">Transferencias</h2>
                            <p className="text-base leading-relaxed mt-2">
                                Comercializar cheesecake a través de la creación de la empresa NC DELICIAS en el mercado guatemalteco, durante el año 2024.
                            </p>
                            <a className="text-indigo-400 inline-flex items-center mt-3">
                                Objetivos

                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionCards