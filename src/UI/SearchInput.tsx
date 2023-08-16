import React, {useEffect, useState} from 'react';
import { useAppDispath } from '../hooks/hooks';
import { changeSearchState } from '../store/reducers/searchReducer';
import { useDebounce } from '../hooks/useDebounce';

const SearchInput = () => {
    const [value, setValue] = useState('');

    const dispatch = useAppDispath();

    //Создаем обертку для диспатча, чтобы передать его в хук useDebounce
    const debounceWrapper = () => dispatch(changeSearchState(value));
    const debouncedSearch = useDebounce(debounceWrapper, 1000);

    useEffect(() => {
        debouncedSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    

    return (
        <input 
            type="text"
            className='border-2 rounded-lg h-8 p-2 w-[300px] shadow-md max-[1280px]:hidden'
            placeholder='Поиск'
            value={value}
            onChange={e => setValue(e.target.value)}/>
    )
}

export default SearchInput