import jwt from "jsonwebtoken";

const generateTokenSetCookie = (userID, res) => {
    const token = jwt.sign(
        { userID },
        "n7nwApGMANRpJB/QXTmkKBmXHDDQ1UQBFyd/0UZuxx4",
        { expiresIn: '15d' }
    );

    const isProduction = process.env.NODE_ENV === "production"; // Corrected typo in 'development'

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Converted days to milliseconds
        httpOnly: true, // Prevent XSS attacks (cross-site scripting attacks)
        sameSite: "strict",
        secure: isProduction, // Secure cookie for production environment only
    });
};

export default generateTokenSetCookie;
