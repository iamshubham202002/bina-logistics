const isAdmin = (req, res, next) => {
   const {username, password} = req.body;
   if (username != process.env.ADMIN_USERNAME || password != process.env.ADMIN_PASSWORD) {
      return res.json({success: false, message: "Not found"});
   }
   return res.json({success: true, message: "admin verified"});
}

export { isAdmin };