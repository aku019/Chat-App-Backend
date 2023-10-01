import React from 'react'
import {Stack,Avatar, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';


const UserCard = ({item:{firstName,secondName,id}}) => {
  const navigate = useNavigate()
  return (
    <Stack
     className="usercard"
     direction="row"
     spacing={2}
     sx={{py:1}}
     onClick={()=>navigate(`/${id}/${firstName} ${secondName}`)}
    >
        <Avatar
        //  src={`https://avatars.dicebear.com/api/initials/${firstName} ${secondName}.svg`}
        src={`https://ui-avatars.com/api/?name=${firstName}+${secondName}&background=random`}
         sx={{width:"32px",height:"32px"}}
        />
       <Typography varinat="subtitle2">{firstName} {secondName}</Typography>
    </Stack>
  )
}

export default UserCard