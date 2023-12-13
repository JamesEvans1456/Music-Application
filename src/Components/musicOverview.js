import React from 'react'
import '../Styling/musicOverview.scss'
import MusicSidebar from './musicSidebar'
import songs from './songStorage'

export default function MusicOverview() {
  return (
    <div className='musicOverview'>
        <div className='musicOverview-Sidebar'>
            <MusicSidebar/>
        </div>

        <div className='musicOverview-Container'>
            <h2 className='musicOverview-Title'>Good afternoon, jamesevans14</h2>

            <h4 className='musicOverview-Subtitle'>Recently Played</h4>

            <div className='musicOverview-RecentlyPlayed'>
                <div className='musicOverview-RecentlyPlayed-Item'>
                    <img src={songs[1].imgSrc}
                     className='musicOverview-RecentlyPlayed-Item-Image'
                    ></img>

                    <h4 className='musicOverview-RecentlyPlayed-Item-Title'>Original Pirate Material</h4>
                </div>
                <div className='musicOverview-RecentlyPlayed-Item'>
                    <img src={songs[1].imgSrc}
                     className='musicOverview-RecentlyPlayed-Item-Image'
                    ></img>

                    <h4 className='musicOverview-RecentlyPlayed-Item-Title'>Original Pirate Material</h4>
                </div>
                <div className='musicOverview-RecentlyPlayed-Item'>
                    <img src={songs[1].imgSrc}
                     className='musicOverview-RecentlyPlayed-Item-Image'
                    ></img>

                    <h4 className='musicOverview-RecentlyPlayed-Item-Title'>Original Pirate Material</h4>
                </div>
                <div className='musicOverview-RecentlyPlayed-Item'>
                    <img src={songs[1].imgSrc}
                     className='musicOverview-RecentlyPlayed-Item-Image'
                    ></img>

                    <h4 className='musicOverview-RecentlyPlayed-Item-Title'>Original Pirate Material</h4>
                </div>
            </div>

            <h4 className='musicOverview-Subtitle'>Jump back in</h4>
            <div className='musicOverview-Rewind-Rewinds'>
                <div className='musicOverview-Rewind'>
                    <img
                     className='musicOverview-Rewind-Image'
                     src={songs[1].imgSrc}
                    ></img>

                    <div className='musicOverview-Rewind-Details'>
                        <h2 className='musicOverview-Rewind-Title'>Original Pirate Material</h2>
                        <h4 className='musicOverview-Rewind-Artist'>The Streets</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
