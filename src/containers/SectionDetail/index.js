import React from 'react'
import { useParams } from 'react-router-dom'
import { sections } from '../../constants/sections'
import { Typography, Divider } from '@material-ui/core'

const SectionType = ({type, content, title}) => {
  switch(type){
    case 'subtitle': return (
      <Typography variant="h5">{content}</Typography>
    )
    case 'text': return (
      <Typography variant="body1" style={{marginTop: 36}}>{content}</Typography>
    )
    case 'img': return (
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 300, marginTop: 36}}>
        <img src={content} alt="" style={{height: '100%'}}/>
      </div>
    )
    case 'video': return (
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: 300, marginTop: 36}}>
       <iframe 
          title="video"
          width="560" 
          src={content}
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          >
        </iframe>
      </div>
    )
    case 'section': return (
      <div style={{marginTop: 72}}>
        <Typography variant="h4">{title}</Typography>
        <div>
        {content.map((children) => (
            <SectionType type={children.type} content={children.content} key={children}/>
          ))}
        <Divider style={{marginTop: 36}}/>
        </div>
      </div>
    )
    default: return (<div/>)
  }
}

const SectionDetail = () => {
  const { sectionId } = useParams()
  const section = sections.find(({_id}) => String(_id) === String(sectionId))
  
  return (
    <div style={{width: '60%', margin: 'auto'}}>
      <Typography variant="h3">{section.title}</Typography>
      {section.article.map((sectionType) => (
        <SectionType type={sectionType.type} content={sectionType.content} key={sectionType}/>
      ))}
    </div>
  )
}

export default SectionDetail