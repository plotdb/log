require! <[@plotdb/colors]>

log = (opt={}) ->
  name = if opt.name => "[#{opt.name}]" else ''
  [<[info green]> <[warn yellow]> <[error red]>].map (n) ~>
    @[n.0] = (...args) ->
      args = ( ["#{n.0.toUpperCase![n.1]}\t: #name"] ++ args)
      console[n.0].apply console, args
  @

log.prototype = Object.create(Object.prototype) <<<
  info: (...args) ->
    args = ( ["INFO\t: #{@name}"] ++ args)
    console.info.apply console, args
  warn: (...args) ->
    args = ( ["WARN\t: #{@name}"] ++ args)
    console.warn.apply console, args
  error: (...args) ->
    args = ( ["ERROR\t: #{@name}"] ++ args)
    console.error.apply console, args

module.exports = log
