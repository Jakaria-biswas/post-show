import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ShowPost.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ShowPost = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState({});
    const [randomUser, setRandomUser] = useState([]);
    let  single = randomUser.slice(0, 1)
    
     useEffect(()=>{
              const url =  `https://jsonplaceholder.typicode.com/posts/${postId}`
              fetch(url)
              .then(res => res.json())
              .then(data => setPostDetail(data))

              const commentFind = `https://jsonplaceholder.typicode.com/comments/${postId}`
              fetch(commentFind)
              .then(res => res.json())
              .then(commentLoad => setComments(commentLoad));



              // random user picture 

              fetch('https://randomuser.me/api/?results=100')
              .then(res => res.json())
              .then(data  => {
                      let  allInformation = data.results;
                      setRandomUser(allInformation)
              })

             
     },[])
    return (
        <div>
              
                <Card>
                       <CardContent>
                                  <Typography style={{'paddingBottom' : '15px'}} color="textSecondary" variant="body" component="h4">
                                   post no : {postId}
                                   </Typography>
                                   <Typography variant="body" component="h5">
                                              {postDetail.title}
                                   </Typography>
                                    <Typography variant="body" className="postBody" component="p" >
                                             {postDetail.body}
                                    </Typography>
                                   <br/>
                                    <hr/>
                                          <div className="commentSection">
                                                   <div className="commentImg">
                                             
                                                    { single.map(random => <img title={comments.email} src={random.picture.large}></img>)}
                                                       
                                                   </div>
                                                   <div className="commentText">
                                                         <p title="comment">{comments.body}</p>
                                                   </div>
                                          </div>
                       </CardContent>
                </Card>
               
        </div>
    );
};

export default ShowPost;