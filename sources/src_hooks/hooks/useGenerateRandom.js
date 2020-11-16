import { useState } from 'react';

const useGenerateRandom = () => {

    const [list, setList] = useState([]);
    
    const genRand = (range, zero) => {

        const num = Math.floor(Math.random() * range);

        if (list.includes(num)){
            console.log(num + " already used");
        }

        setList([...list, num]);

        if(zero) {
            return num;
        } else {
            return num + 1;
        }
    }

    return genRand;
}

export default useGenerateRandom;