import { TextField, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPTCHA_SITE_KEY } from "../services/email";

const steps = ["Message", "Name", "Email"];

const validateInputs = (message, name, email) => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regexEmail.test(email) && name.length > 0 && message.length > 0;
};

export default function MessageStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [recaptchaOpened, setRecaptchaOpened] = useState(false);
  const [message, setMessage] = useState("testmessage");
  const [name, setName] = useState("test");
  const [email, setEmail] = useState("w@gmail.com");

  let recaptchaRef = null;

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
      {!recaptchaOpened && (
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
          {activeStep === 2 && !recaptchaOpened && (
            <TextField
              label="Your Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {activeStep === steps.length && (
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
          )}
        </Box>
      )}
      {!recaptchaOpened && activeStep < steps.length && (
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
            onClick={() => {
              setActiveStep((prevActiveStep) => prevActiveStep - 1);
            }}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={() => {
              if (
                activeStep === steps.length - 1 &&
                validateInputs(message, name, email)
              ) {
                setRecaptchaOpened(true);
              } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
              }
            }}
            color="inherit"
            disabled={
              activeStep === steps.length - 1 &&
              !validateInputs(message, name, email)
            }
          >
            {activeStep === steps.length - 1 ? "Send 🚀" : "Next"}
          </Button>
        </Box>
      )}

      <ReCAPTCHA
        ref={(r) => (recaptchaRef = r)}
        theme={theme.palette.mode === "light" ? "light" : "dark"}
        sitekey={CAPTCHA_SITE_KEY}
        hidden={!recaptchaOpened}
        onChange={(captchaValue) => {
          if (captchaValue) {
            //sendContactMessage(name, email, message, captchaValue);
            console.log("Message sent");
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setRecaptchaOpened(false);
            recaptchaRef?.reset();
          }
        }}
      />
    </Box>
  );
}
