# DateTool
A typescript class tool that simplifies working with dates:

```ts
const expireAt: Date = DateTool.fromNow().appendDays(this.freeBillsDurationInDays).toDate()
```

```ts
const newExpireDate: Date = DateTool.fromDate(subscription.expireAt).appendDays(durationInDays).toDate()
```
