const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()

router.get("/", (req,res) => res.status(200).json({results: "Hellow World", status: 200}))
router.get("/send", async (req,res) => {
    const {email} = req.query

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASS
        }
    })

    transporter.sendMail({
        from: process.env.SMTP_MAIL,
        to:  "diogocraft4@gmail.com",
        subject: "aaab",
        text: "Olá, deu bom meu consagrado123."
    }).then(info => {
        return res.status(200).json({results: info, status: 200})
    }).catch(err => {
        return res.status(500).json({error: err, status: 500})
    })
})
module.exports = router