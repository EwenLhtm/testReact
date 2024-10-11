import { useFetch } from "../Hooks/useFetch";

export function TestApi() {
    const {data, loading, erros} = useFetch('');
    console.log(data)

    return <div>
        {loading && <div>Chargement...</div>}
        {/* {data && <div>
                <p>{data}</p>
            </div>} */}
    </div>
}