// types/User.ts

export interface User {
    id: number;
    gender: number;
    curp: string;
    email: string;
    phone: string | null;
    roleId: number;
    statusId: number;
    firstName: string;
    lastName: string;
    userTypeId: number;
    divisionId: number | null;
    userType: string;
    role: string;
    status: string;
    division: string | null;
    createTime: string;
    updateTime: string;
    cveDivision: string | null;
  }
  