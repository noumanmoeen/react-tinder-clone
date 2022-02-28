import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
      <div className='header_container'>
      <IconButton>
      <PersonIcon fontSize='large'  className='header_icon'/>

      </IconButton>
    
      <img className='header_image' src='https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png' />
      <IconButton>
      <ForumIcon fontSize='large'  className='header_icon'/>

      </IconButton>

      </div>
  )
}

export default Header