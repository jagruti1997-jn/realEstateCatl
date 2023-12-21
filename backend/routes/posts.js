const express = require("express");
const Post = require("../models/posts")
const router = express.Router()



router.get("/", async (req, res) => {
    try{
        const posts = await Post.find({ user: req.user });
        res.json({
            status: "success",
            posts:posts
        })
    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
  
})

router.get("/:id", async (req, res) => {
   
    try{
       
        const posts = await Post.findById({_id: req.params.id});
        res.json({
            status: "success",
            posts:posts
        })
       
    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
  
})



// router.get("/find/:City", async (req, res) => {
   
//     try{
       
//         const posts = await Post.find({City:req.body.City});
//         res.json({
//             status: "success",
//             posts:posts
//         })
       
//     }catch(e){
//         res.status(500).send({
//             status:"failed",
//             message: e.message
          
//         })  
//     }
  
// })




router.post("/" ,async (req, res) => {
    const posts = await Post.create({
        PropertyType: req.body.PropertyType,Negotable: req.body.Negotable,Price: req.body.Price,Ownership: req.body.Ownership,
        PropertyAge: req.body.PropertyAge,PropertyApproved: req.body.PropertyApproved,PropertyDescription: req.body.PropertyDescription,
        BankLoan: req.body.BankLoan,
        Length: req.body.Length,Breadth:req.body.Breadth,TotalArea:req.body.TotalArea,AreaUnit:req.body.AreaUnit,
        NoofBHK:req.body.NoofBHK,NoofFloor:req.body.NoofFloor,Attached:req.body.Attached,WesternToilet:req.body.WesternToilet,
        Furnished:req.body.Furnished,CarParking:req.body.CarParking,Lift:req.body.Lift,Electricity:req.body.Electricity,Facing:req.body.Facing,
       
        Name:req.body.Name,Mobile:req.body.Mobile,PostedBy:req.body.PostedBy,SaleType:req.body.SaleType,FeaturedPackage:req.body.FeaturedPackage,
        PPDPackage:req.body.PPDPackage,

        Email:req.body.Email, City:req.body.City,Area:req.body.Area, Pincode:req.body.Pincode,
        Address:req.body.Address, Landmark:req.body.Landmark,Latitude:req.body.Latitude,Longitude:req.body.Longitude,
        user: req.user
    });
    res.json({
        status: "success",
        posts:posts,
        postsId:posts._id

        // title:posts.title,
        // image:posts.image
    })
})
router.put("/:id", async (req, res)  => {
    try {
        
        const posts = await Post.updateMany({ _id: req.params.id },
           { $set: { Length: req.body.Length , Breadth: req.body.Breadth , TotalArea: req.body.TotalArea ,
              AreaUnit: req.body.AreaUnit , NoofBHK: req.body.NoofBHK , NoofFloor: req.body.NoofFloor ,
              Attached: req.body.Attached , WesternToilet: req.body.WesternToilet , Furnished: req.body.Furnished,
             CarParking: req.body.CarParking , Lift: req.body.Lift 
             , Electricity: req.body.Electricity , Facing: req.body.Facing ,  Name:req.body.Name,Mobile:req.body.Mobile,PostedBy:req.body.PostedBy,
             SaleType:req.body.SaleType,FeaturedPackage:req.body.FeaturedPackage,
             PPDPackage:req.body.PPDPackage, 
              Email:req.body.Email, City:req.body.City,Area:req.body.Area, Pincode:req.body.Pincode,
             Address:req.body.Address, Landmark:req.body.Landmark,Latitude:req.body.Latitude,Longitude:req.body.Longitude,
             runValidators: true }});
        res.json({
            status: "success",
            posts:posts,
            postsId:posts._id
               })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const posts = await Post.deleteOne({ _id: req.params.id });
        res.json({
            status: "success",
            posts
        })
    }
  catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
// router.delete("/:id", async (req, res) => {
//     try {
//         const posts = await Post.deleteOne({ _id: req.params.id });
//         res.json({
//             status: "success",
//             posts
//         })

//     } catch (e) {
//         res.status(500).json({
//             status: "failed",
//             message: e.message
//         })
//     }

// })
// router.patch("/:id", async (req, res) => {
//     try {
//         const posts = await Post.updateOne({ _id: req.params.id }, { image: req.body.image }, { runValidators: true });
//         res.json({
//             status: "success",
//             posts
//         })

//     } catch (e) {
//         res.status(500).json({
//             status: "failed",
//             message: e.message
//         })
//     }

// })


//put for edit

router.put("/editpage/:id", async (req, res)  => {
    try {
        
        const posts = await Post.updateMany({ _id: req.params.id },
           { $set: { PropertyType: req.body.PropertyType,Negotable: req.body.Negotable,Price: req.body.Price,Ownership: req.body.Ownership,
            PropertyAge: req.body.PropertyAge,PropertyApproved: req.body.PropertyApproved,PropertyDescription: req.body.PropertyDescription,
            BankLoan: req.body.BankLoan,
             Length: req.body.Length , Breadth: req.body.Breadth , TotalArea: req.body.TotalArea ,
              AreaUnit: req.body.AreaUnit , NoofBHK: req.body.NoofBHK , NoofFloor: req.body.NoofFloor ,
              Attached: req.body.Attached , WesternToilet: req.body.WesternToilet , Furnished: req.body.Furnished,
             CarParking: req.body.CarParking , Lift: req.body.Lift 
             , Electricity: req.body.Electricity , Facing: req.body.Facing ,  Name:req.body.Name,Mobile:req.body.Mobile,PostedBy:req.body.PostedBy,
             SaleType:req.body.SaleType,FeaturedPackage:req.body.FeaturedPackage,
             PPDPackage:req.body.PPDPackage, 
              Email:req.body.Email, City:req.body.City,Area:req.body.Area, Pincode:req.body.Pincode,
             Address:req.body.Address, Landmark:req.body.Landmark,Latitude:req.body.Latitude,Longitude:req.body.Longitude,
             runValidators: true }});
        res.json({
            status: "success",
            posts:posts,
            postsId:posts._id
               })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})

module.exports = router;