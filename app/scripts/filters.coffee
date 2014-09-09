angular.module('percival')
  .filter('formatSeconds', ->
    return (seconds, _as) ->
      return moment.duration(seconds, 'seconds').as(_as)
    )
  .filter('nl2br', ->
    return (content) ->
      return (content+"").replace /\n\r|\n|\r/g, "<br/>"
    )
  .filter('formatDate', ->
    return (date, _as) ->
      return moment.utc(date).format(_as)
    )
  .filter('round', ->
    return (number, places=3) ->
      pow = Math.pow 10, places
      return (Math.round(number * pow) / pow).toFixed(places)
    )
  .filter('humanizeBoolean', ->
    return (bool) ->
      return if !!bool then "Yes" else "No"
    )
  .filter('humanizeTime', ->
    return (seconds, short=false) ->
      dur = moment.duration(seconds, 'seconds')
      time =
        years: Math.round(dur.years())
        months: Math.round(dur.months())
        days: Math.round(dur.days())
        hours: Math.round(dur.hours())
        minutes: Math.round(dur.minutes())
        seconds: Math.round(dur.seconds())

      if short
        if time.hours > 0
          return time.hours + ":" + ("00" + time.minutes).slice(-2) + ":" + ("00" + time.seconds).slice(-2)
        return time.minutes + ":" + ("00" + time.seconds).slice(-2)

      if time.years > 0
        return time.years + " years and " + time.months + " months"

      if time.months > 0
        return time.months + " months and " + time.days + " days"

      if time.days > 0
        return time.days + " days and " + time.hours + " hours"

      if time.hours > 0
        return time.hours + " hours and " + time.minutes + " minutes"

      if time.minutes > 0
        return time.minutes + " minutes and " + time.seconds + " seconds"

      if time.seconds > 0
        return time.seconds + " seconds"
  )
