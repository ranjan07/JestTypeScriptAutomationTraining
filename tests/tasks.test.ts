import { TaskAPI } from "../src/api";
import { logger } from "../src/logger";
import { TaskManager } from "../src/task";


jest.mock("../src/api");
//test
describe("TaskManager business logic", () => {
    let manager: TaskManager;
    let mockApi: jest.Mocked<TaskAPI>;

    beforeEach(() => {
        manager = new TaskManager();
        mockApi = new TaskAPI() as jest.Mocked<TaskAPI>;

        jest.clearAllMocks();
    });

    test("should add a task", () => {
        const spy = jest.spyOn(logger, "log");
        const task = manager.addTask("Write tests");
        expect(task.title).toBe("Write tests");
        expect(task.completed).toBe(false);
    });
    test("should retry all incompete tasks", () => {
        const spy = jest.spyOn(logger, "error");
        const task = manager.addTask("Retry me");
        const retried = manager.retryAllTasks();
        expect(retried[0].id).toBe(task.id);
        expect(retried[0].retries).toBe(1);
    });

    test("should mark task as complete", () => {
        const task = manager.addTask("Finsh assignment");
        const completed = manager.markTaskCompleted(task.id);
        expect(completed?.completed).toBe(true);
    });

    test("should interact with mocked API", async () => {
        const task = manager.addTask("API sync");
        mockApi.uploadTask.mockResolvedValue(task);
        mockApi.fetchTasks.mockResolvedValue([task]);

        const uploaded = await mockApi.uploadTask(task);
        expect(uploaded).toEqual(task);

        const fetched = await mockApi.fetchTasks();
        expect(fetched).toHaveLength(1);
        expect(fetched[0].title).toBe("API sync");
    });
});