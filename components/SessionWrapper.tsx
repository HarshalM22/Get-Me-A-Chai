"use client"
import { SessionProvider } from "next-auth/react"
const SessionWrapper = ({children}:{children:React.ReactNode}
) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default SessionWrapper