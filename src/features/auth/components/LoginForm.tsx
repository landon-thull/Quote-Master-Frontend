import {CardContent, CardFooter} from "@/components/ui/card.tsx";
import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginRequest} from "@/features/auth/types";
import {loginWithEmailAndPassword} from "@/features/auth/api/login.ts";
import storage from "@/utils/storage.ts";
import {z} from "zod";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {setIsAuthenticated} from "@/stores/authSlice.ts";
import {useAppDispatch} from "@/hooks/reduxHooks.ts";

const schema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string()
      .min(1, "Required")
      .min(7, "Password must have more than 7 characters"),
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: {errors, isSubmitting},
  } = useForm<LoginRequest>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    loginWithEmailAndPassword(data).then((res) => {
      storage.setToken(res.token);
      dispatch(setIsAuthenticated(true));
      navigate("/");
    }).catch((error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        resetField("email");
        resetField("password");
        setError("email", {type: "auth", message: "Invalid email or password"});
        setError("password", {type: "auth", message: "Invalid email or password"});
      }
    })
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="text-muted-foreground grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>Email</Label>
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
            <Label htmlFor="password" className={errors.password  ? "text-red-500" : ""}>Password</Label>
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
  )
}

export default LoginForm;