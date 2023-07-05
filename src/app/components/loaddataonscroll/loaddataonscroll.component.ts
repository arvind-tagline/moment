import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClosePopupService } from 'src/app/Service/close-popup.service';

@Component({
  selector: 'app-loaddataonscroll',
  templateUrl: './loaddataonscroll.component.html',
  styleUrls: ['./loaddataonscroll.component.scss']
})
export class LoaddataonscrollComponent implements OnInit {

  @Output() scrollingFinished = new EventEmitter<void>();
  public datas:any;
  private categoriesSubject = new BehaviorSubject<Array<string>>([]);
  categories$ = this.categoriesSubject.asObservable();
  categories: Array<string> = [];

  public allCategories:any = [
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-06T04:36:12.591Z",
      "id": "633e5b3cf3ea84c37cde6c8b",
      "message": "2022-10-06T04:36:12 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:34:53.219Z",
      "id": "633e5aedf3ea84c37cde6c8a",
      "message": "2022-10-06T04:34:53 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:33:54.596Z",
      "id": "633e5ab2f3ea84c37cde6c89",
      "message": "2022-10-06T04:33:54 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:33:49.806Z",
      "id": "633e5aadf3ea84c37cde6c88",
      "message": "2022-10-06T04:33:49 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "retrieved",
      "createAt": "2022-10-06T04:28:37.123Z",
      "id": "633e5975f3ea84c37cde6c87",
      "message": "2022-10-06T04:28:37 User Alexander Admin retrieved user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-06T04:28:34.373Z",
      "id": "633e5972f3ea84c37cde6c86",
      "message": "2022-10-06T04:28:34 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-06T04:28:03.191Z",
      "id": "633e5953f3ea84c37cde6c85",
      "message": "2022-10-06T04:28:03 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-06T04:27:43.097Z",
      "id": "633e593ff3ea84c37cde6c84",
      "message": "2022-10-06T04:27:43 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:27:39.703Z",
      "id": "633e593bf3ea84c37cde6c83",
      "message": "2022-10-06T04:27:39 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:27:31.840Z",
      "id": "633e5933f3ea84c37cde6c82",
      "message": "2022-10-06T04:27:31 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "serviceId": {
        "name": "VCAM_3020",
        "id": "633e58f3f3ea84c37cde6c7c"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "updated",
      "createAt": "2022-10-06T04:26:43.209Z",
      "id": "633e5903f3ea84c37cde6c81",
      "message": "2022-10-06T04:26:43 User John Doe updated service abstraction VCAM_3020 (633e58f3f3ea84c37cde6c7c) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "serviceId": {
        "name": "VCAM_3020",
        "id": "633e58f3f3ea84c37cde6c7c"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "updated",
      "createAt": "2022-10-06T04:26:40.035Z",
      "id": "633e5900f3ea84c37cde6c80",
      "message": "2022-10-06T04:26:40 User John Doe updated service abstraction VCAM_3020 (633e58f3f3ea84c37cde6c7c) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "serviceId": {
        "name": "VCAM_3020",
        "id": "633e58f3f3ea84c37cde6c7c"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "updated",
      "createAt": "2022-10-06T04:26:37.116Z",
      "id": "633e58fdf3ea84c37cde6c7f",
      "message": "2022-10-06T04:26:37 User John Doe updated service abstraction VCAM_3020 (633e58f3f3ea84c37cde6c7c) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:26:27.481Z",
      "id": "633e58f3f3ea84c37cde6c7e",
      "message": "2022-10-06T04:26:27 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "serviceId": {
        "name": "VCAM_3020",
        "id": "633e58f3f3ea84c37cde6c7c"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "created",
      "createAt": "2022-10-06T04:26:27.307Z",
      "id": "633e58f3f3ea84c37cde6c7d",
      "message": "2022-10-06T04:26:27 User John Doe created service abstraction VCAM_3020 (633e58f3f3ea84c37cde6c7c) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:25:36.213Z",
      "id": "633e58c0f3ea84c37cde6c7b",
      "message": "2022-10-06T04:25:36 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "locationId": {
        "name": "VCAM_1020",
        "id": "633e58bff3ea84c37cde6c79"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "created",
      "createAt": "2022-10-06T04:25:36.005Z",
      "id": "633e58c0f3ea84c37cde6c7a",
      "message": "2022-10-06T04:25:36 User John Doe created location abstraction VCAM_1020 (633e58bff3ea84c37cde6c79) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "Hello world 101",
        "id": "6336eb90198dfaaa4a78f4ad"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:25:32.207Z",
      "id": "633e58bcf3ea84c37cde6c78",
      "message": "2022-10-06T04:25:32 User Alexander Admin retrieved rule abstraction Hello world 101 (6336eb90198dfaaa4a78f4ad) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "Hello world 101",
        "id": "6336eb90198dfaaa4a78f4ad"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:25:22.858Z",
      "id": "633e58b2f3ea84c37cde6c77",
      "message": "2022-10-06T04:25:22 User Alexander Admin retrieved rule abstraction Hello world 101 (6336eb90198dfaaa4a78f4ad) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:25:02.798Z",
      "id": "633e589ef3ea84c37cde6c76",
      "message": "2022-10-06T04:25:02 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:24:59.718Z",
      "id": "633e589bf3ea84c37cde6c75",
      "message": "2022-10-06T04:24:59 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is test",
        "id": "633e5851f3ea84c37cde6c71"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:23:58.584Z",
      "id": "633e585ef3ea84c37cde6c74",
      "message": "2022-10-06T04:23:58 User John Doe retrieved rule abstraction This is test (633e5851f3ea84c37cde6c71) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:23:45.556Z",
      "id": "633e5851f3ea84c37cde6c73",
      "message": "2022-10-06T04:23:45 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is test",
        "id": "633e5851f3ea84c37cde6c71"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "created",
      "createAt": "2022-10-06T04:23:45.366Z",
      "id": "633e5851f3ea84c37cde6c72",
      "message": "2022-10-06T04:23:45 User John Doe created rule abstraction This is test (633e5851f3ea84c37cde6c71) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-06T04:22:36.119Z",
      "id": "633e580cf3ea84c37cde6c70",
      "message": "2022-10-06T04:22:36 User Alexander Admin login successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:21:05.009Z",
      "id": "633e57b1f3ea84c37cde6c6f",
      "message": "2022-10-06T04:21:05 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "policyId": {
        "name": "policy 01",
        "id": "6336da23db363674166bdbb0"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "updated",
      "createAt": "2022-10-06T04:21:04.827Z",
      "id": "633e57b0f3ea84c37cde6c6e",
      "message": "2022-10-06T04:21:04 User John Doe updated policy policy 01 (6336da23db363674166bdbb0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:20:33.178Z",
      "id": "633e5791f3ea84c37cde6c6d",
      "message": "2022-10-06T04:20:33 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:20:04.154Z",
      "id": "633e5774f3ea84c37cde6c6c",
      "message": "2022-10-06T04:20:04 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-06T04:19:53.346Z",
      "id": "633e5769f3ea84c37cde6c6b",
      "message": "2022-10-06T04:19:53 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-06T04:04:33.637Z",
      "id": "633e53d13997be225c3cd14c",
      "message": "2022-10-06T04:04:33 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-06T04:04:28.352Z",
      "id": "633e53cc3997be225c3cd14b",
      "message": "2022-10-06T04:04:28 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-06T04:04:23.292Z",
      "id": "633e53c73997be225c3cd14a",
      "message": "2022-10-06T04:04:23 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 hours ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T13:00:54.565Z",
      "id": "633d80069ef71d58767f2906",
      "message": "2022-10-05T13:00:54 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T13:00:37.746Z",
      "id": "633d7ff59ef71d58767f2905",
      "message": "2022-10-05T13:00:37 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T13:00:05.910Z",
      "id": "633d7fd59ef71d58767f2904",
      "message": "2022-10-05T13:00:05 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T13:00:01.446Z",
      "id": "633d7fd19ef71d58767f2903",
      "message": "2022-10-05T13:00:01 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T12:59:54.811Z",
      "id": "633d7fca9ef71d58767f2902",
      "message": "2022-10-05T12:59:54 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T12:59:46.763Z",
      "id": "633d7fc29ef71d58767f2901",
      "message": "2022-10-05T12:59:46 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:59:39.079Z",
      "id": "633d7fbb9ef71d58767f2900",
      "message": "2022-10-05T12:59:39 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-05T12:53:17.707Z",
      "id": "633d7e3da0de184c3e93dde0",
      "message": "2022-10-05T12:53:17 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 days ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-05T12:53:11.355Z",
      "id": "633d7e37a0de184c3e93dddf",
      "message": "2022-10-05T12:53:11 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "logout",
      "createAt": "2022-10-05T12:50:50.502Z",
      "id": "633d7daa19d6e0462de9ff33",
      "message": "2022-10-05T12:50:50 User John Doe logout successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-05T12:48:43.988Z",
      "id": "633d7d2be7d75e41c3c8c208",
      "message": "2022-10-05T12:48:43 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 days ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-05T12:48:40.511Z",
      "id": "633d7d28e7d75e41c3c8c207",
      "message": "2022-10-05T12:48:40 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T12:29:35.167Z",
      "id": "633d78afea9c7af5bd4e6a9b",
      "message": "2022-10-05T12:29:35 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:29:32.695Z",
      "id": "633d78acea9c7af5bd4e6a9a",
      "message": "2022-10-05T12:29:32 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:29:28.057Z",
      "id": "633d78a8ea9c7af5bd4e6a99",
      "message": "2022-10-05T12:29:28 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T12:26:04.165Z",
      "id": "633d77dcea9c7af5bd4e6a98",
      "message": "2022-10-05T12:26:04 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T12:25:29.427Z",
      "id": "633d77b9ea9c7af5bd4e6a97",
      "message": "2022-10-05T12:25:29 User Alexander Admin retrieved all user data successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "retrieved",
      "createAt": "2022-10-05T12:21:21.599Z",
      "id": "633d76c1ea9c7af5bd4e6a96",
      "message": "2022-10-05T12:21:21 User John Doe retrieved user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T12:21:17.115Z",
      "id": "633d76bdea9c7af5bd4e6a95",
      "message": "2022-10-05T12:21:17 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:20:40.927Z",
      "id": "633d7698ea9c7af5bd4e6a94",
      "message": "2022-10-05T12:20:40 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "policyId": {
        "name": "policy test 01",
        "id": "633d7698ea9c7af5bd4e6a92"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "created",
      "createAt": "2022-10-05T12:20:40.766Z",
      "id": "633d7698ea9c7af5bd4e6a93",
      "message": "2022-10-05T12:20:40 User John Doe created policy policy test 01 (633d7698ea9c7af5bd4e6a92) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:20:31.571Z",
      "id": "633d768fea9c7af5bd4e6a91",
      "message": "2022-10-05T12:20:31 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:20:27.943Z",
      "id": "633d768bea9c7af5bd4e6a90",
      "message": "2022-10-05T12:20:27 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T12:20:26.965Z",
      "id": "633d768aea9c7af5bd4e6a8f",
      "message": "2022-10-05T12:20:26 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "logout",
      "createAt": "2022-10-05T12:20:16.156Z",
      "id": "633d7680ea9c7af5bd4e6a8e",
      "message": "2022-10-05T12:20:16 User John Doe logout successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:20:10.406Z",
      "id": "633d767aea9c7af5bd4e6a8d",
      "message": "2022-10-05T12:20:10 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T12:20:02.982Z",
      "id": "633d7672ea9c7af5bd4e6a8c",
      "message": "2022-10-05T12:20:02 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:19:59.956Z",
      "id": "633d766fea9c7af5bd4e6a8b",
      "message": "2022-10-05T12:19:59 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T12:19:56.987Z",
      "id": "633d766cea9c7af5bd4e6a8a",
      "message": "2022-10-05T12:19:56 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T12:18:46.328Z",
      "id": "633d7626ea9c7af5bd4e6a89",
      "message": "2022-10-05T12:18:46 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T12:18:37.390Z",
      "id": "633d761dea9c7af5bd4e6a88",
      "message": "2022-10-05T12:18:37 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T12:02:51.066Z",
      "id": "633d726bd2e116ce36349787",
      "message": "2022-10-05T12:02:51 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T11:56:47.776Z",
      "id": "633d70ff5556abc154d5382e",
      "message": "2022-10-05T11:56:47 User Alexander Admin login successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:33:25.084Z",
      "id": "633d6b85cfe69186c6bb0524",
      "message": "2022-10-05T11:33:25 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:33:21.184Z",
      "id": "633d6b81cfe69186c6bb0523",
      "message": "2022-10-05T11:33:21 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T11:33:11.878Z",
      "id": "633d6b77cfe69186c6bb0522",
      "message": "2022-10-05T11:33:11 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:23:24.648Z",
      "id": "633d692c83f84e683c2caed1",
      "message": "2022-10-05T11:23:24 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:23:20.587Z",
      "id": "633d692883f84e683c2caed0",
      "message": "2022-10-05T11:23:20 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:23:20.394Z",
      "id": "633d692883f84e683c2caecf",
      "message": "2022-10-05T11:23:20 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:22:57.408Z",
      "id": "633d691183f84e683c2caece",
      "message": "2022-10-05T11:22:57 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:22:46.529Z",
      "id": "633d690683f84e683c2caecd",
      "message": "2022-10-05T11:22:46 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:22:46.306Z",
      "id": "633d690683f84e683c2caecc",
      "message": "2022-10-05T11:22:46 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:22:14.012Z",
      "id": "633d68e683f84e683c2caecb",
      "message": "2022-10-05T11:22:14 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:22:07.589Z",
      "id": "633d68df83f84e683c2caeca",
      "message": "2022-10-05T11:22:07 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:21:51.436Z",
      "id": "633d68cf83f84e683c2caec9",
      "message": "2022-10-05T11:21:51 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:21:11.321Z",
      "id": "633d68a783f84e683c2caec8",
      "message": "2022-10-05T11:21:11 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:21:11.114Z",
      "id": "633d68a783f84e683c2caec7",
      "message": "2022-10-05T11:21:11 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:20:51.482Z",
      "id": "633d689383f84e683c2caec6",
      "message": "2022-10-05T11:20:51 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:16:55.885Z",
      "id": "633d67a71d32fb5d03e601c0",
      "message": "2022-10-05T11:16:55 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:16:39.629Z",
      "id": "633d67971d32fb5d03e601bf",
      "message": "2022-10-05T11:16:39 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:16:39.427Z",
      "id": "633d67971d32fb5d03e601be",
      "message": "2022-10-05T11:16:39 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:16:06.585Z",
      "id": "633d67767f16965ad5598c25",
      "message": "2022-10-05T11:16:06 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:15:24.877Z",
      "id": "633d674c26d9b55a5368e636",
      "message": "2022-10-05T11:15:24 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:14:25.632Z",
      "id": "633d67111161ba543c71b8e3",
      "message": "2022-10-05T11:14:25 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:14:25.337Z",
      "id": "633d67111161ba543c71b8e2",
      "message": "2022-10-05T11:14:25 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:13:57.345Z",
      "id": "633d66f51161ba543c71b8e1",
      "message": "2022-10-05T11:13:57 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "Hello world 101",
        "id": "6336eb90198dfaaa4a78f4ad"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:10:18.012Z",
      "id": "633d661a69b0574b4e6513bc",
      "message": "2022-10-05T11:10:18 User Alexander Admin retrieved rule abstraction Hello world 101 (6336eb90198dfaaa4a78f4ad) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:09:03.053Z",
      "id": "633d65cf9e6da548477ccf74",
      "message": "2022-10-05T11:09:03 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:08:05.248Z",
      "id": "633d6595e3da3a47be00187a",
      "message": "2022-10-05T11:08:05 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:07:19.929Z",
      "id": "633d65677753aa453fd81c32",
      "message": "2022-10-05T11:07:19 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:06:57.980Z",
      "id": "633d65519de582430afa5a8a",
      "message": "2022-10-05T11:06:57 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T11:06:57.816Z",
      "id": "633d65519de582430afa5a89",
      "message": "2022-10-05T11:06:57 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:06:37.655Z",
      "id": "633d653d9de582430afa5a88",
      "message": "2022-10-05T11:06:37 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:06:31.228Z",
      "id": "633d65379de582430afa5a87",
      "message": "2022-10-05T11:06:31 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T11:06:15.175Z",
      "id": "633d652774a1ec4299fd6f25",
      "message": "2022-10-05T11:06:15 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:05:12.416Z",
      "id": "633d64e8bc65883f7e6e9bca",
      "message": "2022-10-05T11:05:12 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T11:05:05.245Z",
      "id": "633d64e1bc65883f7e6e9bc9",
      "message": "2022-10-05T11:05:05 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:04:08.713Z",
      "id": "633d64a8ba27f53c4a4bb150",
      "message": "2022-10-05T11:04:08 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:03:25.708Z",
      "id": "633d647d6ce9083a8cff6923",
      "message": "2022-10-05T11:03:25 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:03:14.286Z",
      "id": "633d64726ce9083a8cff6922",
      "message": "2022-10-05T11:03:14 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:02:50.240Z",
      "id": "633d645aab1af336b1d88e8b",
      "message": "2022-10-05T11:02:50 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:02:04.737Z",
      "id": "633d642cab1af336b1d88e8a",
      "message": "2022-10-05T11:02:04 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "policyId": {
        "name": "policy  test21",
        "id": "633d642cab1af336b1d88e88"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "created",
      "createAt": "2022-10-05T11:02:04.549Z",
      "id": "633d642cab1af336b1d88e89",
      "message": "2022-10-05T11:02:04 User Alexander Admin created policy policy  test21 (633d642cab1af336b1d88e88) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T11:01:38.678Z",
      "id": "633d6412ab1af336b1d88e87",
      "message": "2022-10-05T11:01:38 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T11:01:38.057Z",
      "id": "633d6412ab1af336b1d88e86",
      "message": "2022-10-05T11:01:38 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:57:56.899Z",
      "id": "633d63341854102c7d7bc8ee",
      "message": "2022-10-05T10:57:56 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:57:30.322Z",
      "id": "633d631a1854102c7d7bc8ed",
      "message": "2022-10-05T10:57:30 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "locationId": {
        "name": "UDP_10",
        "id": "633d261aaa51f4cc7b7aa8bd"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:56:55.363Z",
      "id": "633d62f7c159792b074442fa",
      "message": "2022-10-05T10:56:55 User John Doe retrieved location abstraction UDP_10 (633d261aaa51f4cc7b7aa8bd) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:56:25.231Z",
      "id": "633d62d934d9ba2504b9c72b",
      "message": "2022-10-05T10:56:25 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:54:07.554Z",
      "id": "633d624f2a804523b2d4b5eb",
      "message": "2022-10-05T10:54:07 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:51:00.911Z",
      "id": "633d619452e64513da72a166",
      "message": "2022-10-05T10:51:00 User Alexander Admin retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:50:13.952Z",
      "id": "633d616552e64513da72a165",
      "message": "2022-10-05T10:50:13 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T10:50:13.247Z",
      "id": "633d616552e64513da72a164",
      "message": "2022-10-05T10:50:13 User Alexander Admin updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:49:13.421Z",
      "id": "633d612952e64513da72a163",
      "message": "2022-10-05T10:49:13 User Alexander Admin retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:48:54.231Z",
      "id": "633d611652e64513da72a162",
      "message": "2022-10-05T10:48:54 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:48:30.957Z",
      "id": "633d60fe52e64513da72a161",
      "message": "2022-10-05T10:48:30 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:48:26.867Z",
      "id": "633d60fa52e64513da72a160",
      "message": "2022-10-05T10:48:26 User Alexander Admin login successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:48:24.858Z",
      "id": "633d60f852e64513da72a15f",
      "message": "2022-10-05T10:48:24 User Alexander Admin login successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:47:56.215Z",
      "id": "633d60dc52e64513da72a15e",
      "message": "2022-10-05T10:47:56 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:47:03.948Z",
      "id": "633d60a7e58ac61276e86c8a",
      "message": "2022-10-05T10:47:03 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:47:00.067Z",
      "id": "633d60a4e58ac61276e86c89",
      "message": "2022-10-05T10:47:00 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:46:54.450Z",
      "id": "633d609ee58ac61276e86c88",
      "message": "2022-10-05T10:46:54 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:42:00.992Z",
      "id": "633d5f78809f8b04adc04cf4",
      "message": "2022-10-05T10:42:00 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:41:52.631Z",
      "id": "633d5f70809f8b04adc04cf3",
      "message": "2022-10-05T10:41:52 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:40:38.590Z",
      "id": "633d5f26009f5c013b8dd814",
      "message": "2022-10-05T10:40:38 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:40:01.848Z",
      "id": "633d5f0104f0348637cda298",
      "message": "2022-10-05T10:40:01 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:20:11.688Z",
      "id": "633d5a5b24990e1b48a70707",
      "message": "2022-10-05T10:20:11 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:19:08.588Z",
      "id": "633d5a1c24990e1b48a70706",
      "message": "2022-10-05T10:19:08 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:19:03.818Z",
      "id": "633d5a1724990e1b48a70705",
      "message": "2022-10-05T10:19:03 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "logout",
      "createAt": "2022-10-05T10:16:49.781Z",
      "id": "633d599124990e1b48a70704",
      "message": "2022-10-05T10:16:49 User John Doe logout successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "deleted",
      "createAt": "2022-10-05T10:16:36.509Z",
      "id": "633d598424990e1b48a70703",
      "message": "2022-10-05T10:16:36 User John Doe deleted user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:16:32.040Z",
      "id": "633d598024990e1b48a70702",
      "message": "2022-10-05T10:16:32 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:16:12.965Z",
      "id": "633d596c24990e1b48a70701",
      "message": "2022-10-05T10:16:12 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:16:05.967Z",
      "id": "633d596524990e1b48a70700",
      "message": "2022-10-05T10:16:05 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:14:12.872Z",
      "id": "633d58f424990e1b48a706fa",
      "message": "2022-10-05T10:14:12 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "logout",
      "createAt": "2022-10-05T10:14:11.613Z",
      "id": "633d58f324990e1b48a706f9",
      "message": "2022-10-05T10:14:11 User John Doe logout successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:14:05.531Z",
      "id": "633d58ed24990e1b48a706f8",
      "message": "2022-10-05T10:14:05 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:13:51.487Z",
      "id": "633d58df24990e1b48a706f7",
      "message": "2022-10-05T10:13:51 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "created",
      "createAt": "2022-10-05T10:13:01.056Z",
      "id": "633d58ad24990e1b48a706f4",
      "message": "2022-10-05T10:13:01 User Alexander Admin created user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:12:57.198Z",
      "id": "633d58a924990e1b48a706f3",
      "message": "2022-10-05T10:12:57 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:12:27.726Z",
      "id": "633d588b24990e1b48a706f2",
      "message": "2022-10-05T10:12:27 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:12:19.954Z",
      "id": "633d588324990e1b48a706f1",
      "message": "2022-10-05T10:12:19 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T10:12:18.082Z",
      "id": "633d588224990e1b48a706f0",
      "message": "2022-10-05T10:12:18 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:12:10.008Z",
      "id": "633d587a24990e1b48a706ef",
      "message": "2022-10-05T10:12:10 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:11:18.701Z",
      "id": "633d584624990e1b48a706ee",
      "message": "2022-10-05T10:11:18 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T10:11:04.346Z",
      "id": "633d583824990e1b48a706ed",
      "message": "2022-10-05T10:11:04 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:10:29.608Z",
      "id": "633d581524990e1b48a706ec",
      "message": "2022-10-05T10:10:29 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:09:08.591Z",
      "id": "633d57c424990e1b48a706eb",
      "message": "2022-10-05T10:09:08 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T10:09:02.901Z",
      "id": "633d57be24990e1b48a706ea",
      "message": "2022-10-05T10:09:02 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:07:27.960Z",
      "id": "633d575f24990e1b48a706e9",
      "message": "2022-10-05T10:07:27 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:02:49.649Z",
      "id": "633d564924990e1b48a706e8",
      "message": "2022-10-05T10:02:49 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "logout",
      "createAt": "2022-10-05T10:02:47.241Z",
      "id": "633d564724990e1b48a706e7",
      "message": "2022-10-05T10:02:47 User John Doe logout successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T10:02:40.230Z",
      "id": "633d564024990e1b48a706e6",
      "message": "2022-10-05T10:02:40 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:57:37.673Z",
      "id": "633d551124990e1b48a706e5",
      "message": "2022-10-05T09:57:37 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:57:15.067Z",
      "id": "633d54fb24990e1b48a706e4",
      "message": "2022-10-05T09:57:15 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "deleted",
      "createAt": "2022-10-05T09:56:36.890Z",
      "id": "633d54d424990e1b48a706e3",
      "message": "2022-10-05T09:56:36 User John Doe deleted user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:56:23.841Z",
      "id": "633d54c724990e1b48a706e2",
      "message": "2022-10-05T09:56:23 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:52:40.661Z",
      "id": "633d53e89c8a83bc5196fd33",
      "message": "2022-10-05T09:52:40 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:52:11.041Z",
      "id": "633d53cb9c8a83bc5196fd31",
      "message": "2022-10-05T09:52:11 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:51:27.946Z",
      "id": "633d539f9c8a83bc5196fd2f",
      "message": "2022-10-05T09:51:27 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:49:13.786Z",
      "id": "633d53199c8a83bc5196fd2b",
      "message": "2022-10-05T09:49:13 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:46:26.459Z",
      "id": "633d52729c8a83bc5196fd29",
      "message": "2022-10-05T09:46:26 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:45:17.612Z",
      "id": "633d522d9c8a83bc5196fd28",
      "message": "2022-10-05T09:45:17 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:45:13.697Z",
      "id": "633d52299c8a83bc5196fd27",
      "message": "2022-10-05T09:45:13 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:45:03.701Z",
      "id": "633d521f9c8a83bc5196fd26",
      "message": "2022-10-05T09:45:03 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:44:56.105Z",
      "id": "633d52189c8a83bc5196fd25",
      "message": "2022-10-05T09:44:56 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:44:07.124Z",
      "id": "633d51e79c8a83bc5196fd23",
      "message": "2022-10-05T09:44:07 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:44:01.205Z",
      "id": "633d51e19c8a83bc5196fd22",
      "message": "2022-10-05T09:44:01 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T09:44:01.038Z",
      "id": "633d51e19c8a83bc5196fd21",
      "message": "2022-10-05T09:44:01 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:43:24.719Z",
      "id": "633d51bc9c8a83bc5196fd1e",
      "message": "2022-10-05T09:43:24 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:43:20.245Z",
      "id": "633d51b89c8a83bc5196fd1d",
      "message": "2022-10-05T09:43:20 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:43:18.348Z",
      "id": "633d51b69c8a83bc5196fd1c",
      "message": "2022-10-05T09:43:18 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "created",
      "createAt": "2022-10-05T09:42:41.815Z",
      "id": "633d51919c8a83bc5196fd1a",
      "message": "2022-10-05T09:42:41 User Alexander Admin created user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:41:58.157Z",
      "id": "633d51669c8a83bc5196fd19",
      "message": "2022-10-05T09:41:58 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:40:16.177Z",
      "id": "633d51009c8a83bc5196fd18",
      "message": "2022-10-05T09:40:16 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "deleted",
      "createAt": "2022-10-05T09:40:16.065Z",
      "id": "633d51009c8a83bc5196fd17",
      "message": "2022-10-05T09:40:16 User John Doe deleted user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:38:44.553Z",
      "id": "633d50a49c8a83bc5196fd15",
      "message": "2022-10-05T09:38:44 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "nccId": {
        "name": "Diamond ncc 011",
        "id": "6336d9d6db363674166bdbaf"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "ncc",
      "action": "retrieved",
      "createAt": "2022-10-05T09:38:36.228Z",
      "id": "633d509c9c8a83bc5196fd14",
      "message": "2022-10-05T09:38:36 User John Doe retrieved ncc Diamond ncc 011 (6336d9d6db363674166bdbaf) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "created",
      "createAt": "2022-10-05T09:38:17.489Z",
      "id": "633d50899c8a83bc5196fd12",
      "message": "2022-10-05T09:38:17 User Alexander Admin created user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:37:28.633Z",
      "id": "633d50589c8a83bc5196fd11",
      "message": "2022-10-05T09:37:28 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "retrieved",
      "createAt": "2022-10-05T09:37:15.798Z",
      "id": "633d504b9c8a83bc5196fd10",
      "message": "2022-10-05T09:37:15 User Alexander Admin retrieved user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:36:55.734Z",
      "id": "633d50379c8a83bc5196fd0f",
      "message": "2022-10-05T09:36:55 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "deleted",
      "createAt": "2022-10-05T09:36:55.622Z",
      "id": "633d50379c8a83bc5196fd0e",
      "message": "2022-10-05T09:36:55 User John Doe deleted user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:36:39.649Z",
      "id": "633d50279c8a83bc5196fd0c",
      "message": "2022-10-05T09:36:39 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:35:56.217Z",
      "id": "633d4ffc9c8a83bc5196fd0a",
      "message": "2022-10-05T09:35:56 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:35:24.244Z",
      "id": "633d4fdc9c8a83bc5196fd07",
      "message": "2022-10-05T09:35:24 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:35:05.125Z",
      "id": "633d4fc99c8a83bc5196fd05",
      "message": "2022-10-05T09:35:05 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:34:23.350Z",
      "id": "633d4f9f9c8a83bc5196fd03",
      "message": "2022-10-05T09:34:23 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "user",
      "action": "created",
      "createAt": "2022-10-05T09:33:01.841Z",
      "id": "633d4f4d9c8a83bc5196fd00",
      "message": "2022-10-05T09:33:01 User Alexander Admin created user (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:32:10.371Z",
      "id": "633d4f1a9c8a83bc5196fcff",
      "message": "2022-10-05T09:32:10 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "retrieved",
      "createAt": "2022-10-05T09:31:11.943Z",
      "id": "633d4edf9c8a83bc5196fcfe",
      "message": "2022-10-05T09:31:11 User John Doe retrieved user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:31:07.609Z",
      "id": "633d4edb9c8a83bc5196fcfd",
      "message": "2022-10-05T09:31:07 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:30:48.606Z",
      "id": "633d4ec89c8a83bc5196fcfc",
      "message": "2022-10-05T09:30:48 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:30:09.599Z",
      "id": "633d4ea19c8a83bc5196fcfb",
      "message": "2022-10-05T09:30:09 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "deleted",
      "createAt": "2022-10-05T09:29:27.755Z",
      "id": "633d4e779c8a83bc5196fcfa",
      "message": "2022-10-05T09:29:27 User John Doe deleted service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:29:22.749Z",
      "id": "633d4e729c8a83bc5196fcf9",
      "message": "2022-10-05T09:29:22 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:29:19.401Z",
      "id": "633d4e6f9c8a83bc5196fcf8",
      "message": "2022-10-05T09:29:19 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:29:19.004Z",
      "id": "633d4e6f9c8a83bc5196fcf7",
      "message": "2022-10-05T09:29:19 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:28:52.661Z",
      "id": "633d4e549c8a83bc5196fcf6",
      "message": "2022-10-05T09:28:52 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:28:52.458Z",
      "id": "633d4e549c8a83bc5196fcf5",
      "message": "2022-10-05T09:28:52 User John Doe created service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:28:33.214Z",
      "id": "633d4e419c8a83bc5196fcf3",
      "message": "2022-10-05T09:28:33 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:28:12.545Z",
      "id": "633d4e2c9c8a83bc5196fcf2",
      "message": "2022-10-05T09:28:12 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:28:09.592Z",
      "id": "633d4e299c8a83bc5196fcf1",
      "message": "2022-10-05T09:28:09 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "deleted",
      "createAt": "2022-10-05T09:26:59.450Z",
      "id": "633d4de39c8a83bc5196fcf0",
      "message": "2022-10-05T09:26:59 User John Doe deleted service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:26:50.542Z",
      "id": "633d4dda9c8a83bc5196fcef",
      "message": "2022-10-05T09:26:50 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:26:47.823Z",
      "id": "633d4dd79c8a83bc5196fcee",
      "message": "2022-10-05T09:26:47 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:26:41.726Z",
      "id": "633d4dd19c8a83bc5196fced",
      "message": "2022-10-05T09:26:41 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:26:13.304Z",
      "id": "633d4db59c8a83bc5196fcec",
      "message": "2022-10-05T09:26:13 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:26:13.174Z",
      "id": "633d4db59c8a83bc5196fceb",
      "message": "2022-10-05T09:26:13 User John Doe created service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:25:52.344Z",
      "id": "633d4da09c8a83bc5196fce9",
      "message": "2022-10-05T09:25:52 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:25:36.964Z",
      "id": "633d4d909c8a83bc5196fce8",
      "message": "2022-10-05T09:25:36 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:25:33.449Z",
      "id": "633d4d8d9c8a83bc5196fce7",
      "message": "2022-10-05T09:25:33 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:24:23.793Z",
      "id": "633d4d479c8a83bc5196fce6",
      "message": "2022-10-05T09:24:23 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "deleted",
      "createAt": "2022-10-05T09:23:46.182Z",
      "id": "633d4d229c8a83bc5196fce5",
      "message": "2022-10-05T09:23:46 User John Doe deleted location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:23:32.520Z",
      "id": "633d4d149c8a83bc5196fce3",
      "message": "2022-10-05T09:23:32 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:22:32.632Z",
      "id": "633d4cd89c8a83bc5196fce2",
      "message": "2022-10-05T09:22:32 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "updated",
      "createAt": "2022-10-05T09:22:32.490Z",
      "id": "633d4cd89c8a83bc5196fce1",
      "message": "2022-10-05T09:22:32 User John Doe updated location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:22:28.602Z",
      "id": "633d4cd49c8a83bc5196fcdf",
      "message": "2022-10-05T09:22:28 User John Doe retrieved location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:22:22.539Z",
      "id": "633d4cce9c8a83bc5196fcde",
      "message": "2022-10-05T09:22:22 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:21:55.333Z",
      "id": "633d4cb39c8a83bc5196fcdd",
      "message": "2022-10-05T09:21:55 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:21:55.194Z",
      "id": "633d4cb39c8a83bc5196fcdc",
      "message": "2022-10-05T09:21:55 User John Doe created location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:21:05.016Z",
      "id": "633d4c819c8a83bc5196fcda",
      "message": "2022-10-05T09:21:05 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:20:24.733Z",
      "id": "633d4c589c8a83bc5196fcd9",
      "message": "2022-10-05T09:20:24 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "serviceId": {
        "name": "hello",
        "id": "633d4c589c8a83bc5196fcd7"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:20:24.587Z",
      "id": "633d4c589c8a83bc5196fcd8",
      "message": "2022-10-05T09:20:24 User John Doe created service abstraction hello (633d4c589c8a83bc5196fcd7) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:20:01.333Z",
      "id": "633d4c419c8a83bc5196fcd6",
      "message": "2022-10-05T09:20:01 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:19:57.809Z",
      "id": "633d4c3d9c8a83bc5196fcd5",
      "message": "2022-10-05T09:19:57 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:19:25.674Z",
      "id": "633d4c1d9c8a83bc5196fcd4",
      "message": "2022-10-05T09:19:25 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:18:57.092Z",
      "id": "633d4c019c8a83bc5196fcd3",
      "message": "2022-10-05T09:18:57 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:17:18.417Z",
      "id": "633d4b9e9c8a83bc5196fcd2",
      "message": "2022-10-05T09:17:18 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:17:11.675Z",
      "id": "633d4b979c8a83bc5196fcd1",
      "message": "2022-10-05T09:17:11 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "deleted",
      "createAt": "2022-10-05T09:17:08.308Z",
      "id": "633d4b949c8a83bc5196fcd0",
      "message": "2022-10-05T09:17:08 User John Doe deleted location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:16:54.677Z",
      "id": "633d4b869c8a83bc5196fcce",
      "message": "2022-10-05T09:16:54 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:16:51.144Z",
      "id": "633d4b839c8a83bc5196fccd",
      "message": "2022-10-05T09:16:51 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "user",
      "action": "deleted",
      "createAt": "2022-10-05T09:16:50.528Z",
      "id": "633d4b829c8a83bc5196fccc",
      "message": "2022-10-05T09:16:50 User John Doe deleted user (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:16:42.480Z",
      "id": "633d4b7a9c8a83bc5196fccb",
      "message": "2022-10-05T09:16:42 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "updated",
      "createAt": "2022-10-05T09:16:03.633Z",
      "id": "633d4b539c8a83bc5196fcca",
      "message": "2022-10-05T09:16:03 User John Doe updated location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:15:43.908Z",
      "id": "633d4b3f9c8a83bc5196fcc8",
      "message": "2022-10-05T09:15:43 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:15:21.703Z",
      "id": "633d4b299c8a83bc5196fcc7",
      "message": "2022-10-05T09:15:21 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:15:16.260Z",
      "id": "633d4b249c8a83bc5196fcc6",
      "message": "2022-10-05T09:15:16 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "updated",
      "createAt": "2022-10-05T09:15:15.843Z",
      "id": "633d4b239c8a83bc5196fcc5",
      "message": "2022-10-05T09:15:15 User John Doe updated rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "updated",
      "createAt": "2022-10-05T09:15:12.070Z",
      "id": "633d4b209c8a83bc5196fcc4",
      "message": "2022-10-05T09:15:12 User John Doe updated location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:15:01.064Z",
      "id": "633d4b159c8a83bc5196fcc2",
      "message": "2022-10-05T09:15:01 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T09:14:56.471Z",
      "id": "633d4b109c8a83bc5196fcc1",
      "message": "2022-10-05T09:14:56 User John Doe retrieved rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:14:43.531Z",
      "id": "633d4b039c8a83bc5196fcc0",
      "message": "2022-10-05T09:14:43 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "ruleId": {
        "comment": "This is comment",
        "id": "633d4b039c8a83bc5196fcbe"
      },
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "rule abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:14:43.343Z",
      "id": "633d4b039c8a83bc5196fcbf",
      "message": "2022-10-05T09:14:43 User John Doe created rule abstraction This is comment (633d4b039c8a83bc5196fcbe) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:14:20.634Z",
      "id": "633d4aec9c8a83bc5196fcbd",
      "message": "2022-10-05T09:14:20 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "location abstraction",
      "action": "created",
      "createAt": "2022-10-05T09:14:20.480Z",
      "id": "633d4aec9c8a83bc5196fcbc",
      "message": "2022-10-05T09:14:20 User John Doe created location abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:13:35.343Z",
      "id": "633d4abf9c8a83bc5196fcba",
      "message": "2022-10-05T09:13:35 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:13:18.876Z",
      "id": "633d4aae9c8a83bc5196fcb9",
      "message": "2022-10-05T09:13:18 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:13:12.363Z",
      "id": "633d4aa89c8a83bc5196fcb8",
      "message": "2022-10-05T09:13:12 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:12:48.522Z",
      "id": "633d4a909c8a83bc5196fcb7",
      "message": "2022-10-05T09:12:48 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:12:44.083Z",
      "id": "633d4a8c9c8a83bc5196fcb6",
      "message": "2022-10-05T09:12:44 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:12:36.790Z",
      "id": "633d4a849c8a83bc5196fcb5",
      "message": "2022-10-05T09:12:36 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T09:12:19.517Z",
      "id": "633d4a739c8a83bc5196fcb4",
      "message": "2022-10-05T09:12:19 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "all user data successfully",
      "action": "retrieved",
      "createAt": "2022-10-05T09:12:16.253Z",
      "id": "633d4a709c8a83bc5196fcb3",
      "message": "2022-10-05T09:12:16 User John Doe retrieved all user data successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:12:02.868Z",
      "id": "633d4a629c8a83bc5196fcb2",
      "message": "2022-10-05T09:12:02 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T09:10:36.230Z",
      "id": "633d4a0ce74388af3fe47ec4",
      "message": "2022-10-05T09:10:36 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T08:47:54.046Z",
      "id": "633d44ba98cd7b82a535f994",
      "message": "2022-10-05T08:47:54 User John Doe login successfully (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "failed",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "invalid password",
      "action": "login",
      "createAt": "2022-10-05T08:47:42.438Z",
      "id": "633d44ae98cd7b82a535f993",
      "message": "2022-10-05T08:47:42 User John Doe login invalid password (630625b523903e24988e69a0) - failed",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T08:37:53.827Z",
      "id": "633d42615d06b1654265c2fd",
      "message": "2022-10-05T08:37:53 User Alexander Admin retrieved policy (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "631711f45c582e2478b92097",
        "username": "Alexander Admin"
      },
      "actionType": "successfully",
      "action": "login",
      "createAt": "2022-10-05T08:37:51.306Z",
      "id": "633d425f5d06b1654265c2fc",
      "message": "2022-10-05T08:37:51 User Alexander Admin login successfully (631711f45c582e2478b92097) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "policy",
      "action": "retrieved",
      "createAt": "2022-10-05T07:31:26.810Z",
      "id": "633d32cefbbe2443e4d6c835",
      "message": "2022-10-05T07:31:26 User John Doe retrieved policy (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T07:31:08.931Z",
      "id": "633d32bcfbbe2443e4d6c834",
      "message": "2022-10-05T07:31:08 User John Doe retrieved service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
    {
      "status": "success",
      "userId": {
        "id": "630625b523903e24988e69a0",
        "username": "John Doe"
      },
      "actionType": "service abstraction",
      "action": "retrieved",
      "createAt": "2022-10-05T07:30:49.252Z",
      "id": "633d32a9fbbe2443e4d6c833",
      "message": "2022-10-05T07:30:49 User John Doe retrieved service abstraction (630625b523903e24988e69a0) - success",
      "timeSpan": "1 days ago"
    },
  ];
  constructor() {
    this.getNextItems();
  }

  ngOnInit(): void {
    this.categoriesSubject.next(this.categories);
    this.categories$.subscribe((res) => {
      this.datas = res;
    });
  }

  onScrollingFinished() {
    this.loadMore();
    this.scrollingFinished.emit();
  }

  loadMore(): void {
    if (this.getNextItems()) {
      this.categoriesSubject.next(this.categories);
    }
  }

  getNextItems(): boolean {
    if (this.categories.length >= this.allCategories.length) {
      return false;
    }
    const remainingLength = Math.min(30, this.allCategories.length - this.categories.length);
    this.categories.push(...this.allCategories.slice(this.categories.length, this.categories.length + remainingLength));
    return true;
  }
}
