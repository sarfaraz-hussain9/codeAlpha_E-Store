const asyncHandler=(fun)=>(req,res,next)=>{
    Promise.resolve(fun(req,res,next)).catch(error=>{
        res.status(500).json({message:error.message})
    });
}

export default asyncHandler;