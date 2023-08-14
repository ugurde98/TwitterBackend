import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

//create user
router.post('/', async (req, res) => {
    const { email, name, username } = req.body


    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello I am new on Twitter"
            }
        })
        res.json(result)

    } catch (error) {
        res.status(400).json({ error: "Username and Email Should Be Unique" })

    }
})

//list users
router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
})

//get one user
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })

    res.json(user)
})

//update user 
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, bio, image } = req.body
    try {
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data:{
                name,
                bio,
                image
            }
        })
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: "Failed to Update User" })

    }

   
})
//delete user

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    await prisma.user.delete({where:{id:Number(id)}})
    res.status(200)
})



export default router