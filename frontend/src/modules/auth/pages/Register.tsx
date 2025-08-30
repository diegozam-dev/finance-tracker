import { Card, Typography, Button, Input } from '@material-tailwind/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '../../../utils/auth-client';
import { Link, useNavigate } from 'react-router';
import { type RegisterFormData } from '../types/authTypes';

const registerFormSchema = z
  .object({
    firstname: z
      .string()
      .max(16, { message: 'Limit firstname to 16 characters.' })
      .nonempty({ message: "Can't be empty." }),
    lastname: z
      .string()
      .max(16, { message: 'Limit firstname to 16 characters.' })
      .nonempty({ message: "Can't be empty." }),
    email: z.string().email({ message: 'Invalid email.' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters.' })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword != password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword']
      });
    }
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerFormSchema)
  });
  const navigate = useNavigate();

  const handleRegisterWithEmail = async (formData: RegisterFormData) => {
    const { firstname, lastname, email, password } = formData;

    const { data, error } = await authClient.signUp.email({
      name: firstname + ' ' + lastname,
      email,
      password
      // callbackURL
    });

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    console.log(data);

    return navigate('/auth/otp', {
      state: {
        userEmail: email
      }
    });
  };

  return (
    <Card className="max-w-sm">
      <Card.Header
        as={Card}
        color="primary"
        className="grid h-24 place-items-center shadow-none"
      >
        <Typography as="span" type="h4" className="text-primary-foreground">
          Register
        </Typography>
      </Card.Header>
      <Card.Body as="form">
        <div className="mb-4 mt-2 space-y-1.5">
          <Typography
            as="label"
            htmlFor="firstname"
            type="small"
            color="default"
            className="font-semibold"
          >
            Firstname
          </Typography>
          <Input
            id="firstname"
            type="text"
            placeholder="Jhon"
            isError={Boolean(errors.firstname)}
            color={errors.firstname ? 'error' : 'primary'}
            {...register('firstname')}
          />
          {errors.firstname && (
            <Typography type="small" color="error">
              {errors.firstname.message}
            </Typography>
          )}
        </div>
        <div className="mb-4 mt-2 space-y-1.5">
          <Typography
            as="label"
            htmlFor="lastname"
            type="small"
            color="default"
            className="font-semibold"
          >
            Lastname
          </Typography>
          <Input
            id="lastname"
            type="text"
            placeholder="Doe"
            isError={Boolean(errors.lastname)}
            color={errors.lastname ? 'error' : 'primary'}
            {...register('lastname')}
          />
          {errors.lastname && (
            <Typography type="small" color="error">
              {errors.lastname.message}
            </Typography>
          )}
        </div>
        <div className="mb-4 mt-2 space-y-1.5">
          <Typography
            as="label"
            htmlFor="email"
            type="small"
            color="default"
            className="font-semibold"
          >
            Email
          </Typography>
          <Input
            id="email"
            type="email"
            placeholder="someone@example.com"
            isError={Boolean(errors.email)}
            color={errors.email ? 'error' : 'primary'}
            {...register('email')}
          />
          {errors.email && (
            <Typography type="small" color="error">
              {errors.email.message}
            </Typography>
          )}
        </div>
        <div className="mb-4 space-y-1.5">
          <Typography
            as="label"
            htmlFor="password"
            type="small"
            color="default"
            className="font-semibold"
          >
            Password
          </Typography>
          <Input
            id="password"
            type="password"
            placeholder="************"
            isError={Boolean(errors.password)}
            color={errors.password ? 'error' : 'primary'}
            {...register('password')}
          />
          {errors.password && (
            <Typography type="small" color="error">
              {errors.password.message}
            </Typography>
          )}
        </div>
        <div className="mb-4 space-y-1.5">
          <Typography
            as="label"
            htmlFor="confirmPassword"
            type="small"
            color="default"
            className="font-semibold"
          >
            Confirm password
          </Typography>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="************"
            isError={Boolean(errors.confirmPassword)}
            color={errors.confirmPassword ? 'error' : 'primary'}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <Typography type="small" color="error">
              {errors.confirmPassword.message}
            </Typography>
          )}
        </div>
        <Button
          type="submit"
          isFullWidth
          onClick={handleSubmit(handleRegisterWithEmail)}
        >
          Sign Up
        </Button>
      </Card.Body>
      <Card.Footer className="text-center">
        <Typography
          type="small"
          className="my-1 flex items-center justify-center gap-1 text-foreground"
        >
          Don't have an account?
          <Link to="/auth/login">Log in</Link>
        </Typography>
      </Card.Footer>
    </Card>
  );
};

export default Register;
