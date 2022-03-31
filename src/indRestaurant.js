import { Link } from "react-router-dom";

/* import ProductCard from "../ProductCard";

<div className="restaurants">
        <ProductCard addHandler={handlers[0]} increaseHandler={handlers[1]} decreaseHandler={handlers[2]} returnCount={handlers[3]} product = {{productID: '1', title: 'Chole Bhature', description: 'Awesome meal from the heritage of Punjab', price: '25', image: './product1.jpg', count: 0}}/>
        <ProductCard  addHandler={handlers[0]} increaseHandler={handlers[1]} decreaseHandler={handlers[2]} returnCount={handlers[3]} product = {{productID: '2', title: 'Masala Dosa', description: 'Mouth watering speciality of South India', price: '45', image: './product2.jpg', count: 0}}/>
        <ProductCard addHandler={handlers[0]} increaseHandler={handlers[1]} decreaseHandler={handlers[2]} returnCount={handlers[3]} product = {{productID: '3', title: 'Fried Rice', description: 'Have a taste of the fresh aromatic flavoured rice we offer', price: '70', image: './product3.jpg', count: 0}}/>
      </div>
      */
 const BlogList=({ posts,title})=>{


        return(
            <div className="blog-list">
                <h2>{title}</h2>
                {posts.map(post=>(
                    <div className="post-preview" key={post.id}>
                        <Link to={`/restaurants/${post.id}`}>
                        <h2>{ post.restname }</h2>
                        
                        <p>Ratings : { post.rating }</p>
                        <p>Total_Ratings : { post.totalRating }</p>
                        <p>Open Time : { post.openTime }</p>
                        <p>Close Time: { post.closeTime }</p>
                        </Link>
                        {/*
                        <p>Items: { post.items }</p> */}
                        </div>
                ))}
    
    
            </div>
        )
    }
    
    export default BlogList;