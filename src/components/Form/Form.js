import React, { useState, useRef, useEffect } from "react";
import useStyles from "./Form.styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import convertBase64 from "../../utils/base64/base64.js";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/posts/posts.action";

const Form = () => {
  const ref = useRef();
  const classes = useStyles();
  const dispatch = useDispatch();
 // const post = useSelector((state) => (currentPostId ? state.posts.find((post) => post._id === currentPostId) : null));

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
 
  
  // useEffect(() => {
  //   if (post) {
  //     setPostData(post);
  //   }
  // }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (currentPostId) {
    //   dispatch(updatePost(currentPostId, postData));
    //   setcurrentPostId(null)
    //   clear();
    // } else {
      dispatch(createPost(postData));
      clear();
   // }
  };

  const onUpLoadImage = async (e) => {
   // if (!currentPostId) {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setPostData({ ...postData, selectedFile: base64 });
    //}
  };

  const clear = () => {
    // if(currentPostId){
    //   setcurrentPostId(null);
    // }
    ref.current.value = "";
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
  };
  

  return (
    <Paper className={classes.paper} elevation={2}>
      <form autoComplete="off" className={`${classes.form} ${classes.root}`} onSubmit={(e) => handleSubmit(e)}>
        <Typography variant="h6">Creating a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></TextField>
        <div className={classes.fileInput}>
          <input ref={ref} type="file" onChange={(e) => onUpLoadImage(e)} />
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
            Submit
          </Button>
          <Button variant="contained" color="secondary" size="large" fullWidth onClick={clear}>
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default React.memo(Form);
