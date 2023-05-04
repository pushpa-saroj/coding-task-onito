import * as yup from "yup";
import moment from 'moment';

export const schema = yup.object().shape({
    name: yup.string().required(),
    dobOrAge: yup
    .mixed()
    .test(
      'valid-dob-or-age',
      'Please enter a valid date of birth (DD/MM/YYYY) or age in years',
      function (value) {
        if (typeof value === 'string') {
          // Check if the input matches the date format
          const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/;
          if (dateRegex.test(value)) {
            // If it is a valid date, check if it is a past date
            return moment(value, 'DD/MM/YYYY').isBefore(moment(), 'day');
          }
          // If it is not a valid date, check if it is a valid age in years
          const ageRegex = /^\d+$/;
          if (ageRegex.test(value)) {
            const ageInYears = parseInt(value);
            return ageInYears > 0 && ageInYears <= 120;
          }
        }
        return false;
      }
    ),  
    sex: yup.string().required(),
    mobile: yup
      .string()
      .required()
      .matches(
        /^[6789]\d{9}$/,
        "Mobile number should be a valid 10-digit Indian mobile number"
      ),
    govIdType: yup.string().required(),
    govId: yup
      .string()
      .required()
      .when("govIdType", (govIdType, schema) => govIdType[0] === 'Aadhar' ?
          schema.matches(/^\d{12}$/, "Aadhar number should be a valid 12-digit number") :
          schema.matches(
            /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            "PAN number should be a valid alpha-numeric string"
          ),
      ),
    guardianType: yup.string().required(),
    guardianName: yup.string().required(),
    email: yup.string().email(),
    emergencyContact: yup
      .string()
      .required()
      .matches(
        /^[6789]\d{9}$/,
        "Emergency contact number should be a valid 10-digit Indian mobile number"
      ),
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string(),
    occupation: yup.string(),
    religion: yup.string(),
    maritalStatus: yup.string(),
    bloodGroup: yup.string(),
    nationality: yup.string(),
  });