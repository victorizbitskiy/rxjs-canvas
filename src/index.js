import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')
const rect = canvas.getBoundingClientRect()
const scale = window.devicePixelRatio

canvas.width = rect.width * scale
canvas.height = rect.height * scale
ctx.scale(scale, scale)

const mouseMove$ = fromEvent(canvas, 'mousemove')

mouseMove$
  .pipe(
    map(e => ({
      x: e.offsetX,
      y: e.offsetY,
    }))
  )
  .subscribe(pos => {
    console.log(pos)
  })

