import React, { useContext, useEffect, useReducer } from "react";
import reducer from './reducer';
const AppContext = React.createContext();

const API = 'https://dev-5qu8os4uzah1jz4.api.raw-labs.com/services-json?id=1'
const AppProvider = ({ children }) => {
  const initialState = {
    name:'',
    image: '',
    services : []
  }
  const updateHomePage = () => {
  return (
      dispatch({
      type:'HOME_UPDATE',
      payload:{
        name: 'Subhan Ali',
        image: './images/hero.svg',
      }
    })
    )
  }
  const updateAboutPage =() => {
    return(
    dispatch({
      type:'ABOUT_UPDATE',
      payload:{
        name:'About Subhan',
        image:'./images/about1.svg',
      }
    })
    )
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const getServices = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:'GET_SERVICES', payload:data});
    }
    catch(error){
      console.log(error);
    }
  }
  // to call Api
  useEffect(() => {
    getServices(API);
  }, []);


  return (
    <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };