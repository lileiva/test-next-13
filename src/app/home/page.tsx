import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "test",
}

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to home</h1>
    </main>
  )
}
