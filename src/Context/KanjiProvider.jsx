import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import useLocalStorage from '../CustomHook/useLocalStorage';
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const KanjiContext = createContext();


const KanjiProvider = ({children}) => {
    const [kanji, setKanji] = useState([]);
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [error, setError] = useState(null);
    const [grade, setGrade] = useState(1); // Use the custom hook for grade

    useEffect(() => {
        console.log(grade);
        
        const fetchKanji = async () => {
            setLoadingSkeleton(true);
            try {
                const response = await axios.get(`${apiUrl}/grade-${grade}`);
                
                console.log("api called",response.data);
                setKanji([...response.data]); // Create a new array reference
                console.log("kanji",kanji);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoadingSkeleton(false);
            }
        };

        fetchKanji();
    }, [grade]); 

     // Log kanji whenever it changes
     useEffect(() => {
        console.log("Updated kanji:", kanji);
    }, [kanji]);

    

  return (
    <KanjiContext.Provider value={{ kanji, loadingSkeleton,setLoadingSkeleton, error, grade, setGrade }}>
        {children}
    </KanjiContext.Provider>
  )
}

export { KanjiContext, KanjiProvider };