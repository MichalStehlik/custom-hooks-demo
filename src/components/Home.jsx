import {useState} from "react";
import useFetch from "./useFetch";
import useRandom from "./useRandom";
import useTimeout from "./useTimeout"

const Home = () => {
    const [y, setY] = useState("nothing");
    useTimeout(()=>{setY("happened")},1000);
    let x = useRandom(0,100);
    const {data, isLoading, error} = useFetch("http://numbersapi.com/" + 5);
    if (isLoading)
    {
        return <p>Loading</p>;
    }
    else if(data)
    {
        return <p>{JSON.stringify(data," ",4)}{x}{y}</p>;
    }
    else if (error) {
        return <p>Error</p>
    } else {
        return <p>Waiting</p>
    }
}

export default Home;