import { useQuery } from "@tanstack/react-query";
import useAXiosPublic from "../AxiosPublic/useAXiosPublic";

const useAllTask = () => {
    const axiosPublic = useAXiosPublic()
    const { data: task = [] } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task')
            return res.data
        }
    })

    return [task]
};

export default useAllTask;