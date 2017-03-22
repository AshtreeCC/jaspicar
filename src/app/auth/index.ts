// components
import { LoginComponent }       from './login/login.component';
import { EmailComponent }       from './email/email.component';
import { SignupComponent }      from './signup/signup.component';
import { ProfileComponent }     from './profile/profile.component';
import { OfflineComponent }     from './offline/offline.component';

export const APP_AUTH_COMPONENTS: any[] = [
  LoginComponent,
  EmailComponent,
  SignupComponent,
  ProfileComponent,
  OfflineComponent,
];

export * from './login/login.component';
export * from './email/email.component';
export * from './signup/signup.component';
export * from './profile/profile.component';
export * from './offline/offline.component';
