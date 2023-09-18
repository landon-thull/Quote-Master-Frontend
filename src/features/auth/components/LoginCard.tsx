import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@radix-ui/react-label";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginWithEmailAndPassword} from "@/features/auth/api/login.ts";
import {LoginResponse} from "@/features/auth/types";
import storage from "@/utils/storage.ts";

const schema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string()
      .min(1, "Required")
      .min(7, "Password must have more than 7 characters"),
});

type test = {
  email: string,
  password: string
}

const LoginCard: React.FC = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting},
  } = useForm<test>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<test> = async (data) => {
    try {
      const res: LoginResponse = await loginWithEmailAndPassword({email: data.email, password: data.password});
      storage.setToken(res.token);
    } catch (error: any) {
      if (error && error.response && error.response.status === 401) {
        setError("email", {message: "Invalid email or password"});
        setError("password", {message: "Invalid email or password"});
      }
    }
  };

  return (
      <Card className="w-full max-w-md h-full">
        <CardHeader>
          <h1 className="text-3xl md:text-4xl text-center text-re mb-6 font-bold tracking-wider">QUOTE MASTER</h1>
          <Separator/>
          <CardTitle className="pt-6">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="text-muted-foreground grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                  id="email"
                  type="email"
                  className="text-primary"
                  placeholder="Email"
                  {...register("email")}
              />
              <p className="text-muted-foreground text-sm text-red-500">{errors.email?.message}</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                  id="password"
                  type="password"
                  className="text-primary"
                  placeholder="Password"
                  {...register("password")}
              />
              <p className="text-muted-foreground text-sm text-red-500">{errors.password?.message}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isSubmitting}>LOGIN</Button>
          </CardFooter>
        </form>
      </Card>
  );
};

export default LoginCard;
