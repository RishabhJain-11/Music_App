import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    onClick={handlePause}
    className='text-gray-300'
    size={35}
  />
) : (
  <FaPlayCircle
    onClick={handlePlay}
    className='text-gray-300'
    size={35}
  />
));

export default PlayPause;
