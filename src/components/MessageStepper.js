import { CircularProgress, TextField, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPTCHA_SITE_KEY, sendContactMessage } from "../services/email";

const steps = ["Message", "Name", "Email"];

const validateInputs = (message, name, email) => {
  const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
  return regexEmail.test(email) && name.length > 0 && message.length > 0;
};

export default function MessageStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [recaptchaOpened, setRecaptchaOpened] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const recaptchaRef = useRef(null);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (
      activeStep === steps.length - 1 &&
      validateInputs(message, name, email)
    ) {
      setRecaptchaOpened(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleSendAnotherMessage = () => {
    setActiveStep(0);
  };

  const handleCaptchaChange = (captchaValue) => {
    if (captchaValue) {
      setIsSending(true);
      sendContactMessage(name, email, message, captchaValue)
        .then(() => {
          console.log("Message sent");
          setSentSuccessfully(true);
          setIsSending(false);
          setMessage("");
          setName("");
          setEmail("");
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => setSentSuccessfully(false));
      setRecaptchaOpened(false);
      recaptchaRef.current.reset();
    }
  };

  return (
    <Box width={"100%"}>
      <Stepper
        activeStep={activeStep}
        sx={{
          marginBottom: "2rem",
        }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
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
          {activeStep === 2 && !isSending && (
            <TextField
              label="Your Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {activeStep === 2 && isSending && <CircularProgress />}
          {activeStep === steps.length && (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {sentSuccessfully
                  ? "Message sent successfully"
                  : "Error while sending message"}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleSendAnotherMessage} color="inherit">
                  {sentSuccessfully ? "Send another message" : "Try again"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      )}

      {!recaptchaOpened && !isSending && activeStep < steps.length && (
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
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            onClick={handleNext}
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
        ref={recaptchaRef}
        theme={theme.palette.mode === "light" ? "light" : "dark"}
        sitekey={CAPTCHA_SITE_KEY}
        hidden={!recaptchaOpened}
        onChange={handleCaptchaChange}
      />
    </Box>
  );
}
