import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./Posts.styles";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/posts/posts.action";
import { CircularProgress, Grid } from "@material-ui/core";
import { postSelector, authSelector } from "../../redux/selectors";

const Posts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { isAuthenticated } = useSelector(authSelector);
  const { postList, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log("POSTS_RENDER");

  return !postList.length ? (
    <CircularProgress />
  ) : !loading ? (
    <Grid className={classes.container} container spacing={3}>
      {postList.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} isAuthenticated={isAuthenticated}></Post>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    ""
  );
};

export default React.memo(Posts);
