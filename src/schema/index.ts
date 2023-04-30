import * as yup from "yup";
export const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required(),
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
      .when("govIdType", (govIdType, schema) => govIdType === 'Aadhar' ?

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