'use client'
import "@/styles/globals.css";
import ParentComponent from "@/components/ParentComponent";
export default function RootLayout({ children }) { 
  return <><ParentComponent children={children} /></>
}
