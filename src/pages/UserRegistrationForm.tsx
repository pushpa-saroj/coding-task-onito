import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData, AnyPresentValue } from "src/interfaces";
import { schema } from "src/schema";
import { userRegistrationService } from 'src/services';

const UserRegistrationForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const dobOrAge = data.dobOrAge;
    let age;
    if (typeof dobOrAge === 'string' && /\d/.test(dobOrAge)) {
      age = new Date().getFullYear() - parseInt(dobOrAge);
    } else {
      const [day, month, year] = (dobOrAge as string).split('/');
      age = new Date().getFullYear() - parseInt(year);
    }
    console.log('Age:', age);
    userRegistrationService()
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Personal Details</legend>
        <div>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} placeholder="Enter Name" />
            )}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Controller
          name="dobOrAge"
          control={control}
          render={({ field }) => (
            <input {...field} placeholder="DD/MM/YYYY or Age in Years" />
          )}
      />
         {errors.dobOrAge && <p>{errors.dobOrAge.message}</p>}
        </div>
        <div>
          <label htmlFor="sex">Sex</label>
          <Controller
            name="sex"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            )}
          />
          <p>{errors.sex?.message}</p>
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter Mobile"/>}
          />
          <p>{errors.mobile?.message}</p>
        </div>
        <div>
          <label htmlFor="govIdType">Govt Issued Id</label>
          <div>
            <Controller
              name="govIdType"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Select</option>
                  <option value="Aadhar">Aadhar</option>
                  <option value="PAN">PAN</option>
                </select>
              )}
            />
            <Controller
              name="govId"
              control={control}
              render={({ field }) => <input {...field} placeholder="Enter Govt ID"/>}
            />
          </div>
          <p>{errors.govId?.message}</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Contact Details</legend>
        <div>
          <label htmlFor="guardianType">Guardian Details</label>
          <div>
            <Controller
              name="guardianType"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Select</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Other">Other</option>
                </select>
              )}
            />
            <Controller
              name="guardianName"
              control={control}
              render={({ field }) => <input {...field} placeholder="Enter Guardia Name"/>}
            />
          </div>
          <p>{errors.guardianName?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter Email" />}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="emergencyContact">Emergency Contact Number</label>
          <Controller
            name="emergencyContact"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter Emergency No" />}
          />
          <p>{errors.emergencyContact?.message}</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Address Details</legend>
        <div>
          <label htmlFor="address">Address</label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter Address"/>}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter State"/>}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => <input {...field}placeholder="Enter citytown/village" />}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <Controller
            name="country"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode</label>
          <Controller
            name="pincode"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter pincode"/>}
          />
          <p>{errors.pincode?.message}</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Other Details</legend>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <Controller
            name="occupation"
            control={control}
            render={({ field }) => <input {...field} placeholder="Enter occupation" />}
          />
        </div>
        <div>
          <label htmlFor="religion">Religion</label>
          <Controller
            name="religion"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Sikh">Sikh</option>
                <option value="Other">Other</option>
              </select>
            )}
          />
        </div>
        <div>
          <label htmlFor="maritalStatus">Marital Status</label>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Separated">Separated</option>
              </select>
            )}
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group</label>
          <Controller
            name="bloodGroup"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            )}
          />
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <Controller
            name="nationality"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
      </fieldset>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserRegistrationForm;
