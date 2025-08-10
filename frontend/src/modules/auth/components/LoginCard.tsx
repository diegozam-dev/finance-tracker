import {
  Card,
  Typography,
  Button,
  Input,
  Checkbox
} from '@material-tailwind/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '../../../utils/auth-client';
import { Link } from 'react-router';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
  remember: z.boolean().optional()
});

type LoginFormData = {
  email: string;
  password: string;
  remember?: boolean;
};

const LoginCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const handleSignIn = async (formData: LoginFormData) => {
    const { email, password, remember } = formData;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      // callbackURL: '/dashboard',
      rememberMe: remember
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);
  };

  return (
    <Card className="max-w-xs">
      <Card.Header
        as={Card}
        color="primary"
        className="grid h-24 place-items-center shadow-none"
      >
        <Typography as="span" type="h4" className="text-primary-foreground">
          Sign In
        </Typography>
      </Card.Header>
      <Card.Body as="form">
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
        <div className="mb-4 flex items-center gap-2">
          <Checkbox id="remember" {...register('remember')}>
            <Checkbox.Indicator />
          </Checkbox>
          <Typography as="label" htmlFor="remember" className="text-foreground">
            Remember Me
          </Typography>
        </div>
        <Button type="submit" isFullWidth onClick={handleSubmit(handleSignIn)}>
          Sign In
        </Button>
      </Card.Body>
      <Card.Footer className="text-center">
        <Typography
          type="small"
          className="my-1 flex items-center justify-center gap-1 text-foreground"
        >
          Don't have an account?
          <Link to="/auth/register">Sign Up</Link>
        </Typography>
      </Card.Footer>
    </Card>
  );
};

export default LoginCard;
