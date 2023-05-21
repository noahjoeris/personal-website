import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { sendContactMessage } from "../services/email";

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
                <TextField
                  multiline
                  fullWidth
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minRows={6}
                  maxRows={8}
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
              onClick={() => {
                if (activeStep === steps.length - 1) {
                  sendContactMessage(name, email, message);
                }
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              }}
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
