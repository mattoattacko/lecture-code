export default (err,req,res,next) => {
  res.status(500);
  res.send('Error');
};