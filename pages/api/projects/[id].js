import {
    PrismaClient
} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
	const { query :{ id }} = req; 
	const projects = await prisma.project.findMany();
	const filtered = projects.filter(project => project.id === id)
	// get a specific project
	if(req.method === "GET"){
		if (filtered.length > 0 ){
			res.status(200).json(filtered[0]);
		}else{
			res.status(404).json({"msg":'project with the id of ${id} is not found.'});
		}
	}else if (req.method === "DELETE"){  // delete a specific project
		const deleteProject = await prisma.project.delete({
			where : {
				id : filtered[0].id
			}
		}).then(()=>{
			return res.status(201).json({"msg":"project deleted successfully."})
		})
		return res.status(500).json({"error":"internal servor error , could not delete project."})
	}
}