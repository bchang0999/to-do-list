import { useEffect, useState } from "react";


function useFetchQuote() {
    const [motivation, setMotivation] = useState("")



    useEffect(() => {
        const fetchQuote = async () =>
            await fetch(
                `https://type.fit/api/quotes`
            )
                .then(res => res.json())
                .then(data => {
                    const randomnumber =
                        Math.floor(Math.random() * (data.length - 1)) + 1;
                    setMotivation(data[randomnumber]);
                })
                .then((data) => { });
        fetchQuote();
    }, [])

    return {motivation};
}

    export default useFetchQuote