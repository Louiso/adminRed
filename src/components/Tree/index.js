import React from 'react'
import { TreeItem, TreeView } from '@material-ui/lab'
import { Link, useRouteMatch } from 'react-router-dom'
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'

const TreeNode = ({ node: { children, label, key, link } , path }) => {
  if(!children || !children.length) return <TreeItem nodeId={key} label={link ? <Link to={`${path}/${label}`}>{label}</Link>: label}/>
  return (
    <TreeItem nodeId={key} label={link ? <Link to={`${path}/${label}`}>{label}</Link>: label}>
      {children.map((node) => (
        <TreeNode key={node.key} node={node} path={path}/>
      ))}
    </TreeItem>
  )
}

const Tree = ({nodes}) => {
  const { path } = useRouteMatch()
  
  const classes = useStyles()
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {nodes.map((node) => {
        const  { children, label, key, link } = node
        if(!children || !children.length) return <TreeItem nodeId={key} label={link ? <Link to={`${path}/${label}`}>{label}</Link>: label}/>
        return (
          <TreeItem nodeId={key} label={link ? <Link to={`${path}/${label}`}>{label}</Link>: label}>
            {children.map((node) => (
              <TreeNode key={node.key} node={node} path={path}/>
            ))}
          </TreeItem>
        )
      })}
    </TreeView>
  )
}

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});


export default Tree