const express = require("express");
const Post = require("../models/posts")
const router = express.Router()

// const bodyparser = require("body-parser");
// const { body, validationResult } = require('express-validator')
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const secret = 'RESTAPI'

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
        user: req.user
    });
    res.json({
        status: "success",
        posts:posts

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

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
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