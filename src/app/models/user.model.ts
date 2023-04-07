export default interface IUser {
company: any;
  userId?: number;
  email: string;
  password: string;
  role: 'job_seeker' | 'recruiter' | 'admin';
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImage?: string;
  bio?: string;
  location?: string;
  createdAt?: Date;
  updatedAt?: Date;
  skills?: string[];
  approved?: boolean;
  experience?: {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
    location?: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
    category: 'High School' | 'Associate' | 'Bachelor' | 'Master' | 'PhD';
  }[];
}
