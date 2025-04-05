

     //storing the data into the local storage
const storeData=(data)=>{
    localStorage.clear()
    localStorage.setItem("data",JSON.stringify(data))
    console.log("stored successfully")
}

    //sending the data to the userz
const getData=()=>{
    console.log("got data sucessfully")
const response=localStorage.getItem("data")
return JSON.parse(response)
}


  //deleting the data from the localstorage
  const deleteData=()=>{
    localStorage.clear()
  }

  export const useStore={
    storeData,
    getData,
    deleteData
}
  