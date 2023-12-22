import { useQuery } from "@tanstack/react-query";
import useAXiosPublic from "../AxiosPublic/useAXiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useAllTask = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAXiosPublic()
    const { data: task = [], refetch } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task/${user?.email}`)
            return res.data
        }

    })

    const allTask = task.filter(i => i.ongoing === false && i.completed === false)
    const ongoingTask = task.filter(i => i.ongoing === true && i.completed === false)
    const completedTask = task.filter(i => i.completed === true)


    return [task, refetch, allTask, ongoingTask, completedTask]
};

export default useAllTask;