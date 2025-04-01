import prisma from '../config/database.js' ;

export const createTask = async (req , res) => {
    const {title , description} = req.body ;
    const userId = req.user.userId ;

    try {
        const task = await prisma.task.create({
            data : {
                title , description , userId 
            },
        });

        return res.status(201).json({task}) ;
    }catch(error){
        res.status(500).json({message : "Error in creating task" ,error : error.message}) ;
    }
};

export const getTask = async (req , res) => {
    const userId = req.user.userId ;

    try {
        const findTask = await prisma.task.findMany({where : {userId}}) ;

        return res.status(200).json(findTask) ;
    }catch(error){
        res.status(500).json({message : "Error in Finding Task :" , error: error.message}) ;
    }
};

export const updateTask = async (req , res) => {
    const userId = req.params.id ;
    const {title , description , completed} = req.body ;

    try {
        const findTask = await prisma.task.findMany({where : {userId} ,
            data : {
                title , description , completed
            } ,
    }) ;

        return res.status(200).json(findTask) ;
    }catch(error){
        res.status(500).json({message : "Error in Finding Task :" , error: error.message}) ;
    }
};

export const deleteTask = async (req,res) => {
    const userId = params ;

    try {
        await prisma.task.delete({ where: { id } });
        res.status(200).json({ message: "Task deleted" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting task", error: error.message });
      }

} ;