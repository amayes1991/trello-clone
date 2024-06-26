"use client"
import Image from '@/node_modules/next/image'
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';
import fetchSuggestion from '@/utils/fetchSuggestion';
function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) =>[
    state.board,
    state.searchString, state.setSearchString])
 
    const [loading, setLoading] = useState<boolean>(false);
    const [suggestion, setSuggestion] =useState<string>("");
 useEffect(() =>{
  if(board.columns.size == 0) return ;
  setLoading(true);
  const fetchSuggestionFunc = async () =>{
    const  suggestion = await fetchSuggestion(board);
    setSuggestion(suggestion);
    setLoading(false);
  };

  fetchSuggestionFunc();
 }, [board])
  return (
    <header>
      <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 round-b-2xl'>

    <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50' />
      <Image 
    src={"https://links.papareact.com/c2cdd5"}
    // src="/trellologo.png"
 alt="Trello Logo" width={300} height={100} className="w-44 md:w-56 pb-10 md:pb-0 object contain" />
 <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input value={searchString} onChange={(e) => setSearchString(e.target.value)} type={"text"} placeholder='Search'  className='flex-1 outline-none p-2'/>
        <button type='submit' hidden > Search</button>
    </form>
<Avatar round size='50' color='#0055D1' name='Austin M' />
 </div>
 </div>
 <div className='flex items-center justify-center py-2 px-5 md:py-5'>
  <p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl bg-white italic max-w-3xl text-[#0055D1] p-5'>
  <UserCircleIcon className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${loading && "animate-spin"}`} />
{suggestion && !loading ? suggestion : "GPT is summarising your task for the day..."}
  </p>
  
 </div>
 {/* <h1 className='h-10'>Trello 2.0 Clone</h1> */}
 </header>
  )
}

export default Header