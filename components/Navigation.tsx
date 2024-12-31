"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton ,UserButton,SignedIn,SignedOut} from "@clerk/nextjs"

const Navigator = ()=>{
  const pathname= usePathname()
  return(
    <>
      <Link href="/" className={pathname === "/" ? "font-bold text-white" : "font-thin text-blue-700"}>Home</Link>
      <Link href="/products/mackbook" className={pathname.startsWith("/products/mackbook")?"font-bold text-white" : "font-thin text-blue-700"}>products</Link>
    <SignedOut>
      <SignInButton mode="modal" />
    </SignedOut>
    <SignedIn>
    <UserButton/>
    </SignedIn>
    </>
  )
}

export default Navigator