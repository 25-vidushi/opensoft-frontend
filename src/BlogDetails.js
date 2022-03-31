import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
//import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";
//import Cart from "./Cart/Cart";
//import DataContext from "./context";

const BlogDetails=()=>{
    const {id}=useParams();
    const {data:post}=useFetch(' http://localhost:8000/restaurants/' + id)
 
 
    return (
     <div className="blog-details">
         <h2>Restaurant Details - {id}</h2>
          {post && (
              <article>
                  <h2 style={{
                      fontSize: "50px",
                      marginTop: "80px",
                  }}>{post.restname}</h2>
                        <p style={{
                            fontSize: "20px"
                        }}>Ratings : { post.rating }
                        <br/><br/>
                        Total_Ratings : { post.totalRating }
                        <br/><br/>
                        Open Time : { post.openTime }
                        <br/><br/>
                        Close Time: { post.closeTime }
                        <br/><br/></p>
                        
                        {post && post.items.map(p=>(
                    <div className="blog-preview" key={p.id}
                    style={{
                        display: "grid",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        width: "300px",
                        margin: "auto",
                        textAlign: 'center',
                        paddingBottom :'10px' ,
                        backgroundColor: '#FFF7BC',
                        fontFamily: 'Noto Sans, sans-serif',
                        borderRadius: "10px",
                        color: '#116530',
                        marginBottom: '50px',
                        fontSize: "20px"
                       
                    }}>
                         <p>ItemName: { p.itemName }</p>
                        <p>Price : { p.price}</p>
                        <div><Link to="/Cart">Add to Cart</Link></div>
                        
                        </div>
                ))}
              </article>
          )}
     </div>
 )

                        
}

export default BlogDetails;