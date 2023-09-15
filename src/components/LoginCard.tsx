import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import {Separator} from "@/components/ui/separator.tsx";

const LoginCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md h-full">
      <CardHeader>
        <h1 className="text-4xl text-center mb-4 font-bold tracking-wider">QUOTE MASTER</h1>
        <Separator />
        <CardTitle className="pt-4">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input className="text-primary" id="email" type="email" placeholder="johndoe@email.com" />
          <p></p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input className="text-primary" id="password" type="password" />
          <p></p>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="mt-4">
        <Button className="w-full">LOGIN</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
