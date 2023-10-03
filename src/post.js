import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function PostComponent() 
{
  const [postt, setPostt] = useState('');
  const [media, setMedia] = useState('');
  const navigate = useNavigate();

  const postChg = (e) =>{
    setPostt(e.target.value);
  }

  const mediaChg = (e) => {
    setMedia(e.target.value);
  }

  const subPost = async () =>{
    //  e.prevent.default();

    if (postt.trim()==='' || media.trim()===''){
      alert("All fields must be filled");
    }
    else{
      try {
        const response = await axios.post('http://localhost:3030/addpost', {
          upost:postt,
          pimage:media
        });
        console.log("User Registration Successfull!!");
        navigate('/home');
      } catch (error) {
        console.error(error);
      }
    }
     
    
  }
  return (
    <div>
      <form onSubmit={subPost}>
  
  <h1><strong>Create a Post</strong></h1>
  
  {/* <div class="form-group">
    <label for="title">Title <span>Use title case to get a better result</span></label>
    <input type="text" name="title" id="title" class="form-controll"/>
  </div> */}
  {/* <div className="form-group">
    <label for="caption"><span>Write Something</span></label>
    <input type="text" className="form-controll" value={postt} onChange={postChg}/>
  </div>
  
  <div className="form-group file-area">
        <label for="images">Images/Video <span>Your images should be at least 400x300 wide</span></label>
        <input type="text" required="required" className="form-controll" value={media} onChange={mediaChg}/>
    <div className="file-dummy">
      <div className="default">Please post the image/video link above</div>
    </div>
  </div>
  
  <div className="form-group">
    <button type="submit" onClick={subPost}>Post</button>
  </div>  */}
<div>
<label><span>Write Something</span></label>
<input type='text' onChange={postChg} value={postt}/>
<label><span>Enter Image link</span></label>
<input type='text' onChange={mediaChg} value={media} />
</div>
<button type='submit'>Post</button>

</form>
    </div>
  )
}

export default PostComponent;