import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'

const UserItem = ({fullName, photo}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt="foto"
          src={photo}
        />
      </ListItemAvatar>
      <ListItemText>{fullName}</ListItemText>
    </ListItem>
  )
}
export default UserItem