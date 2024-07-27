const collage = require("../modal/Collage");
// const Collage = require("../modal/Collage");
const course = require("../modal/Course");

const addCollage = async (req, res) => {
  const { name, email, location } = req.body;
  const main = new collage({ name, email, location });

  await main
    .save()
    .then((savedCollege) => {
      res
        .status(200)
        .json({
          success: true,
          Message: "Collage Created Successfully",
          main: savedCollege,
        });
    })
    .catch((err) => {
      res
        .status(404)
        .json({ success: false, Message: "Collage is created already" });
    });
};

const allCollage = async (req, res) => {
  const collageData = await collage.find();
  if (collageData === 0) {
    res
      .status(404)
      .json({
        success: false,
        Massage: "Collage is not found please add state ...",
      });
  }
  res.status(200).json({ success: true, collageData });
};

const collageEdit = async (req, res) => {
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
  const updateData = req.body;
  const collageUpdate = await collage.findByIdAndUpdate(id, updateData, { new: true });
  if (!collageUpdate) {
    res
      .status(404)
      .json({
        success: false,
        Massage: "Collage is not found please add state ...",
      });
  }
  res.status(200).json(collageUpdate);
};

const collageFind = async (req, res) => {
  const id = req.params.id;

  const findCollage = await collage.findById(id);
  if (!findCollage) {
    res
      .status(404)
      .json({
        success: false,
        Massage: "Collage is not found please add state ...",
      });
  }
  // console.log(findCollage.data);
  res.status(200).json(findCollage);
};


const deleteCollage = async (req , res) =>{

  const id = req.params.id;

  const findCollage = await collage.findById(id);
  if(!findCollage){
    res
      .status(400)
      .json({
        success: false,
        Message: "Course creation failed",
      });
  }
  await collage.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    Message: "Collage deleted successfully...!",
  });
}

module.exports = { addCollage, allCollage, collageFind, collageEdit , deleteCollage};
