import useFetch from "./useFetch";
import { useParams } from "react-router-dom";


const BlogDetails=()=>{
    
    const {id}=useParams();
    const {data:post}=useFetch(' http://localhost:8000/restaurants/' + id)
 return (
     <div className="blog-details">
         <h2>Restaurant Details - {id}</h2>
          {post && (
              <article>
                  <h2>{post.restname}</h2>
                        <p>Ratings : { post.rating }</p>
                        <p>Total_Ratings : { post.totalRating }</p>
                        <p>Open Time : { post.openTime }</p>
                        <p>Close Time: { post.closeTime }</p>
                        <p>{post && post.items.map(p=>(
                    <div className="blog-preview" key={p.id}>
                         <p>ItemName: { p.itemName }</p>
                        <p>Price : { p.price}</p>
                               
                        </div>
                ))}</p>
              </article>
          )}
     </div>
 )

                        
}

export default BlogDetails;