const { default: mongoose } = require("mongoose");
const course = require("../modal/Course");
const collages = require("../modal/Collage");
const collage = require("../modal/Collage");

const addCourses = async (req , res) =>{
    // const { collage } = req.params.id ;
    // const  collage  = req.query._id
    // console.log("Collage is " + collage);
    const findCollage = collages.find({})
    console.log(findCollage);
    const {  name , description , price } = req.body ;
    const main = new course({ name , description , price , collage : findCollage });
    await main.save().then(()=>{
        console.log("Collage is " + main);
        res
        .status(200)
        .json({ success: true, Massage: "Course Added Successfully", main });
      }).catch((err) =>{
        res
        .status(400)
        .json({ success: false , Massage: "Course is created already"});
    })
    // let obj = new mongoose.Types.ObjectId(course.id);

    // await collage.updateOne(
    //     {
    //         email : name
    //     },{
    //         $push : {course : obj}
    //     },
    //     {
    //         upsert : false , new : true 
    //     }
    // ) 
}

const allCourses = async (req,res) =>{
    const courseData = await course.find();
    if(courseData === 0){
        res
    .status(404)
    .json({ success: false, Massage: "Collage is not found please add state ..."});
    }
    res
    .status(200)
    .json({ success: true, courseData });
    
}

const findOneCourses = async (req,res) =>{
    const { collageID } = req.params;
    const courseData = await course.findOne({ collageID });
    if(courseData === 0){
        res
    .status(404)
    .json({ success: false, Massage: "Collage is not found please add state ..."});
    }
    res
    .status(200)
    .json({ success: true, courseData });
    
}

const createCourse = async (req , res) =>{
  const id = req.params.id;
  const clgExist = await collage.findById(id);

  if(!clgExist){
    res
      .status(404)
      .json({
        success: false,
        Massage: "Collage is not found please add state ...",
      });
  }

  const {name , description , price} = req.body ;
  if(!name || !description || !price){
    res.status(404).json({success : false , Massage : "please fill the all fileds"})
  }

  const create = new course({
    name , description , price , collage : id
  })

  await create.save().then(()=>{
    res.status(200).json({success : true , Massage : "Course added successfully...!"})
  }).catch((err) =>{
    console.log(err);
  })
  
}

const deleteCourse = async (req , res) =>{

    const id = req.params.id;
  
    const findCourse = await course.findById(id);
    if(!findCourse){
      res
        .status(400)
        .json({
          success: false,
          Message: "Course creation failed",
        });
    }
    await course.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      Message: "Course deleted successfully...!",
    });
  }

  const courseEdit = async (req, res) => {
    const id = req.params.id;
    const clgExist = await course.findById(id);
  
    if(!clgExist){
      res
        .status(404)
        .json({
          success: false,
          Massage: "Collage is not found please add state ...",
        });
    }
    const updateData = req.body;
    const courseUpdate = await course.findByIdAndUpdate(id, updateData, { new: true });
    if (!courseUpdate) {
      res
        .status(404)
        .json({
          success: false,
          Massage: "Course is not found please add state ...",
        });
    }
    res.status(200).json(courseUpdate);
  };

  const courseFind = async (req, res) => {
    const id = req.params.id;
  
    const findCourse = await course.findById(id);
    if (!findCourse) {
      res
        .status(404)
        .json({
          success: false,
          Massage: "Collage is not found please add state ...",
        });
    }
    // console.log(findCollage.data);
    res.status(200).json(findCourse);
  };
  
  



module.exports = { allCourses , findOneCourses , courseFind , createCourse , deleteCourse , courseEdit}