import {Action} from "redux";
import {Path} from "ramda";

export interface ActionPayload extends Action {
  payload: any;
}
