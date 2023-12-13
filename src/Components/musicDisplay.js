import React, { useState } from 'react'
import { FaPause, FaBackward, FaForward, FaPlay, FaEllipsisVertical } from "react-icons/fa6";
import { FaExpandAlt, FaCompressAlt } from "react-icons/fa";
import '../Styling/musicDisplay.scss'
import songs from '../Components/songStorage'
import MusicSidebar from './musicSidebar';

export default function MusicDisplay() {

  console.log(songs.length)

  const [playButton, setPlayButton] = useState(true)
  const [expandInterface, setExpandInterface] = useState(true)
  const [counter, setCounter] = useState(0)

  console.log(counter)

  return (
    
    <div className={expandInterface !== true ? 'MusicDisplay' : 'MusicDisplay-Expanded'}>
    {expandInterface !== true ? (
      <>
          <div className='MusicDisplay-Container'>

            <div className='MusicDisplay-ArtistContents'>
              <img 
                className='MusicDisplay-ArtistContents-Image'
                src={songs[counter]?.imgSrc}
                alt="Song cover"
              />
              <div>
                <h3 className='MusicDisplay-ArtistContents-Song'>{songs[counter]?.title}</h3>
                <h2 className='MusicDisplay-ArtistContents-Artist'>{songs[counter]?.artist}</h2>
              </div>
            </div>

            <div className='MusicDisplay-Buttons'>
              <button
                className='MusicDisplay-Button MusicDisplay-Button-Backward'
                onClick={() => {
                  setCounter((prevCounter) => (prevCounter <= 0 ? songs.length - 1 : prevCounter - 1));
                }}
              >
                <FaBackward />
              </button>

              <button
                className='MusicDisplay-Button MusicDisplay-Button-Big'
                onClick={() => setPlayButton((prevPlayButton) => !prevPlayButton)}
              >
                {playButton === true ? <FaPlay/> : <FaPause/>}
              </button>

              <button
                className='MusicDisplay-Button MusicDisplay-Button-Forward'
                onClick={() => 
                  setCounter((prevCounter) => (prevCounter >= songs.length - 1 ? 0 : prevCounter + 1))
                }
              >
                <FaForward/>
              </button>
            </div>

            <div className='MusicDisplay-Settings'>
              <button
                className='MusicDisplay-Expand'
                onClick={() => setExpandInterface((prevExpandInterface) => !prevExpandInterface)}
              >
                <FaExpandAlt />
              </button>
            </div>
            </div>
          </>
        ) : 
        <>
            <div className='MusicDisplay-Expanded-Container'>
                <img 
                className='MusicDisplay-Expanded-Image'
                src={songs[counter].imgSrc}></img>

              <div className='MusicDisplay-Expanded-ArtistContents'>
                <h3 className='MusicDisplay-ArtistContents-Song'>{songs[counter].title}</h3>
                <h2 className='MusicDisplay-ArtistContents-Artist'>{songs[counter].artist}</h2>
              </div>

              <div className='MusicDisplay-Buttons'>
              <button
                className='MusicDisplay-Button MusicDisplay-Button-Backward'
                onClick={() => {
                  setCounter((prevCounter) => (prevCounter <= 0 ? songs.length - 1 : prevCounter - 1));
                }}
              >
                <FaBackward />
              </button>

              <button
                className='MusicDisplay-Button MusicDisplay-Button-Big'
                onClick={() => setPlayButton((prevPlayButton) => !prevPlayButton)}
              >
                {playButton === true ? <FaPlay/> : <FaPause/>}
              </button>

              <button
                className='MusicDisplay-Button MusicDisplay-Button-Forward'
                onClick={() => 
                  setCounter((prevCounter) => (prevCounter >= songs.length - 1 ? 0 : prevCounter + 1))
                }
              >
                <FaForward/>
              </button>
            </div>
                <div className='MusicDisplay-Expanded-Minimise-Container'>
                  <button className='MusicDisplay-Expanded-Minimise'
                    onClick={() => setExpandInterface(false)}
                  >
                   <FaCompressAlt/>
                  </button>
                </div>
            </div>

        </>
        }
        </div>
  )
}
