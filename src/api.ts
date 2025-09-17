import { Task } from "./task";

export class TaskAPI{
    private tasks:Task[]=[];

    async fetchTasks():Promise<Task[]>{
        await new Promise((res)=>setTimeout(res,50));
        return this.tasks;
    }

    async uploadTask(task:Task):Promise<Task>{
    this.tasks.push(task);
    return task;
    }

    async updateTask(task:Task):Promise<Task>{
        const idx=this.tasks.findIndex((t)=>t.id===task.id);
        if(idx>=0){
            this.tasks[idx]=task;
        }
        return task;
    }
    reset():void{
        this.tasks=[];
    }
}