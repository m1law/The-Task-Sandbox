// probably don't need this for the project
export function allAccess(req, res) {
    res.status(200).send("Public Content.");
  };

export function userBoard(req, res) {
  res.status(200).send("User Content.");
};
