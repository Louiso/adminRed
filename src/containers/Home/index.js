import React from 'react'
import { Typography, List, makeStyles } from '@material-ui/core';
// import { mongoObjectId } from '../../utils';
import Section from '../../components/Section';
import { integrantes } from '../../constants';
import UserItem from '../../components/UserItem';
import { sections } from '../../constants/sections';

// const routes = [{
//   key: mongoObjectId(),
//   label: 'Introduccion',
//   link: false,
//   children: [{
//     link: true,
//     key: mongoObjectId(),
//     label: 'Integrantes',
//   },{
//     link: true,
//     key: mongoObjectId(),
//     label: 'Gns3'
//   },{
//     link: true,
//     key: mongoObjectId(),
//     label: ':v'
//   }]
// },{
//   link: false,
//   key: mongoObjectId(),
//   label: 'Documentacion',
//   children: [{
//     link: true,
//     key: mongoObjectId(),
//     label: 'Integrantes',
//   },{
//     link: true,
//     key: mongoObjectId(),
//     label: 'Gns3'
//   },{
//     link: true,
//     key: mongoObjectId(),
//     label: ':v'
//   }]
// }]




export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <div>
        <img alt="logo curso"/>
        <Tree nodes={routes}/>
      </div> */}
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img
            style={{
              width: 200
            }} 
            src={"https://upload.wikimedia.org/wikipedia/commons/f/f7/Uni-logo_transparente_granate.png"} 
            alt="logo uni"
            />
          <Typography variant="h2">Universidad Nacional de Ingenieria</Typography>
        </div>
        <div style={{marginTop: 12}}>
          <Typography variant="h5">Integrantes:</Typography>
          <List>
            {integrantes.map(({fullName, photo}) => (
              <UserItem fullName={fullName} photo={photo}/>
            ))}
          </List>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent:'center', gridGap: '20px'}}>
          {sections.map((section,index) => (
            <Section
              key={`section-${index}`}
              title={section.title}
              description={section.description}
              src={section.src}
              references={section.references}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '60%',
    height: '100%',
    overflow: 'auto',
    margin: 'auto'
  },
});
