
import { useState, useEffect } from "react";
import { supabase } from "../db/clientSupabase";

// let api_url = `http://localhost:5000/api/card_212417074`;

const BlogSupabase_74 = () => {
    const [name, setName] = useState('212417074');
    const [id, setId] = useState('212417074');
    const [blogs, setBlogs] = useState([]);

    const fetchBlogFromSupabase = async () => {
        try {
            // const response = await fetch(api_url);
            // const data = await response.json();
            let { data, error } = await supabase
            .from('card_212417074')
            .select('*')
                
            console.log('blogs data', data);

            setBlogs(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBlogFromSupabase();
    }, []);

  return (
    <section className="blogs">
    <div className="section-title">
      <h2> Blogs from Supabase</h2>
      <h3>{name}, {id}</h3>
    </div>
    <div className="blogs-center">
        {blogs.map((item) => {
            const { id, descripe, img, remote_url, title, category }= item;
            return (
                <article key={id} className="blog">
                    <img
                    src={img}
                    alt={title}
                    className="img blog-img"
                    />
                    <div className="blog-content">
                    <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
                    <h3>{title}</h3>
                    <p>{descripe}</p>
                    <a href="#">read more</a>
                    </div>
                </article>
            )
        })}
    </div>
  </section>
  )
}

export default BlogSupabase_74