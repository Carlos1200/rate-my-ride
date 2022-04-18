const cn=require('../db');

const userExist = async(req, res, next) => {

    // Check if user already exists
    let sql = `SELECT * FROM users WHERE email=?`;
    await cn.query(sql, [req.body.email], async (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal server error",
                error: err
            });
        }
        if (result.length > 0) {
            return res.status(409).json({
                message: "User already exists"
            });
        }
    });

}

module.exports = {
    userExist
}