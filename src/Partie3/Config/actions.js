export const addTask =(newTask)=>{
    return {type:"Ajouter" , payload:newTask }
}
export const updateTask =(upTask )=>{
    return {
        type:"Modifier",
        payload:upTask
    }
}
export const deleteTask =(idTask)=>{
    return {
        type:"Supprimer", 
        payload:idTask
    }
}
