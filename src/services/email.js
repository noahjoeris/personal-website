import emailjs from "@emailjs/browser";

export const sendContactMessage = (name, email, message) => {
  emailjs
    .send(
      "service_e2zokzh",
      "template_0z1419n",
      {
        name,
        email,
        message,
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
