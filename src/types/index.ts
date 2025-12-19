// Define a type for your user (example)
export interface User {
  email: string;
  phone: string;
  userEmail: string;
  userId: string;
  clientId: string;
  role: string;
  specialToken: string;
  accessToken: string;
  refreshToken: string;
}

  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };