import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.log(err)
    res.status(500).json({message: "Failed to create user!"})
  }
};

export const login = async (req, res) => {
    const {username, password} = req.body

    try {

        // CHECK IF THE USER EXIST

        const user = await prisma.user.findUnique({
            where: {username}
        })

        if (!user) return res.status(401).json({message: 'Invalid Credentials!'})
        
        //CHECK IF THE PASSWORD IS CORRECT
        
        //GENERATE COOKIE TOKEN AND SEND TO THE USER
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Failed to login!"})
    }
};
export const logout = (req, res) => {};
