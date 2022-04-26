import { useEffect, useState } from "react";

export default function useDelay(initTime = "", delay = 1000) {
    const [searchTime, setSearchTime] = useState(initTime);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTime(initTime);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [delay, initTime]);
    return searchTime;
}
