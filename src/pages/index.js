import { Inter } from "next/font/google";
import { Button } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>Games Shop</h1>
        <Button content="Primary" primary>Login</Button>
      </div>
    </main>
  );
}
