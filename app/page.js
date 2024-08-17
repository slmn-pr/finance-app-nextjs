import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = createClient();
  console.log(await supabase.auth.getUser());

  return <>Hello</>;
}
