const init={
    task:[
        { id : 1 , name:"JavaScript"},
        { id : 2 , name:"PHP"},
        { id : 3, name:"Laravel"},
]}
const reducer=(state = init, action) => {
    switch (action.type) {
        case 'Ajouter':
            return {
                ...state, 
                task:[...state.task , action.payload]
            };
        case 'Modifier':
            const Tache= state.task.find((t)=>t.id===parseInt(action.payload.id));
            if(Tache){ 
                Tache.name=action.payload.name
            } 
            return state 
        case 'Supprimer':
            return {
                ...state,task:[...state.task.filter( t => t.id !== parseInt(action.payload))]
            };      
        default:
            return state;
    }
};

export default reducer