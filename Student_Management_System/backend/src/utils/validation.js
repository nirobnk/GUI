const { body, validationResult } = require("express-validator");

exports.validateStudent = [
    body("firstName").notEmpty().withMessage("First name is required."),
    body("email").isEmail().withMessage("Invalid email format."),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];