import React, { useEffect, useState } from "react";

const SimpleCouter = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const secondsTimer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)

        }, 1000);
        return () => (clearInterval(secondsTimer));


    }, []);

    const digits = seconds.toString().padStart(7, '0').split('');





    return (
        <div class="container my-4">
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex">
                    <span class="border rounded px-2 mx-1 bg-light fs-3 fw-bold">0</span>
                    {digits.map((digit, idx) =>
                        <span key={idx} class="border rounded px-2 mx-1 bg-light fs-3 fw-bold">
                            {`${digit}`}
                        </span>
                        
                    )}


                </div>
            </div>
        </div>
    );
}

export default SimpleCouter;
