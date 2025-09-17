export interface Task{
    id:string;
    title:string;
    completed:boolean;
    retries:number;
};

export class TaskManager{
    private tasks:Map<string,Task>;
constructor(){
   this.tasks=new Map(); 
}
addTask(title:string):Task{
  const task:Task={
    id:"1223",
    title,completed:false,
    retries:0,
  };
this.tasks.set(task.id,task);
return task;
}

retryAllTasks():Task[]{
    const retried:Task[]=[];
    for(const task of this.tasks.values()){
        if(!task.completed){
            task.retries+=1;
            retried.push(task);
        }
    }
    return retried;
}
markTaskCompleted(id:string):Task|null{
    const task=this.tasks.get(id);
    if(!task)return null;
    task.completed=true;
    return task;
}
listTasks():Task[]{
    return Array.from(this.tasks.values());
}
}