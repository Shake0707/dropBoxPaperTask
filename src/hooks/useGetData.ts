import { useEffect, useState } from "react";
import { EApi, IData } from "../types/api.type";

interface IReturnData {
    data: IData[] | null;
    pending: boolean;
    error: string;
}

type TMyFunc = (endPoint: string) => IReturnData;

export const useGetData: TMyFunc = (endPoint) => {
    const [data, setData] = useState<IData[] | null>(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function get() {
            try {
                setPending(true);
                const data = await fetch(EApi.api + endPoint);
                if (!data.ok) throw new Error(data.statusText);
                const result = await data.json();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setPending(false);
            }
        }

        get();
    }, []);

    return { data, error, pending }
}