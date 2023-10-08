import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EyeToggleButton = ({ show, click }) => {
  return (
    <IconButton size="small" type="button" onClick={click}>
      {show ? (
        <Visibility className="passwordEye" fontSize="small" />
      ) : (
        <VisibilityOff className="passwordEye" fontSize="small" />
      )}
    </IconButton>
  );
};
export default EyeToggleButton;
