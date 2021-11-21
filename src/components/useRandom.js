import {useEffect, useState} from "react";
const useRandom = (min = 0, max) => {
    const [random, setRandom] = useState(0);
    useEffect(() => {
        setRandom( Math.floor(Math.random() * (max - min) ) + min);
    }, [min, max])
    return random;
}

export default useRandom;