import React from 'react';

import { useEffect } from 'react';
import {createContext,useState} from 'react';

export const AppContext=createContext();

export function AppProvider({children}){
    const[user,setUser]=useState(
        JSON.parse(localStorage.getItem("user")) ||null
    );

    const [selectedGenres,setSelectedGenres]=useState(
        JSON.parse(localStorage.getItem("selectedGenres")) ||[]
    );


    useEffect(()=>{
            localStorage.setItem("user",JSON.stringify(user))},
            [user]
        )

    useEffect(()=>{
        
        
        localStorage.setItem("selectedGenres",JSON.stringify(selectedGenres))},
            [selectedGenres]
        )

                
            return (
                <AppContext.Provider value={
                    {
                        user,
                        setUser,
                        selectedGenres,
                        setSelectedGenres
                    }}>

                    {children}
                    </AppContext.Provider>
            )
        };