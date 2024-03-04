const express=require('express');
const router=express.Router();
const Post=require('../models/posts');


/*
router.get('/post1',(req,res)=>{
    res.send('post 1 is working')
})
router.get('/post2',(req,res)=>{
    res.send('post2 is working')
})*/

//creation
router.post('/add', (req,res)=>{
    
        const {title,text}=req.body;
        const post = new Post({title,text});
        post.save()
        .then(savedpost => {
            res.status(200).send(savedpost);
        })
        .catch(error => {
            console.error('Error saving post:', error);
            res.status(500).send('Internal server error');
        });
});


//Get all posts
router.get('/all', (req, res) =>{
    Post.find({})
    .then(
        (posts)=>{
            res.status(200).send(posts);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )


});

// Get post by ID
router.get('/getbyId/:id', (req, res) => {
    let id =req.params.id;
    Post.findById(id)
    .then(
        (post)=>{
            res.status(200).send(post);
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);
        }
        )
}); 

//update post
router.put('update/:id',(req,res)=>{
       let id =req.params.id;
       const{title,text} = req.body;
       const updatedpost =  Post.findByIdAndUpdate(id,{title,content},{new:true})
       .then(
        (updatedpost)=>{
            res.status(200).send(updatedpost);
        }
        ).catch(
            (err)=>{
                res.status(400).send(err);
            }
            )
    });

// Delete post by ID
router.delete('/delete/:id', (req, res) => {
    let id =req.params.id;
    Post.findByIdAndDelete(id)
    .then(
        ()=>{
            res.status(200).send('post deleted ')
        }
    ).catch(
        (err)=>{
            res.status(400).send(err);
        }
    )
});
module.exports=router
