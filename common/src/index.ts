import z from "zod";

export const signUpInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name:z.string().optional()
  })
  //typeinferences in zod.



export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name:z.string().optional()
  })



export const createBlogInput = z.object({
    title: z.string().email(),
    content: z.string()
})



export const updateBlogInput = z.object({
    title: z.string().email(),
    content: z.string(),
    id:z.number()
})

export type SignUpInput= z.infer<typeof signUpInput>
export type SigninInput= z.infer<typeof signinInput>
export type CreateBlogInput=z.infer<typeof createBlogInput>
export type UpdateBlogInput=z.infer<typeof updateBlogInput>
