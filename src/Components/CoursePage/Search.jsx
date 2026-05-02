import React from 'react';

const Search = ({search , setSearchValue}) => {

    return (
         <div className='mt-3 w-80'>
                <label className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-full shadow-sm 
                    focus-within:shadow-md focus-within:border-orange-400 transition-all duration-300">
                        <svg 
                            className="h-5 w-5 text-gray-400" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            type="search"
                            value={search}
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder="Search courses..."
                            className="w-full outline-none bg-transparent text-sm md:text-base placeholder:text-gray-400"
                        />

                    </label>
            </div>
    );
};

export default Search;