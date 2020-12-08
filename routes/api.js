const express = require('express');
const BlogPost = require('../model/blogpost');

const router =express.Router();



//Routes
router.get('',(req, res) => {
    BlogPost.find({ })
        .then((data) => {
            console.log('Data:' , data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error:', daerrorta)
        })
})

router.post('/save',(req, res) => {

   
    console.log('Body:',req.body)
    const data= req.body;

    const newBlogPost = new BlogPost(data);
    
    //save.
    newBlogPost.save((error) =>{
        if(error){
           res.status(500).json({msg:"an error occured during data save"});
           return;
        }
        return  res.json(data);
    })

   


})

router.get('/name',(req, res) => {

    
        const data= [
            {"name": "Butter Panner",  
            "price": 100.0,
            "images": "https://i2.wp.com/spicecravings.com/wp-content/uploads/2018/03/Paneer-Butter-Masala-1.jpg?fit=1800,1200&ssl=1"
            },
            {
                "name": "Chilli Potato",
	            "price": 90.0,
	            "images": "https://i.ytimg.com/vi/Y2oYE785Q4o/maxresdefault.jpg"
            },
            {
                "name": "Rasgulla",
            	"price": 30.0,
            	"images": "https://indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe.jpg"

            },
            {
                "name": "Momos",
	            "price": 60.0,
	            "images": "https://www.thespruceeats.com/thmb/JPUwTo_IqmHowaEq4tj-psZz48w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/4271692448_68e0f951f6_o-56a510453df78cf772862aff.jpg"
            },
            {
                "name": "Litte chockha",
            	"price": 80.0,
            	"images": "https://recipes.timesofindia.com/thumb/53188495.cms?imgsize=138903&width=800&height=800"
            }
        ];
        res.json(data);

    
})


module.exports =router;