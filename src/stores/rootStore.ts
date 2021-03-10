
import  Users  from "./loginStore";
import Tasks from "./mainStore";



class RootStore {
    tasksStore: any;
    userStore: any;
    constructor() {
      this.tasksStore = new Tasks();
      this.userStore = new Users();
      
    }
  }

const rootStore = new RootStore()
export default rootStore;