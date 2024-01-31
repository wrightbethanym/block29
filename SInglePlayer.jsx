import React, {UseEffect, useState) from 'react'
import {useParams} from "react-router-dom"
import {getPlayerByID}

export default function SInglePlayer() {
    const [puppy, setPuppy] = useState(null);
    const {id}=useParams();
    useEffect(()=>{
        async function getPlayerData(){
            try{
                const puppy = await getPlayerById(id)
            }
    )catch(err){
        console.log(err)
    }
}
getPlayerData();
}, []);
return <div>SinglePlayer</div>;
</div>;