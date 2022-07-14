# Resilia Notifications by [Leira C Sánchez Quiñones](https://github.com/leira-sanchez)

This application was created for a Software Engineering interview at Resilia.

It was created with `create-react-app`.

## To Run

1. `npm i`
1. `npm start`

## Notifications API

This application uses the localStorage API for simplicity and persistance.

### Payload

```
{
    title: 'title of the notification',
    date: date emitted,
    isRead: has it been read,
    userId: user it belongs to,
    id: uuid()
}
```

### Seed data:

```json
{
  "notifications": [
    {
      "title": "First notification",
      "date": "Thu Jul 14 2022 09:38:32",
      "id": 1,
      "userId": "uCQOiv"
    },
    {
      "title": "read notification",
      "date": "Wed Jul 13 2022 10:23:12",
      "isRead": true,
      "id": 2,
      "userId": "uCQOiv"
    },
    {
      "title": "NonProfit for the Profitters just raised $1M from Goldman Sachs!",
      "date": "Tue Jul 5 2022 09:38:3210",
      "isRead": true,
      "id": 3,
      "userId": "uCQOiv"
    },
    {
      "title": "This NonProfit has invited you to become a monthly donor!",
      "date": "Fri Jul 1 2022 02:38:32",
      "isRead": true,
      "id": 4,
      "userId": "uCQOiv"
    },
    {
      "title": "Fundraiser for NonProfit A is starting now!",
      "date": "Fri Jul 1 2022 07:34:10",
      "isRead": true,
      "id": 5,
      "userId": "uCQOiv"
    }
  ]
}
```

## Frontend

Uses React as the framework/library and Styled-Components for styling. All is written in `App.js` but in the real world, it would be separated by component. Each component being its own file.
