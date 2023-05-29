const handleError = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ msg: err.message || "Something went wrong" });
};

export default handleError;
