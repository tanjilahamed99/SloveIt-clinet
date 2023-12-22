import { useQuery } from "@tanstack/react-query";
import useAXiosPublic from "../AxiosPublic/useAXiosPublic";

const useAllTask = () => {
    const axiosPublic = useAXiosPublic()
    const { data: task = [], refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task')
            return res.data
        }

    })

    const allTask = task.filter(i => i.ongoing === false && i.completed === false)
    const ongoingTask = task.filter(i => i.ongoing === true && i.completed === false)
    const completedTask = task.filter(i => i.completed === true)


    return [task, refetch, allTask, ongoingTask,completedTask]
};

export default useAllTask;