"use client";

import {Button} from "@/components/ui/button";
import {toast} from "sonner";

export default function Home() {
  return (
    <Button
        variant={"outline"}
        size={"xs"}
        onClick={() => {toast.success("Home page")}}
    >
      Click me
    </Button>
  );
}
