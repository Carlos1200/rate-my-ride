const bcrypt = require('bcryptjs');
const { createJwt } = require('../helper');
const cn=require('../db');

exports.createUser = async (req, res,next) => {
    const { name, email, password } = req.body;
    try {
        
      //encrypt password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      //create user
        sql = `INSERT INTO users (name,email,password) VALUES (?,?,?)`;
      await cn.query(sql, [name, email, hashPassword], async (err, result) => {
        if (err) {
          res.status(500).json({
              message: 'Internal server error',
              error: err
              });
                next();
        } else {
          cn.query(
            `SELECT * FROM users WHERE id=?`,
            [result.insertId],
            async (err, result) => {
              if (err) {
                res.status(500).json({
                    message: 'Internal server error',
                    error: err
                    });
                      next();
              } else {
                if (result.length > 0) {
                  const user = result[0];
                  //create token
                  const token = await createJwt(user);
                  //send response

                    res.status(201).json({
                    message: "User created",
                    user,
                    token,
                  });
                  next();
                } else {
                 res.status(500).json({
                    message: 'User not found'
                    });
                    next();
                }
              }
            }
          );
        }
      });
    } catch (error) {
      console.log({ error });
    }
}

exports.logIn = async (req, res, next) => {
    try {
      const { email } = req.body;
      const sql = `SELECT * FROM users WHERE email=?`;
      await cn.query(sql, [email], async (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "Internal server error",
          });
        } else {
          if (result.length > 0) {
            const user = result[0];
            const { password } = user;
            const isMatch = await bcrypt.compare(req.body.password, password);
            if (isMatch) {
              const token = await createJwt(user);
              return res.status(200).json({
                message: "User found",
                user,
                token,
              });
            } else {
              return res.status(401).json({
                message: "Invalid credentials",
              });
            }
          } else {
            return res.status(404).json({
              message: "User not found",
            });
          }
        }
      });
    } catch (error) {
      console.log({ error });
    }
}

  exports.getUser = async (req, res, next) => {
    return res.status(200).json({
      message: "User found",
      user: req.usuario,
    });
  }