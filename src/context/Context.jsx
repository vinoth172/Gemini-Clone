import run from "../config/gemini";
import {createContext, useState} from "react"

 export const Context=createContext();

     const ContextProvider=(props)=>{
    const[input,setInput]=useState("");
    const[recentPrompt,SetRecentPrompt]=useState("");
    const[prevPropmts,setPrevPromts]=useState([]);
    const[showResult,setShowReselt]=useState(false);
    const[loading ,setLoding]=useState(false);
    const[resultData,setResultData]=useState("");

    const delayPara=(index,nextword)=>{
         setTimeout(function(){
             setResultData(prev=>prev+nextword)
         },75*index)

    }
    const newChat=()=>{
      setLoding(false)
      setShowReselt(false)
    }

  
    const onSent= async (prompt)=>{
        
        setResultData("")
        setLoding(true)
        setShowReselt(true)
        let response;
        if(prompt!==undefined){
                response= await run(prompt)
                SetRecentPrompt(prompt)
        }
        else
        {
         setPrevPromts(prev=>[...prev,input])
         SetRecentPrompt(input)
         response=await run(input)

        }

      //   SetRecentPrompt(input)
      //   setPrevPromts(prev=>[...prev,input])
      //  const response= await run(input)
       let responseArray=response.split("**");
       let newResponse="";
       for(let i=0;i<responseArray.length;i++){
          if (i===0||i%2 !==1){

             newResponse+=responseArray[i]
          }else{
            newResponse+="<b>"+responseArray[i]+"</b>"
          }

       }
       let newResponse2=newResponse.split("*").join("</br>")
       

       let newResponseArray=newResponse2.split(" ");
       for(let i=0;i<newResponseArray.length;i++){
             const nextWord=newResponseArray[i]
             delayPara(i,nextWord+" ")
       }
       setLoding(false)
       setInput("")
    }
    // onSent("what is rect js")




     const contextValue={
        prevPropmts,
        setPrevPromts,
        onSent,
        SetRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        recentPrompt,
        newChat

     }

 

 return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
 )
 }
 export default ContextProvider