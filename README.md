This is a [Next.js](https://nextjs.org/) project [`Air Quality`](https://air-quality.tes-t.cz/).

## Getting Started

First, run the build and then start:

```bash
npm install

npm run build

npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API endpoints

- **POST** požadavky předávají parametry v JSON formátu v **Body**, většinou jde o data z formulářů
- **GET** požadavky předávají parametry, které jsou součástí URL (route)

| URI                               | METODA | VSTUP                                                               | VÝSTUP                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------- | ------ | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **USER**                          |
| user/sign-in                      | POST   | `email`, `password`                                                 | `session_id` - v HEADER, `user_id`, `email` `in_app_notification`, `email_notification`                                                                                                                                                                                                                                                 |
| user/sign-out                     | POST   | `session_id` ,`user_id`                                             | `user_id`, `email`                                                                                                                                                                                                                                                                                                                      |
| user/update-notification-settings | POST   | `session_id`,`user_id`, `in_app_notification`, `email_notification` | `user_id`, `in_app_notification`, `email_notification`                                                                                                                                                                                                                                                                                  |
| user/update-password              | POST   | `session_id`, `user_id`, `new_password`                             | `user_id`, `email`                                                                                                                                                                                                                                                                                                                      |
| **DEVICE**                        |
| device/get                        | GET    | `session_id`, `user_id`, `device_id`                                | `device_id`, `name`, `location`, `status`                                                                                                                                                                                                                                                                                               |
| device/update                     | POST   | `session_id`, `user_id`, `device_id`                                | `device_id`, `name`, `location`, `status`                                                                                                                                                                                                                                                                                               |
| device/get-data                   | GET    | `session_id`, `user_id`, `device_id`, `date`                        | `data[] {` `device_id`, `date`, `AQI[] {timestamp, value}`, `CO2_data[] { timestamp, value }`, `VOC_data[] { timestamp, value }`, `NOX_data[] { timestamp, value }`, `temperature_data[] { timestamp, value }`,`humidity_data[] { timestamp, value }`,` battery_data[] { timestamp, value }`,`position_data[] { timestamp, value }` `}` |
| device/add                        | POST   | `session_id`, `user_id`, `name`, `location`                         | `device_id`, `name`, `location`, `status`                                                                                                                                                                                                                                                                                               |
| device/delete                     | POST   | `session_id`, `user_id`, `device_id`                                | `device_id`, `name`, `location`, `status`                                                                                                                                                                                                                                                                                               |
