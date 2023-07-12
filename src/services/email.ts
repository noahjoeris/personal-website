import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../constants/constants";

export const sendContactMessage = async (
  name: string,
  email: string,
  message: string,
  captcha: string
) => {
  return await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name,
      email,
      message,
      "g-recaptcha-response": captcha,
    },
    EMAILJS_PUBLIC_KEY
  );
};
