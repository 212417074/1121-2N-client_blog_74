import { useState } from 'react';
import blogData_74 from '../data/blogData';

const BlogLocalJson_74 = () => {
    const [name, setName] = useState('212417074');
    const [id, setId] = useState('212417074');
    const [blogs, setBlogs] = useState(blogData_74);

    return (
        <section className="blogs">
            <div className="section-title">
                <h2> Blogs from Local Json </h2>
                <h3> {name}, {id} </h3>
            </div>
            <div className="blogs-center">
                {blogs.map((item) => {
                    const { id, descripe, img, remote_url, title, category } = item;
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

export default BlogLocalJson_74