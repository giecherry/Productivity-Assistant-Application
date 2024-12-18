import { createContext, useState } from "react";

export const HabitFiltSortContext = createContext();

export function HabitFiltSortContextProvider ({children}) {

    const [sortHabits, setSortHabits] = useState({keyToSort: 'repeat', direction: 'asc'});
    const [filterHabits, setFilterHabits] = useState('')

    return (
        <>
            <HabitFiltSortContext.Provider value={{filterHabits, setFilterHabits, sortHabits, setSortHabits}}>
                {children}
            </HabitFiltSortContext.Provider>
        </>
    )
}


/* type HabitFiltSort = {
    onChange: (filters: PriorityFilters) => void;
}
export default function HabitFiltSort({
    onChange,
}; HabitFiltSort) {
     const [search, setSearch] = useState<PriorityFilters['search']>();
     const debounceSearch = useDebounce(search);

     const [priority, setpriority] = useState<PriorityFilters['priority']>();

    useEffect(() => {
        onChange({priority, search: debouncheSearch});
    }, [priority, debouncheSearch]);

    return(
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search priority"/>
            select value={priority} onChange={(e) => priority(e.target.value ? parseInt(e.target.value) : undefined)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </>
    )
} 
    
i Create:
const [search, setSearch] = useState<ProductFilters['search']>();
const [priority, setPriority] = useState<PriorityFilters['priority']>();

const {data, isFetching} = useQuery({
queryKey: ['priority'],
queryFn: () => fetchProduct({search}),

return
<>
<HabitFiltSortContext onChange={(filters) =>{
    setPriority(filters.priority);
    setSearch(filters.search);
    }}
</>
})
*/





