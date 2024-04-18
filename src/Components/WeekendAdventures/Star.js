import React from 'react';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

function Star({stars}) {
    const ratingStar = Array.from({length: 5}, (e, index) => {
        let number = index + 0.5;
        
        return (
            <span key={index}>
        {
            stars >= index + 1 ? <StarOutlinedIcon/> : stars >= number ? <StarHalfOutlinedIcon/> : <StarBorderPurple500OutlinedIcon/>
        }
    </span>
  )
})

return (
    <div>
        <div className='icon-star'>
            {ratingStar}
        </div>
    </div>
)
}

export default Star