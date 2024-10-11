import { useCallback, useEffect, useState } from "react";
import { strNoAccent } from "./strNoAccent";

export function useFetch(url, options = {}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setErrors(null);

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Accept': 'application/json; charset=UTF-8',
                    ...options.headers,
                },
            });

            if (!response.ok) {
                throw new Error('Erreur réseau : ' + response.statusText);
            }

            const jsonData = await response.json();
            setData(strNoAccent(jsonData[0]));
        } catch (e) {
            setErrors(e);
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, []); // Appel unique au montage du composant

    return { data, loading, errors, refetch: fetchData };
}