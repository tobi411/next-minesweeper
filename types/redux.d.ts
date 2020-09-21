import * as Redux from "redux";
import { Task } from "redux-saga";

declare module "Redux" {
    export interface Store {
        sagaTask: Task
    }
}