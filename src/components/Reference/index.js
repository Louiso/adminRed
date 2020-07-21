import React, { useMemo } from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { Description as DescriptionIcon, Code as CodeIcon, Videocam as VideocamIcon } from '@material-ui/icons'

const Reference = ({reference: { type, to }}) => {
  const classes = useStyles()
  const { Icon , label } = useMemo(() => {
    switch(type){
      case 'article': return ({ Icon: DescriptionIcon, label: 'Artículo principal'})
      case 'example': return ({ Icon: CodeIcon, label: 'Ejemplo de implementacion'})
      case 'videos': return ({ Icon: VideocamIcon, label: 'Video(s)'})
      default: return ({ Icon: DescriptionIcon, label: 'Artículo principal'})
    }
  },[type])
  return (
    <div className={classes.root}>
      <Icon fontSize="small"/>
      <a href={to} className={classes.link}><Typography className={classes.text} variant="h6">{label}</Typography></a>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    marginLeft: 8
  },
  text: {
    fontSize: 18
  }
})

export default Reference