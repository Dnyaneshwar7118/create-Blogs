import "./styles/Blog.css"
function Blog({ title, description, imgUrl })
{
    
    return(
        <>
           <div className="blogContainer">
                <div className="details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="imgWrapper">
                    <img src={imgUrl} alt=""></img>
                </div>
           </div>
        </>
    )
}

export default Blog;