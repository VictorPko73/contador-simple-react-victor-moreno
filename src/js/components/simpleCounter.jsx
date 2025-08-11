import React, { useEffect, useState } from "react";

const SimpleCounter = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunnig, setIsRunning] = useState(true)
    const [intervalId, setIntervalId] = useState(null)


    useEffect(() => {
        if (isRunnig) {
            const secondsTimer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1)

            }, 1000);
            return () => (clearInterval(secondsTimer));
        }

    }, [isRunnig]);

    const stopCounter = () => {
        setIsRunning(false);
        if (intervalId) {
            clearInterval(intervalId);
        }
    };

    const playCounter = () => {
        setIsRunning(true);
    };

    const resetCounter = () => {
        setSeconds(0);
        setIsRunning(true);
    }

    const digits = seconds.toString().padStart(6, '0').split('');
    console.log(digits)



    return (
        <div class="row justify-content-center">
            <div class="col-sm-12 d-flex justify-content-center align-items-center">
                <div class="col-sm-12 d-flex justify-content-center">

                    {digits.map((digit, idx) =>
                        <span key={idx} id="card" class="card rounded-circle m-1 fs-1 text-center fw-bold p-2">
                            {`${digit}`}
                        </span>

                    )}


                </div>
            </div>
            <div className="row justify-content-center m-4">
                <button className="btn btn-danger col-12 col-sm-auto " onClick={stopCounter}>
                     Stop
                </button>
                <button className="btn btn-success col-12 col-sm-auto " onClick={playCounter}>
                    Start
                </button>
                <button className="btn btn-warning col-12 col-sm-auto" onClick={resetCounter}>
                    Reset
                </button>
            </div>
        </div>


    );
}

export default SimpleCounter;

