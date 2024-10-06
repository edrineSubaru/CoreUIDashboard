// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  hrManagementSystemAPIUrl: "https://localhost:7150/api",  
  organizationName: "Mwesigwa Group",
  
  language: {
    en: "690071006400540036006D00660056004E004A0073003D00",
    ar: "4600750049006C0050002F006F0078007600430034003D00",
  },
 
  apiBindings: {
    UserManagement: "https://localhost:7073/api", //old
    Configuration: "https://localhost:7246/api",
    IdentityAndCitizenship: "https://localhost:7246/api",
    Common: "https://localhost:7073/api", //old
    Establishment: "https://localhost:7246/api",
    Account: "https://localhost:7073/api",
    Data: "https://localhost:7246/api",
    AjsbMakani: "https://localhost:7246/api",
    ActivityType: "https://localhost:7246/api",
    PartnerType: "https://localhost:7246/api",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
