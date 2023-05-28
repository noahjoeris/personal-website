import emailjs from "@emailjs/browser";

export const sendContactMessage = async (name, email, message, captcha) => {
  return await emailjs.send(
    "service_e2zokzh",
    "template_0z1419n",
    {
      name,
      email,
      message,
      "g-recaptcha-response": captcha,
    },
    "p5N7bDhGORWdbiB3f"
  );
};

export const CAPTCHA_SITE_KEY = "6LeLnCkmAAAAAJTOd3CKClI8d0iIMqLOj2SQH9nf";
