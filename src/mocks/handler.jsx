import { rest } from 'msw'
export const handlers = [
    rest.get('http://localhost:3004/login',(req, res ,ctx)=>{
        return res(
            ctx.fetch
        )
    })
]