import { prisma } from '@/lib/prisma'
import React from 'react'

const Home = async () => {
  const user =await prisma.user.findFirst(
    {
      where: {
        email: 'test@test.com'
      }
    }
  )
  return (
    <div className='min-h-screen min-w-full bg-slate-900 flex flex-col justify-center items-center text-slate-100 text-2xl'>
      <h1>Prisma supabase example home</h1>
      <h1>The user data fetched from prisma supabase database is as follows</h1>
      <div>User name is {user?.name}</div>
    </div>
  )
}

export default Home