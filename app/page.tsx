import Board from '@/components/Board'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Header />
  
   <Board />
    {/* <div className='w-64 bg-white shadow rounded'>Green</div> */}
    </main>
  )
}
