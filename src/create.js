import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create=()=>{
    const [userName,setUserName]=useState('');
    const [body,setBody]=useState('');
    const history=useHistory();

    const handleAdd=(e)=>{
      e.preventDefault();
      const posts={userName,body};
    }

    return(
        <div className="create">
            <h2>Add your post..</h2>
            <form onSubmit={handleAdd}>
                <label>UserName</label>
                <div className="inputBox">
                <input type="text" required value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
                
                </div>
                <label>Type a Post</label>
                <div className="inputBox">
                <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <button>Add</button>
                </div>
                <p>{userName}</p>
                <p>{body}</p>
                

            </form>

        </div>
       
    )
}

export default Create;