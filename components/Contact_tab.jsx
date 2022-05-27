import { useState } from "react";
import { BsFillJournalBookmarkFill, BsXLg } from "react-icons/bs";
import { Modal, Box, Typography, Popover } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  background: "#232946",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Contact_tab = ({ children }) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const modelClose = () => {
    setAnchorEl(null);
  };

  const modelOpen = Boolean(anchorEl);
  const id = modelOpen ? "simple-popover" : undefined;

  return (
    <>
      <Popover
        id={id}
        open={modelOpen}
        anchorEl={anchorEl}
        onClose={modelClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          Yeah these arnt links I just thought they looked cool
        </Typography>
      </Popover>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl border-0 text-zinc-200">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact
          </Typography>
          <div className="h-1 w-1/2 rounded-xl bg-white"></div>{" "}
          <BsXLg
            className="absolute top-3 right-3 rounded-full shadow text-xl cursor-pointer"
            onClick={handleClose}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            General Email:{" "}
            <span
              className="text-sky-200 cursor-pointer underline"
              onClick={handleClick}
            >
              aespejo102@gmail.com
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            School Email:{" "}
            <span
              className="text-sky-200 cursor-pointer underline"
              onClick={handleClick}
            >
              aespejo@student.ccc.com
            </span>
          </Typography>
        </Box>
      </Modal>

      <div
        id="contact-modal"
        className={`absolute top-2.5 ae-modal rounded-xl p-1 duration-300 ease-in-out ${
          show ? "flex" : "hidden"
        } bg-blue-900`}
      >
        <h1 className="text-2xl">Contact info</h1>
        <div className="w-96 h-1 bg-white rounded-lg"></div>
        <div className="p-3">General Email: aespejo102@gmail.com </div>
        <div className="p-3">School Email: aespejo@student.cccd.edu</div>
      </div>
      <button
        className="flex text-2xl lg:text-3xl px-2 pt-2 lg:px-2 lg:pt-2 m-2 md:m-2 leading-snug text-white w-64 floating border-b-2 border-blue-900 ease-in-out duration-300 hover:border-red-200 hover:text-pink-200"
        onClick={handleOpen}
      >
        <span style={{ color: "white", display: "inherit" }}>{children}</span>
        <BsFillJournalBookmarkFill className="pt-2 ml-auto " />
      </button>
    </>
  );
};

export default Contact_tab;
