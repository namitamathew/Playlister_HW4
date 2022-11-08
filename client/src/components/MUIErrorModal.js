import { useContext } from 'react';
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert' 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);
    let error = "";
    if (auth.error) {
        error = auth.error;
    }

    function handleCloseModal(event) {
        auth.closeErrorModal();
    }

    return (
        <Modal
            open={auth.error !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <header className="dialog-header">
                    <Alert severity="error" sx={{margin: "10px", mb:2}}>
                        <strong>{error}</strong>
                    </Alert>
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Cancel</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}