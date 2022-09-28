import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/services/shazamCore';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
    <div className='flex-1 flex flex-col justify-between items-center'>
      <img src={song?.images?.coverart} alt={song?.title} />
      <div className='flex-1 flex flex-col justify-center mx-3'>
        <Link to={`/songs/${song.key}`}>
          <p className='text-xl font-bold text-white'>
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className='text-base text-gray-300 mt-1'>
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause 
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const {data} = useGet
}

/**
 * 1.22.50
 */