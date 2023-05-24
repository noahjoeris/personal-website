import emailjs from "@emailjs/browser";

export const sendContactMessage = (name, email, message, captcha) => {
  emailjs
    .send(
      "service_e2zokzh",
      "template_0z1419n",
      {
        name,
        email,
        message,
        "g-recaptcha-response": captcha,
      },
      "p5N7bDhGORWdbiB3f"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export const CAPTCHA_SITE_KEY = "6LeLnCkmAAAAAJTOd3CKClI8d0iIMqLOj2SQH9nf";
