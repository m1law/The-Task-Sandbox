import supabase from "../models/index.js";
import config from "../config/auth.config.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// const User = db.user;
// const Role = db.role;
// const Op = db.Sequelize.Op;

export function signup(req, res) {
    // Save User to Database
    const { error } = supabase.from("the_user").insert({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    if (error) {
        console.log("Error:", error);
        return res.status(500).send({ message: error.message });
    } else {
        console.log("User was registered successfully!");
        return res.send({ message: "User was registered successfully!" });
    }
}
export function signin(req, res) {
    // Check if user exists
    const { error, data } = supabase
        .from("users")
        .select("*")
        .eq("username", req.body.username);
    console.log(error);
    console.log(data);
    // if (error) {
    //     console.log("Error:", error);
    //     return res.status(500).send({ message: error.message });
    // }
    // if (data.length === 0) {
    //     return res.status(404).send({ message: "User Not found." });
    // } else {
    //     var passwordIsValid = bcrypt.compareSync(
    //         req.body.password,
    //         data.password
    //     );
    //     if (!passwordIsValid) {
    //         return res.status(401).send({
    //             accessToken: null,
    //             message: "Invalid Password!",
    //         });
    //     }
    // const token = jwt.sign({ id: user.id }, config.secret, {
    //     algorithm: "HS256",
    //     allowInsecureKeySizes: true,
    //     expiresIn: 86400, // 24 hours
    // });
    // res.status(200).send({
    //     id: user.id,
    //     username: user.username,
    //     email: user.email,
    //     roles: [],
    //     accessToken: token,
    // });
    // }
    //   User.findOne({
    //     where: {
    //       username: req.body.username,
    //     },
    //   })
    //     .then((user) => {
    //       if (!user) {
    //         return res.status(404).send({ message: "User Not found." });
    //       }
    //       var passwordIsValid = bcrypt.compareSync(
    //         req.body.password,
    //         user.password
    //       );
    //       if (!passwordIsValid) {
    //         return res.status(401).send({
    //           accessToken: null,
    //           message: "Invalid Password!",
    //         });
    //       }
    //       const token = jwt.sign({ id: user.id }, config.secret, {
    //         algorithm: "HS256",
    //         allowInsecureKeySizes: true,
    //         expiresIn: 86400, // 24 hours
    //       });
    //       res.status(200).send({
    //         id: user.id,
    //         username: user.username,
    //         email: user.email,
    //         roles: [],
    //         accessToken: token,
    //       });
    //     })
    //     .catch((err) => {
    //       res.status(500).send({ message: err.message });
    //     });
}
