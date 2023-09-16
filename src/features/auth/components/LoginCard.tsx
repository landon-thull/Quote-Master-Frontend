import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "../../../components/ui/input.tsx";
import { Label } from "@radix-ui/react-label";
import { Button } from "../../../components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const LoginCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md h-full">
      <CardHeader>
        <h1 className="text-3xl md:text-4xl text-center text-re mb-6 font-bold tracking-wider">QUOTE MASTER</h1>
        <Separator />
        <CardTitle className="pt-6">Login</CardTitle>
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
      <CardFooter>
        <Button className="w-full">LOGIN</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
