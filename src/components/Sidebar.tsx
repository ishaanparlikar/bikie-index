import React,{useContext,useState} from 'react'
import { Box, Button, TextField } from '@mui/material'
import { ApiData } from './Context'
function Sidebar() {
  const Data = useContext(ApiData)

  const [search, setSearch] = useState('')
  return (
    <Box bgcolor={'#fff'} width={'300px'} minHeight={'100vh'} color={'#000'} padding='20px'>
    
      <Button variant='outlined'>Search</Button>
    </Box>
  )
}

export default Sidebar