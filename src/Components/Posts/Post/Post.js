import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useOutletContext, Navigate } from "react-router-dom";
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Box } from "@material-ui/core";
import { Delete, ThumbUpAlt, MoreHoriz } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import { deletePost, likePost } from "../../../redux/posts/posts.action";
import { useDispatch } from "react-redux";
import { getPosts, getAuth } from "../../../redux/selectors";
import useStyles from "./Post.styles";

const Post = React.memo(({ post, isAuthenticated }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (isAuthenticated) {
      dispatch(deletePost(post._id));
    }
  };
  const handleLike = () => {
    dispatch(likePost(post._id));
  };

  console.log("POST_RENDER");
  console.log("post : ", post);
  console.log("isAuthenticated : ", isAuthenticated);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post?.selectedFile} title={post?.title}></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).format("MMM DD h:mm A")}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <MoreHoriz fontSize="medium"></MoreHoriz>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography noWrap style={{ padding: "10px" }} variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent className={classes.details}>
        <Typography className={classes.title} noWrap>
          {post.title}asdfadsfsddsdsdaf
        </Typography>
        <Divider />
        <Box component="div" className={classes.customBox}>
          <p className={classes.message}>
            {post.message}
            sdfdsfdsfdsfsfsdfdsfdsfdsfsfdddddddddddsdfdsfdsfdsfsfdddddddddddsdfdsfdsfdsfsfdddddddddddssdfdsfdsfdsfsfdddddddddddsdfdsfdsfdsfsfddddddddddddfdsfdsfdsfsfdddddddddddddddddddddd
          </p>
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleLike}>
          <ThumbUpAlt fontSize="small" />
          {` ${post.likeCount}`}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
});

export default Post;
