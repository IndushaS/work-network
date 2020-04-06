import React, { Component } from 'react';
import './forum.css'
import _uniqueId from 'lodash/uniqueId';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import hamza from './Photo/hamza.png'
import josh from './Photo/josh.jpeg'
const _ = require('lodash');

class Forum extends Component {
    constructor() {
        super();

        this.addPost = this.addPost.bind(this)
        this.getPosts = this.getPosts.bind(this)
        this.state = {
            posts: [],
            post: {
                Post_ID: '',
                Group_ID: '',
                Employee_ID: '',
                Department_ID: '',
                Branch_ID: '',
                PostalCode: '',
                Tag: '',
                Date: '',
                PostText: ''
            },


        }


    }

    componentDidMount() {
        this.getPosts();
    }
    getPosts() {

        fetch('/api/getPosts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }, () => console.log('posts fetched...', posts)));
    }

    onChange = (e) => {
        const { post } = this.state
        this.setState({ post: { ...post, [e.target.name]: e.target.value } });
    }
    addPost() {

        fetch("/api/addPost?Post_ID=" + _.uniqueId('p') + "&Group_ID=G123&Employee_ID=Eaejl89ls4hH6AEzrRe8AzFpT4w1&Department_ID=D123&Branch_ID=B123&PostalCode=l5e213&Tag=" + this.state.post.Tag + "&Date=01/04/2019&PostText=" + this.state.post.PostText + "")
            .then(res => res.json)
            .then(this.getPosts)
            .catch(err => console.error(err))

    }

    render() {
        return (
            <div>
                <div>
                    <h3>Post</h3>
                    <div className="post">
                    <Paper>
                        <div className="postItem">
                            <div className="postAvatar">
                            <Avatar alt="H" src={hamza} />
                            </div>
                            <div className="postText">
                                <TextField
                                    id="standard-basic"
                                    name='Tag'
                                    value={this.state.post.Tag}
                                    onChange={this.onChange}
                                    label="Subject"

                                    variant="outlined"
                                />
                                <TextField
                                    style={{width:400,margin:'10px 0 0 0'}}
                                    id="outlined-multiline-static"
                                    label="What would you like to say?"
                                    name='PostText'
                                    value={this.state.post.PostText}
                                    onChange={this.onChange}
                                    multiline
                                    rows="4"

                                    variant="outlined"
                                />

                                <Button variant="contained" onClick={this.addPost} style={{ background: '#4CB9D3', color: 'white' }}>
                                    Post
                                </Button>
                            </div>
                        </div>
                    </Paper>
                    </div> 
                    <div className="RecentPosts">
                    <h3> Recent Posts</h3> 
                    <div className="post"> 
                    
                    <ul>
                    <div className="main">
                                    
                                    <li>

                                        
                                            <div className="list">
                                                <div className="avatar">
                                                
                                                     <Avatar alt="H" src={josh}></Avatar>
                           
                                                    <p>Josh</p>
                                                </div>
                                                <div className="text">
                                                    <p>Subject: Spring Update</p>
                                                    <p>Hello everyone, wanted to see how everyone is doing and let me know how your tasks are going.</p>
                                                </div>
                                            </div>
                                        

                                    </li>
                                </div>
                            {this.state.posts.map(post =>
                                <div className="main">
                                    
                                    <li key={post.Post_ID}>

                                        
                                            <div className="list">
                                                <div className="avatar">
                                                <Avatar alt="H" src={hamza}></Avatar>
                                                    <p>Hamza</p>
                                                </div>
                                                <div className="text">
                                                    <p>Subject: {post.Tag}</p>
                                                    <p>{post.PostText}</p>
                                                </div>
                                            </div>
                                        

                                    </li>
                                </div>


                            )}
                        
                    </ul>
                    </div>
                    

                </div>
                </div>

            </div>
        )
    }

}

export default Forum;