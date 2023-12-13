import React from 'react'
import '../Styling/musicSidebar.scss'
import { FaSearch, FaHome } from "react-icons/fa";
import songs from '../Components/songStorage'

export default function MusicSidebar() {
  return (
    <div className='musicSidebar'>
        <div className='musicSidebar-Container'>
            <div className='musicSidebar-Menu-Container'>
                <div className='musicSidebar-Menu-Item'>
                    <FaHome/>
                    <h4 className='musicSidebar-Menu-Title'>Home</h4>
                </div>
                <div className='musicSidebar-Menu-Item'>
                    <FaSearch/>
                    <h4 className='musicSidebar-Menu-Title'>Search</h4>
                </div>
            </div>

            <div className='musicSidebar-Libary'>
                <div className='musicSidebar-Libary-Container'>
                    <h4 className='musicSidebar-Libary-Header'>Your Libary</h4>

                    <div className='musicSidebar-Libary-Tags'>
                        <button className='musicSidebar-Libary-Tag'>Playlists</button>
                        <button className='musicSidebar-Libary-Tag'>Songs</button>
                        <button className='musicSidebar-Libary-Tag'>Albums</button>
                    </div>
                    <div className='musicSidebar-Items'>
                        <div className='musicSidebar-Items-Container'>
                                <div className='musicSidebar-Item'>
                                    <img className='musicSidebar-Item-Image'
                                    src={songs[1].imgSrc}></img>

                                    <div className='musicSidebar-Item-Details'>
                                        <h2 className='musicSidebar-Item-Song'>{songs[1].title}</h2>
                                        <h4 className='musicSidebar-Item-Artist'>{songs[1].artist}</h4>
                                    </div>
                                </div>
                                <div className='musicSidebar-Item'>
                                    <img className='musicSidebar-Item-Image'
                                    src={songs[1].imgSrc}></img>

                                    <div className='musicSidebar-Item-Details'>
                                        <h2 className='musicSidebar-Item-Song'>{songs[1].title}</h2>
                                        <h4 className='musicSidebar-Item-Artist'>{songs[1].artist}</h4>
                                    </div>
                                </div>
                                <div className='musicSidebar-Item'>
                                    <img className='musicSidebar-Item-Image'
                                    src={songs[1].imgSrc}></img>

                                    <div className='musicSidebar-Item-Details'>
                                        <h2 className='musicSidebar-Item-Song'>{songs[1].title}</h2>
                                        <h4 className='musicSidebar-Item-Artist'>{songs[1].artist}</h4>
                                    </div>
                                </div>
                                <div className='musicSidebar-Item'>
                                    <img className='musicSidebar-Item-Image'
                                    src={songs[1].imgSrc}></img>

                                    <div className='musicSidebar-Item-Details'>
                                        <h2 className='musicSidebar-Item-Song'>{songs[1].title}</h2>
                                        <h4 className='musicSidebar-Item-Artist'>{songs[1].artist}</h4>
                                    </div>
                                </div>
                                <div className='musicSidebar-Item'>
                                    <img className='musicSidebar-Item-Image'
                                    src={songs[1].imgSrc}></img>

                                    <div className='musicSidebar-Item-Details'>
                                        <h2 className='musicSidebar-Item-Song'>{songs[1].title}</h2>
                                        <h4 className='musicSidebar-Item-Artist'>{songs[1].artist}</h4>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div> 
  )
}

