export class DateTool {
   ms: number
   private constructor(ms: number) {
      this.ms = ms
   }

   static fromNow(): DateTool {
      return new DateTool(Date.now())
   }

   static fromDate(d: Date): DateTool {
      return new DateTool(d.getTime())
   }

   appendDays(days: number): DateTool {
      this.ms = this.ms + days * 86400000
      return this
   }

   appendSeconds(seconds: number): DateTool {
      this.ms = this.ms + seconds * 1000
      return this
   }

   toDate(): Date {
      return new Date(this.ms)
   }
}
