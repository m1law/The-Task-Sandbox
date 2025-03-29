import db from "../models/index.js";

const Task = db.task;

export function create(req, res) {
  console.log("we are in the controller rn");
  // Save User to Database
  Task.create({
    // id: whatever,
    description: req.body.description,
  })
    .then(() => {
      res.send({ message: "Task was created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}

// export function signin(req, res) {
//   Task.findOne({
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
// }
