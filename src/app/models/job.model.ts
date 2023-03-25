//Job Interface
export default interface IJob {
  id: string;
  position: string;
  company: string;
  type: string;
  description: string;
  qualifications: string;
  salary: string;
  status: string;
  createDate: Date;
  closingDate: Date;
}

