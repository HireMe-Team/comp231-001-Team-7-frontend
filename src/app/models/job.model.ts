export default interface IJob {
  _id: string;
  position: string;
  company: string;
  type: string;
  description: string;
  qualifications: string;
  salary: string;
  status: string;
  createDate: Date;
  closingDate?: Date;
  recruiterId: Number;
  applications: {
    userId: String;
    firstName: String;
    lastName: String;
    email: String;
    resume: String;
  }[];
}
