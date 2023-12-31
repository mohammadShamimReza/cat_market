import { z } from 'zod';

const roleType = ['buyer', 'seller'];

const createUserZodSchema = z.object({
  body: z.object(
    {
      password: z.string({ required_error: 'password is required' }),
      role: z.enum([...roleType] as [string, ...string[]], {
        required_error: 'role is required',
      }),
      name: z.object(
        {
          firstName: z.string({ required_error: 'firstName is required' }),
          lastName: z.string({ required_error: 'firstName is required' }),
        },
        { required_error: 'Name is required' }
      ),
      phoneNumber: z.string({ required_error: 'phoneNumber is required' }),
      address: z.string({ required_error: 'Address is required' }),
      budget: z.number({ required_error: 'budget is required' }),
      income: z.number({ required_error: 'income is required' }),
    },
    { required_error: 'body is required' }
  ),
});

export const UserValidation = { createUserZodSchema };
