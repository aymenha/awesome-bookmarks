import { makeStyles } from "@material-ui/core";

export default makeStyles({
  noSelection: {
    userSelect: "none"
  },
  pointer: {
    cursor: "pointer"
  },
  hoverable: {
    boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,0.03)",
    transition: "all 0.3s ease-out",
    transform: "translateZ(0)",
    "&:hover": {
      transform: "translate(0,-4px)",
      boxShadow:
        "rgba(45,45,45,0.05) 0px 2px 2px, rgba(49,49,49,0.05) 0px 4px 4px, rgba(42,42,42,0.05) 0px 8px 8px, rgba(32,32,32,0.05) 0px 16px 16px, rgba(49,49,49,0.05) 0px 32px 32px, rgba(35,35,35,0.05) 0px 64px 64px"
    }
  },
  boundary: {
    border: "1px solid red"
  }
});
