import { Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TagModel from '../models/Tag';

interface Props {
    tagId: string,
    allTags: TagModel[]
}

export default function TagChip(props: Props) {

    const [tag, setTag] = useState<TagModel | null>(null);

   useEffect(() => {
    const newTag = props.allTags.filter(tag => tag.id === props.tagId);
    setTag(newTag[0]);
   }, [props.tagId, props.allTags]) 

  return (
    <>
      {tag !== null && (
            <Chip 
                label={tag.title} 
                variant="outlined"  
                style={{
                    color: tag.textColor,
                    borderColor: tag.color,
                    backgroundColor: tag.color
                }}
            />
      )}
    </>
  )
}
