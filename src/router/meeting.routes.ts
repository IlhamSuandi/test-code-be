import meetingController from "../controller/meeting.controller";
import BaseRoutes from "./base.router";

class MeetingRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/", meetingController.insert);
  }
}

export default new MeetingRoutes().router;
