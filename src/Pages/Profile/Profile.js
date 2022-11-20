import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router'
import { Box, Typography } from '@mui/material';
import AdminApprovalOptions from '../../Components/AdminApprovalOptions';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function Profile() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const db = getFirestore()
  const docRef = useCallback(() => { return doc(db, "farms", id) }, [db, id])

  useEffect(() => {
    getDoc(docRef()).then((doc) => {
      setData(doc.data())
    })
  }, [docRef])

  return (
    <>
      {data && <Box sx={{ mx:'24px', marginTop:'56px' }}>
        <AdminApprovalOptions props={{ data:data, docRef:docRef() }}/>
        {id}
        <Box sx={{ background:'#F5F7F8', padding:2 }}>
          <Typography variant='p_large' fontWeight='bold'>Awaiting approval</Typography>
          <Typography variant='p_large'>
            <br/>Our team is reviewing your profile for approval <br/><br/>
            We’ll send a text to the provided number once the profile is approved<br/><br/>
            This will take 72 hours at most
          </Typography>
        </Box>
        <Typography variant='h1' sx={{ marginTop:7 }}></Typography>
      </Box>}
    </>
  )
}

export default Profile