import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  padding: "10px 16px",
  lineHeight: 1.5,
  textTransform: "uppercase",
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 0,

  "&:hover": {
    backgroundColor: "#8574D7",
    color: "#fff",
  },
  "&:active": {
    backgroundColor: "#8574D7",
    color: "#fff",
  },
  "&.selected": {
    backgroundColor: "#8574D7",
    color: "#fff",
  },
  "&:focus": {},
});
export default CustomButton;
