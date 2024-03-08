import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color="error">
        Contained
      </Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <br />
      <br />
      <IconButton aria-label="delete" color="primary" variant="contained">
        <DeleteIcon />
      </IconButton>
      <br />
      <br />
      <Button variant="contained" startIcon={<DeleteIcon />} color="error">
        Delete
      </Button>
    </>
  );
}

export default App;
