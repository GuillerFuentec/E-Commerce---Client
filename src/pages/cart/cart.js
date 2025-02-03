import { CartLayout } from "@/layouts";
import { useRouter } from "next/router";

export default function CartPage() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);

  return (
    <CartLayout>
      {currentStep === 1 && <p>Step One</p>}
      {currentStep === 2 && <p>Step Two</p>}
      {currentStep === 3 && <p>Step Three</p>}
    </CartLayout>
  );
}
