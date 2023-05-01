export interface FormData {
  name: string;
  dobOrAge: string;
  sex: string;
  mobile: string;
  govIdType: string;
  govId: string;
  guardianType: string;
  guardianName: string;
  email: string;
  emergencyContact: string;
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
  occupation: string;
  religion: string;
  maritalStatus: string;
  bloodGroup: string;
  nationality: string;
}

export type AnyPresentValue = string | number | boolean | object | null;
