declare module '@vineeththungani/medium-common' {
    import { z } from 'zod';
  
    // Define the type for signUpInput schema
    const signUpInput: z.ZodObject<{
      username: z.ZodString;
      password: z.ZodString;
      email: z.ZodString;
    }>;
  
    export { signUpInput };
  }