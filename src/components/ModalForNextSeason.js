import { Modal, Box, Typography } from "@mui/material";
import logo from "../logo.svg";
import useModalForNextSeason from "./useModalForNextSeason";

function ModalForNextSeason({ open, handleClose }) {
  const { seasonDuration, nextSeasonDistance } = useModalForNextSeason();

  const modalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 20,
    textAlign: "center",
  };

  const textContainer = {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box style={modalstyle}>
        <div className='flex-center'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Printemps
        </Typography>
        <Typography id='modal-modal-description' style={textContainer}>
          <span>{seasonDuration}</span>
          <span>dans</span>
          <span>{nextSeasonDistance}</span>
        </Typography>
      </Box>
    </Modal>
  );
}

export default ModalForNextSeason;
