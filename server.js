const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const { google } = require("googleapis");
const items = require("./routes/api/items");

// Credenciales de googleOAuth
const CLIENT_ID =
  "397037747686-fb95phdt4mmovqdi96un144ksm3lhmin.apps.googleusercontent.com";
const CLIENT_SECRET = "FQdHPYushYVletYe9Ii-VNTk";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04xnJxa4_557LCgYIARAAGAQSNwF-L9Ir48f2p_wkAfLv8B7tD-9EuXAPrOo6g3ciQwMxs21-n25fQvx_tWMvZBGg1UysMKnzKgg";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//bodyparser middleware
app.use(express.json());

//se trae la uri de mongo
const db = require("./config/keys").mongoURI;

//CORS
app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Content-Length",
      "X-Requested-With",
      "Accept",
    ],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200, //
  })
);

//Se conecta con la db
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

//uso de rutas
app.use("/api/items", items);

//NODEMAILER --
app.post("/send", (req, res) => {
  const output = `
    <h3>Thanks for subscribing!</h3>
    <p>Hello ${req.body.data.name},</p>
    <p>You've just succesfully subscribed to our newsletter</p>
    <p>You'll be getting our emails once a week, and our weekly magazine at your house in ${req.body.data.address}</p>
    <p>If you want to stop receiving them, you can send us a mail with the subject "unsubscribe" followed by your email</p>
    
    <h2>Sincerely, the R&C team</h2>
  `;
  console.log(req.body);

  async function main() {
    const accessToken = await oAuth2Client.getAccessToken();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",

      // host: 'smtp.gmail.com',
      // port: 587,
      auth: {
        type: "OAuth2",
        user: "alanpruebas101@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"R&C team" <alanpruebas101@gmail.com>', // sender address
      to: req.body.data.email, // list of receivers
      subject: "Newsletter subscription", // Subject line
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

// cargar el build si estas en prod -------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/clank/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "clank", "build", "index.html")
    );
  });
}

// Server--------------------------
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
