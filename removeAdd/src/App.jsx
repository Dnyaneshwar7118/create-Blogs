import { useState } from 'react'
import './App.css'
import Blog from './container/Blog';

function App() {

  const [blogs, setblogs] =useState([
    {
      id: 1,
      title: "Securing Node.js in Production: Expert Practices for Every Developer",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    },
    {
      id: 2,
      title: "Securing Node.js in Production: Expert Practices for Every Developer",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    },
    {
      id: 3,
      title: "Securing Node.js in Production: Expert Practices for Every Developer",
      description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
    }
  ]);

  const generateNewBlog = () =>{
     return{
      id: blogs.length + 1,
      title: `Securing Node.js in Production: Expert Practices for Every Developer ${blogs.length + 1}`,
      description: `Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores. ${blogs.length + 1}`,
      imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
     }
  }
   
  const handleAddBlog = () =>{
    const newBlog = generateNewBlog();
    setblogs([...blogs, newBlog]);
  }

  const removeBlog = (id) =>{
    const newArray = [];
    blogs.forEach((blog) =>{
      if(blog.id !== id){
        newArray.push(blog);
      }
    });
    setblogs(newArray);
  }

  return (
    <>
    <button onClick={() => handleAddBlog()}>Add Blog</button>
      {blogs.map((blog) => (
        <>
        <Blog
          key = {blog.id}
          title={blog.title}
          description={blog.description}
          imgUrl={blog.imgUrl}
        />
      <button onClick={() => removeBlog(blog.id)}>Remove Blog</button>
        </>
      ))}
    </>
  )
}

export default App
