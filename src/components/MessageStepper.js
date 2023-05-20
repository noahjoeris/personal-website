import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import TextArea from "rc-textarea";
import { useState } from "react";

const steps = ["Message", "Name", "Email"];

export default function MessageStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        sx={{
          marginBottom: "2rem",
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Message was sent successfully!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={() => setActiveStep(0)} color="inherit">
              Send another message
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box>
            {activeStep === 0 && (
              <Box>
                <TextArea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    maxWidth: "25rem",
                    minWidth: "8rem",
                    width: "25rem",
                    height: "20rem",
                    maxHeight: "20rem",
                    borderRadius: ".5rem",
                    padding: "1rem",
                    color: "inherit",
                    backgroundColor: "inherit",
                  }}
                />
              </Box>
            )}
            {activeStep === 1 && (
              <TextField
                label="Your Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {activeStep === 2 && (
              <TextField
                label="Your Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep - 1)
              }
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
              }
              color="inherit"
            >
              {activeStep === steps.length - 1 ? "Send 🚀" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
