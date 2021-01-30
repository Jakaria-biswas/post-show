import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import './Post.css';
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const Post = (props) => {
      const {id,title} = props.post;
      const history = useHistory();
      const handleButton = (id) => {
              let toGo = `/about/${id}`
              history.push(toGo)
      }   
          
              const [like, setLike] = useState('');
              const likeColorAdd = () =>{
                       
                         
                         const test = like ? '' :  'primary'
                         setLike(test)
              }
        
    return (
        <div className="main">
                 
            <Card className = "rootCard">
                     
                  <CardContent>
                        <Typography className="idStyle" variant="body"  component="h4">
                             post no :  {id}
                        </Typography>
                        <Typography className="cardTitle" color="textSecondary" variant="body" component="p">
                               {title}
                        </Typography>
                  </CardContent>
                   <CardActions>
                          <Button size="small" variant="contained" color="primary" onClick={() => handleButton(id)}> 
                               {/* <Link to={`/about/${id}`}>more detail</Link>? */}
                               {/* <button onClick={() => handleButton(id)}>more detail</button> */}
                               more detail
                          </Button>
                   </CardActions>
            </Card>
           <br/>

        </div>
    );
};

export default Post;