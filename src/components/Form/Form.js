import { Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react"
import useStyles from "./styles"

const Form = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  const handleSubmit = () => {}

  return (
    <Paper className={classes.paper}>
      <form
        autcomplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
      </form>
    </Paper>
  )
}

export default Form
