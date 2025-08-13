import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../../api/blogs'
import BlogSingle from "../BlogSingle";
import {Link} from 'react-router-dom'


const BlogSection = () => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({})

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    const [number, setCount] = useState(2);

    return (

        <section className="wpo-blog-section section-padding" id="blog">
            <div className="container">
                <div className="wpo-section-title">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="title">
                                <h2>Our Latest News</h2>
                                <p>Consectetur adipiscing eliplacerat rhoncus non lacinia.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2">
                            <div className="sec-title-btn">
                                <a className="theme-btn-s2" onClick={() => setCount(number + number)}>
                                    View All Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0, number).map((blog, bl) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={bl}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt="" />
                                        <div className="thumb">{blog.thumb}</div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>By <Link to="/" onClick={() => handleClickOpen(blog)}>{blog.author}</Link></li>
                                        </ul>
                                        <h2 onClick={() => handleClickOpen(blog)}>{blog.title}</h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BlogSingle open={open} onClose={handleClose} title={state.title} bImg={state.blogSingleImg} create_at={state.create_at} author={state.author} comment={state.comment} />
        </section>
    );
}

export default BlogSection;