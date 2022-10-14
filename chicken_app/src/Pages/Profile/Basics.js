import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useOutletContext } from 'react-router';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function Basics() {
    const [setPage, goToPage, setGoToPage] = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        setPage('Basics')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function saveData() {
        
    }

    useEffect(() => {
        if (goToPage === '') {return}
        saveData()
        if (goToPage === 'next') {
            setGoToPage('')
            navigate('/profile/locations')
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [goToPage])


    return(
        <Box >
            <Typography variant="h1_32" >Basics</Typography>
            <TextField label="Company Name" variant="outlined" />
            <TextField label="Website" variant="outlined" />
        </Box>
    )
}

export default Basics