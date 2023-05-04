import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { FormData, AnyPresentValue } from "src/interfaces";
import { schema } from "src/schema";
import axios from "axios";
import {
  StyledButton,
  StyledFormWrapper,
  StyleFieldset,
  StyledInput,
  StyledSelect,
  StyledLebel,
  StyledButtonDiv,
  StyledLegend,
  StyledFlexInputs,
  StyledError,
} from "src/pages/style";

const BASE_URL = "http://localhost:8080";

const UserRegistrationForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const userRegistrationService = (data: FormData) => {
    axios
      .post(`${BASE_URL}/api/data`, data)
      .then((response) => {
        toast.success(response.data.message);
        reset(); // reset the form data
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const dobOrAge = data.dobOrAge;
    let age;
    if (typeof dobOrAge === "string" && /\d/.test(dobOrAge)) {
      age = new Date().getFullYear() - parseInt(dobOrAge);
    } else {
      const [day, month, year] = (dobOrAge as string).split("/");
      age = new Date().getFullYear() - parseInt(year);
    }
    console.log("Age", age);
    userRegistrationService(data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <StyleFieldset>
        <StyledLegend>Personal Details</StyledLegend>
        <div>
          <StyledLebel htmlFor="name">Name </StyledLebel>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter Name" />
            )}
          />
          {/* <StyledError>{errors.name?.message}</StyledError> */}
        </div>
        <div>
          <StyledLebel htmlFor="age">Age </StyledLebel>
          <Controller
            name="dobOrAge"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput
                {...field}
                placeholder="DD/MM/YYYY or Age in Years"
              />
            )}
          />
          {errors.dobOrAge && (
            <StyledError>{errors.dobOrAge.message}</StyledError>
          )}
        </div>
        <div>
          <StyledLebel htmlFor="sex">Sex </StyledLebel>
          <Controller
            name="sex"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </StyledSelect>
            )}
          />
          <StyledError>{errors.sex?.message}</StyledError>
        </div>
        <div>
          <StyledLebel htmlFor="mobile">Mobile </StyledLebel>
          <Controller
            name="mobile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter Mobile" />
            )}
          />
          <StyledError>{errors.mobile?.message}</StyledError>
        </div>
        <StyledFlexInputs>
          <StyledLebel htmlFor="govIdType">Govt Issued Id </StyledLebel>
          <div>
            <Controller
              name="govIdType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledSelect {...field}>
                  <option value="">Select</option>
                  <option value="Aadhar">Aadhar</option>
                  <option value="PAN">PAN</option>
                </StyledSelect>
              )}
            />
            <Controller
              name="govId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledInput {...field} placeholder="Enter Govt ID" />
              )}
            />
            <StyledError>{errors.govId?.message}</StyledError>
          </div>
        </StyledFlexInputs>
      </StyleFieldset>
      <StyleFieldset>
        <StyledLegend>Contact Details</StyledLegend>
        <StyledFlexInputs>
          <StyledLebel htmlFor="guardianType">Guardian Details </StyledLebel>
          <div className="flex-both-input">
            <Controller
              name="guardianType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledSelect {...field}>
                  <option value="">Select</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Other">Other</option>
                </StyledSelect>
              )}
            />
            <Controller
              name="guardianName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledInput {...field} placeholder="Enter Guardia Name" />
              )}
            />
            <StyledError>{errors.guardianName?.message}</StyledError>
          </div>
        </StyledFlexInputs>
        <div>
          <StyledLebel htmlFor="email">Email </StyledLebel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter Email" />
            )}
          />
          <StyledError>{errors.email?.message}</StyledError>
        </div>
        <div>
          <StyledLebel htmlFor="emergencyContact">
            Emergency Contact Number{" "}
          </StyledLebel>
          <Controller
            name="emergencyContact"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter Emergency No" />
            )}
          />
          <StyledError>{errors.emergencyContact?.message}</StyledError>
        </div>
      </StyleFieldset>
      <StyleFieldset>
        <StyledLegend>Address Details</StyledLegend>
        <div>
          <StyledLebel htmlFor="address">Address </StyledLebel>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter Address" />
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="state">State </StyledLebel>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter State" />
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="city">City </StyledLebel>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Kanpur">Kanpur</option>
              </StyledSelect>
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="country">Country </StyledLebel>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="india">INDIA</option>
              </StyledSelect>
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="pincode">Pincode </StyledLebel>
          <Controller
            name="pincode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter pincode" />
            )}
          />
          <StyledError>{errors.pincode?.message}</StyledError>
        </div>
      </StyleFieldset>
      <StyleFieldset>
        <StyledLegend>Other Details</StyledLegend>
        <div>
          <StyledLebel htmlFor="occupation">Occupation </StyledLebel>
          <Controller
            name="occupation"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledInput {...field} placeholder="Enter occupation" />
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="religion">Religion </StyledLebel>
          <Controller
            name="religion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Sikh">Sikh</option>
                <option value="Other">Other</option>
              </StyledSelect>
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="maritalStatus">Marital Status </StyledLebel>
          <Controller
            name="maritalStatus"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Separated">Separated</option>
              </StyledSelect>
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="bloodGroup">Blood Group </StyledLebel>
          <Controller
            name="bloodGroup"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </StyledSelect>
            )}
          />
        </div>
        <div>
          <StyledLebel htmlFor="nationality">Nationality </StyledLebel>
          <Controller
            name="nationality"
            control={control}
            defaultValue=""
            render={({ field }) => <StyledInput {...field} />}
          />
        </div>
      </StyleFieldset>
      <StyledButtonDiv>
        <StyledButton type="submit" color="white" backgroundColor="green">
          Submit
        </StyledButton>
        <StyledButton
          type="button"
          color="red"
          backgroundColor="white"
          onClick={handleReset}
        >
          Cancel
        </StyledButton>
      </StyledButtonDiv>
    </StyledFormWrapper>
  );
};

export default UserRegistrationForm;
