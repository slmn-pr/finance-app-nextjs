
import { redirect } from 'next/navigation'

export default async function Home() {


  redirect("/dashboard")

  return <>please wait to sent dashboard page</>
}
