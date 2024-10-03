import check from 'express-validator';

// console.log(check)
export const newEventValidator = [
    check.check("title").not().isEmpty().withMessage("Title is required"),
    check.check("description").not().isEmpty().withMessage("Description is required"),
    check.check("startDate").not().isEmpty().withMessage("Start date is required"),
    check.check("endDate").not().isEmpty().withMessage("End date is required"),
    check.check("price").not().isEmpty().withMessage("Price is required"),
    check.check("location").not().isEmpty().withMessage("Location is required"),
    check.check("imageUrl").not().isEmpty().withMessage("Image URL is required"),
];

const matricNumberIsValid = (studentId) => {
    const regex = /^\d{2}\/52HA\d{3}$/;
    return studentId.length === 10 && regex.test(studentId);
}

export const execsValidator = [
    check.check('name').notEmpty().withMessage("Name is required"),
    check.check('email').isEmail().withMessage("Invalid Email"),
    check.check('position').notEmpty().withMessage("Position is required"),
    check.check('studentId')
        .custom(matricNumberIsValid)
        .withMessage("Invalid Student id...")];

// export const {
//     execsValidator,
//     newEventValidator
// };

