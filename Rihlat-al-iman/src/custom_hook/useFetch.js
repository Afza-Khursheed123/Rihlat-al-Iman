import { useEffect, useState } from "react"

const useFetch=(url,initialData)=>{
    const [data,setData]=useState(initialData);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(url).then((res)=>{
            return res.json()
        }).then((res)=>{
            setData(res)
        }).catch(()=>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })


    }
    ,[])
    return {data,loading,error}
}

export default useFetch