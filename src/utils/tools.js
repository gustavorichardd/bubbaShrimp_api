function getFormatDate(value) {

   if (typeof value === "string" && value.indexOf("/") !== -1) {
      const dateSplit = value.split("/")
      value = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0]
   }
   console.log(value)

   const date = new Date(value)

   const setZero = (value) => {
      return String(value).length === 1 ? "0" + value : value
   }

   const getMonth = (value) => {
      value = value + 1
      return String(value).length === 1 ? "0" + value : value
   }

   const getDate = (format = "DD/MM/YYYY HH:mm:ss") => {

      switch (format) {
         case "DD/MM":
            return setZero(date.getDate()) + "/" + getMonth(date.getMonth())
         case "DD/MM/YYYY":
            return setZero(date.getDate()) + "/" + getMonth(date.getMonth()) + "/" + date.getFullYear()
         case "YYYY-MM-DD":
            return date.getFullYear() + "-" + getMonth(date.getMonth()) + "-" + setZero(date.getDate())
         case "DD/MM/YYYY HH:mm":
            return setZero(date.getDate()) + "/" + getMonth(date.getMonth()) + "/" + date.getFullYear() + " " + setZero(date.getHours()) + ":" + setZero(date.getMinutes())
         case "YYYY-MM-DD HH:mm:ss":
            return date.getFullYear() + "-" + getMonth(date.getMonth()) + "-" + setZero(date.getDate()) + " " + setZero(date.getHours()) + ":" + setZero(date.getMinutes()) + ":" + setZero(date.getSeconds())
         default:
            return setZero(date.getDate()) + "/" + getMonth(date.getMonth()) + "/" + date.getFullYear() + " " + setZero(date.getHours()) + ":" + setZero(date.getMinutes()) + ":" + setZero(date.getSeconds())
      }
   }

   const getHour = (format = "hh:mm") => {
      if (format === "hh:mm") {
         return setZero(date.getHours()) + ":" + setZero(date.getMinutes())
      } else {
         return setZero(date.getHours()) + ":" + setZero(date.getMinutes()) + ":" + setZero(date.getSeconds())
      }
   }

   return { getDate, getHour }

}

module.exports = { getFormatDate }