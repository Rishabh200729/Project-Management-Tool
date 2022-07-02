import {
    PrismaClient
} from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const session = await getSession({ req })
    // get all projects
    if (req.method === "GET") {
        console.log(session)
        const getProjects = await prisma.project.findMany({
            include :{
                user: true
            }
        });
        return res.status(200).json(getProjects);
    } else if (req.method === "POST") { // add a new project in database using Prisma
        const {
            name,
            description
        } = req.body.project;
        // find the authorized user
        const current_user = await prisma.user.findUnique({
            where: {
                email: session.user.email,
            },
        });
        //create the project
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                userId: current_user.id,
            },
            include: {
                user: true,
            },
        });
        return res.status(201).json({
            newProject
        });
    }
    res.end();
}