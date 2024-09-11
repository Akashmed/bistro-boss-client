import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    const axiosPublic = UseAxiosPublic();

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data.items)
    //         setLoading(false);
    //     })
    // },[])

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/menu')
            return res.data.items;
        }
    })

    return [menu, loading, refetch];
};

export default UseMenu;