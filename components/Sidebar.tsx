import React from 'react'

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
                <div className="flex flex-col justify-between mt-6">
                    <aside>
                        <ul>
                            <li>
                                <a className="flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 rounded-md" href="#">
                                    <span className="mx-4 font-medium">Inicio</span>
                                </a>
                            </li>

                            <li>
                                <a className="flex items-center px-4 py-4 text-gray-700 bg-gray-100 rounded-md" href="#">
                                    <span className="mx-4 font-medium">Explorar</span>
                                </a>
                            </li>
                            
                            <li>
                                <a className="flex items-center px-4 py-4 text-gray-700 bg-gray-100 rounded-md" href="#">
                                    <span className="mx-4 font-medium">Favoritos</span>
                                </a>
                            </li>

                            <li>
                                <a className="flex items-center px-4 py-4 text-gray-700 bg-gray-100 rounded-md" href="#">
                                    <span className="mx-4 font-medium">Categorias</span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    )
}
