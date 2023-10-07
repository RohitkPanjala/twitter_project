import React from 'react'
import RightBarComponent from './rightbar';
import LeftBarComponent from './leftbar';
function NewPostComponent() {
  return (
    <div>
        <h1>NewPostComponent</h1>
        <div className='left-bar'>
</div>
<div className='right-bar'>
<RightBarComponent/>
</div>

    </div>

  )
}

export default NewPostComponent;