interface EmployeeModel {
    userId: number;
    roleId: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    passportNo: string;
    contactNo: string;
    contactEmail: string;
    lastLoginDate: Date | null;
    userBlocked: boolean;
    bolckedDate: Date | null;
    isFirstLogin: boolean;
    passwordExpiryDate: Date | null;
    loginAttemptCount: number | null;
    isDeleted: boolean;
    userPhoto: string;
    version: number;
    isSuperAdmin: boolean;
    createdBy: number;
    createdDate: Date;
    updatedBy: number | null;
    updatedDate: Date | null;
    termsAndConditionAuthorNavigations: any[]; // Depending on what is expected here, you can replace `any[]` with the proper type
    termsAndConditionEditorNavigations: any[];
    wbsrequestDetailModifiedByNavigations: any[];
    wbsrequestDetailWbsrequesters: any[];
    wbsroleMappingDetails: any[];
  }
  