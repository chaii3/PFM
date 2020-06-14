import ActionApiInit from "./actions/ActionApiInit";

export default class ControllerApi {
    public actionInit(): ActionApiInit {
        return new ActionApiInit();
    }
}