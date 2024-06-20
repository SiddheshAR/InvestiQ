import React from 'react'
import connectToDB from '@/database';

const page =async () => {
    await connectToDB();
  return (
    <div>page</div>
  )
}

export default page