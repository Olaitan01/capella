import React from "react";
import { Button } from "@mui/material";
function Btn() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          background: "#000000",
          textTransform: "capitalize",
          fontSize: "1rem",
          borderRadius: "4rem",
        }}
      >
        Get Started Free
      </Button>
    </div>
  );
}

export default Btn;
