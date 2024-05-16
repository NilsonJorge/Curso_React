import './LikeContainer.css'

import {BsHeart, BsHeartFill} from 'react-icons/bs'

const LikeContainer = ({photo, user, handleLike}) => {
  return (
    <div className='like'>
        {photo.likes && user && (
            <>
                {photos.likes.includes(user._id) ? (
                    <BsHeartFill/>
                ) : (
                    <BsHeart/>
                )}
            </>
        ) }
    </div>
  )
}

export default LikeContainer