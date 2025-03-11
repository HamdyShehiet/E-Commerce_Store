function Search({ searchBox }){

    return(
        <div className={`search-box ${searchBox ? "active" : ""} flex items-center gap-6 py-2 px-3 rounded-md bg-[--secondaryTwo-clr]`}>
            <input type="text" className="w-[80%] border-none outline-none placeholder:text-sm bg-transparent" placeholder="What are you looking for?"/>
            <i className="fa-solid fa-magnifying-glass text-xl text-[--primaryTwo-clr]"></i>
        </div>
    )
}
export default Search