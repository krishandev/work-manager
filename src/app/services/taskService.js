import { httpAxios } from "../helper/httpHelper";

export async function addTask(task){
    const result=await httpAxios.post('/api/work', task).then((response)=>response.data);
    return result;
}

export async function getTasksOfUser(userId){
    const result=await httpAxios.get(`/api/users/${userId}/work`).then((response)=>response.data);
    return result;
}

export async function deleteTask(workId){
    const result=await httpAxios.delete(`/api/work/${workId}`).then((response)=>response.data);
    return result;
}