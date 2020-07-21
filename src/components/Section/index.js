import React from 'react'
import { CardContent, Typography, makeStyles, Card as MuiCard } from '@material-ui/core'
import Reference from '../Reference'

const Section = ({
  title, 
  description, 
  src,
  references
}) => {
  const classes = useStyles()
  return (
    <MuiCard className={classes.root}>
      <CardContent className={classes.content}>
        <img 
          className={classes.img}
          alt="" 
          src={src}/>
        <div className={classes.infoContainer}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
      </CardContent>
      <CardContent>
        {references.map((reference, index) => (
          <Reference key={`reference-${index}`} reference={reference}/>
        ))}
      </CardContent>
    </MuiCard>
  )
}

export default Section

const useStyles = makeStyles({
  root: {
    // maxWidth: 360
  },
  content: {
    display: 'flex'
  },
  img: {
    objectFit: 'contain'
  },
  infoContainer: {
    marginLeft: 8
  }
});