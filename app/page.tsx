import { Dashboard } from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <Link href={"/dashboard"}>
          <Button>Start using Periskope</Button>
        </Link>
      </div>
    </div>
  );
}
