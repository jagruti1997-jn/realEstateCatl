const express = require("express");
const Post = require("../models/posts")
const router = express.Router()
const multer=require("multer")





// const bodyparser = require("body-parser");
// const { body, validationResult } = require('express-validator')
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const secret = 'RESTAPI'


//image upload





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
router.post("/", async (req, res) => {
    const posts = await Post.create({
        PropertyType: req.body.PropertyType,
        Negotable: req.body.Negotable,
        Price: req.body.Price,
        Ownership: req.body.Ownership,
        PropertyAge: req.body.PropertyAge,
        PropertyApproved: req.body.PropertyApproved,
        PropertyDescription: req.body.PropertyDescription,
        BankLoan: req.body.BankLoan,
        Length: req.body.Length,
        Breadth:req.body.Breadth,
        TotalArea:req.body.TotalArea,
        AreaUnit:req.body.AreaUnit,
        NoofBHK:req.body.NoofBHK,
        NoofFloor:req.body.NoofFloor,
        Attached:req.body.Attached,
        WesternToilet:req.body.WesternToilet,
        Furnished:req.body.Furnished,
        CarParking:req.body.CarParking,
        Lift:req.body.Lift,
        Electricity:req.body.Electricity,
        Facing:req.body.Facing,
        
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
router.put("/:id", async (req, res) => {
    try {
        const posts = await Post.updateOne({ _id: req.params.id }, { body: req.body.body }, { runValidators: true });
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

module.exports = router;